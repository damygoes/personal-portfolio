import {
  AboutPageSchema,
  BlogIndexSchema,
  CaseStudySchema,
  HomeSchema,
  PostSchema,
  SiteSettingsSchema,
  WorkPageSchema,
  type Locale,
} from "@portfolio/contracts";
import { describe, expect, it } from "vitest";
import { FixtureContentService } from "./service";

const service = new FixtureContentService();
const locales: Locale[] = ["en", "de"];

/** Every string anywhere in a value. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object")
    return Object.values(value).flatMap(strings);
  return [];
}

describe.each(locales)("FixtureContentService (%s)", (locale) => {
  it("returns valid DTOs for every page", async () => {
    SiteSettingsSchema.parse(await service.getSiteSettings(locale));
    HomeSchema.parse(await service.getHome(locale));
    WorkPageSchema.parse(await service.getWorkPage(locale));
    AboutPageSchema.parse(await service.getAbout(locale));
    BlogIndexSchema.parse(await service.getBlogIndex(locale));
    const routes = await service.getRoutes();
    for (const slug of routes.caseStudies) {
      CaseStudySchema.parse(await service.getCaseStudy(slug, locale));
    }
    for (const slug of routes.posts) {
      PostSchema.parse(await service.getPost(slug, locale));
    }
  });

  it("never returns design placeholders", async () => {
    const routes = await service.getRoutes();
    const all = [
      await service.getHome(locale),
      await service.getWorkPage(locale),
      await service.getAbout(locale),
      ...(await Promise.all(
        routes.caseStudies.map((s) => service.getCaseStudy(s, locale)),
      )),
    ];
    for (const s of strings(all)) {
      expect(s).not.toMatch(/^\[.*\]$/);
      expect(s).not.toMatch(/To write|Prompts/);
    }
  });

  it("prefixes links with the locale", async () => {
    const home = await service.getHome(locale);
    expect(home.featured[0]?.primaryHref).toBe(`/${locale}/work/passe`);
    expect(home.latestPosts[0]?.href.startsWith(`/${locale}/blog/`)).toBe(true);
  });
});

describe("projects", () => {
  it("orders and counts projects", async () => {
    const work = await service.getWorkPage("en");
    expect(work.projectCount).toBe(5);
    expect(work.caseStudyCount).toBe(2);
    expect(work.featured.map((p) => p.title)).toEqual(["Passe", "ElliesNote"]);
    expect(work.others.map((p) => p.title)).toEqual([
      "URL Analyzer",
      "KPI Bot",
      "Archetype",
    ]);
    expect(work.featured[0]).toMatchObject({
      titleDot: true,
      ghost: "01",
      tone: "warm",
    });
    expect(work.others[0]?.primaryHref).toBe("https://github.com/damygoes");
  });

  it("builds the hero's new-work link from the latest featured project", async () => {
    const home = await service.getHome("en");
    expect(home.newWork).toEqual({
      label: "Passe., a travel journal",
      href: "/en/work/passe",
    });
  });
});

describe("case studies", () => {
  it("drops placeholder sections and renumbers the rest", async () => {
    const passe = await service.getCaseStudy("passe", "en");
    expect(passe?.sections.map((s) => `${s.number} ${s.label}`)).toEqual([
      "01 Overview",
      "02 Challenge",
      "03 How it works",
      "04 Key features",
      "05 Business model",
      "06 How it's built",
    ]);
    const ellies = await service.getCaseStudy("elliesnote", "en");
    expect(ellies?.sections.map((s) => `${s.number} ${s.label}`)).toEqual([
      "01 Overview",
      "02 Key features",
      "03 How it's built",
    ]);
  });

  it("keeps real content and removes empty meta", async () => {
    const passe = await service.getCaseStudy("passe", "en");
    expect(passe?.meta.map((m) => m.label)).toEqual(["Platforms", "Stack"]);
    const overview = passe?.sections[0];
    expect(overview?.type === "textBlock" && overview.body).toHaveLength(1);
    expect(overview?.heading).toBe("A place for the memories worth keeping");
    const arch = passe?.sections.find((s) => s.type === "architecture");
    expect(arch?.type === "architecture" && arch.sub.map((b) => b.sub)).toEqual(
      [undefined, undefined, undefined],
    );
  });

  it("links to the next case study, then to all work", async () => {
    const passe = await service.getCaseStudy("passe", "en");
    expect(passe?.next).toMatchObject({
      kind: "project",
      title: "ElliesNote",
      index: 2,
      total: 5,
    });
    const ellies = await service.getCaseStudy("elliesnote", "en");
    expect(ellies?.next).toEqual({
      kind: "allWork",
      href: "/en/work",
      from: 3,
      total: 5,
    });
    expect(ellies?.titleParts.map((p) => p.outlined)).toEqual([false, true]);
    expect(await service.getCaseStudy("kpi-bot", "en")).toBeNull();
  });
});

describe("about", () => {
  it("formats experience per locale", async () => {
    const en = await service.getAbout("en");
    expect(en.experience).toHaveLength(7);
    expect(en.experience[0]).toMatchObject({
      when: "Nov 2025 — Present",
      isCurrent: true,
    });
    expect(en.experienceSince).toBe(2020);
    const de = await service.getAbout("de");
    expect(de.experience[0]?.when).toBe("Nov. 2025 — heute");
  });

  it("counts skills", async () => {
    const about = await service.getAbout("en");
    expect(about.skills.map((s) => s.count)).toEqual([
      "(05)",
      "(06)",
      "(06)",
      "(08)",
    ]);
  });
});

describe("blog", () => {
  it("counts categories and features the newest post", async () => {
    const blog = await service.getBlogIndex("en");
    expect(blog.total).toBe(7);
    expect(blog.sinceYear).toBe(2026);
    expect(blog.categories.map((c) => c.count)).toEqual([2, 1, 2, 2]);
    expect(blog.featured?.slug).toBe("shipping-a-react-native-app-solo");
    expect(blog.posts).toHaveLength(6);
  });

  it("filters by category and ignores unknown ones", async () => {
    const cycling = await service.getBlogIndex("en", { category: "cycling" });
    expect(cycling.activeCategory).toBe("cycling");
    expect(cycling.featured?.slug).toBe("black-forest-before-work");
    expect(cycling.posts.map((p) => p.slug)).toEqual(["first-200km-ride"]);
    const unknown = await service.getBlogIndex("en", { category: "nope" });
    expect(unknown.activeCategory).toBeUndefined();
    expect(unknown.posts).toHaveLength(6);
  });

  it("builds the TOC and related posts", async () => {
    const post = await service.getPost("code-review-team-of-three", "en");
    expect(post?.toc.map((t) => `${t.number} ${t.text}`)).toEqual([
      "01 Reviews are conversations",
      "02 Keep it small",
      "03 The checklist",
      "04 What changed",
    ]);
    expect(post?.dateLabel).toBe("Aug 30, 2026");
    expect(post?.related).toHaveLength(3);
    expect(post?.related.some((p) => p.slug === post.slug)).toBe(false);
    const de = await service.getPost("code-review-team-of-three", "de");
    expect(de?.dateLabel).toBe("30. Aug. 2026");
  });
});
