import {
  BlogIndexSchema,
  HomepageSchema,
  LegalPageSchema,
  PostSchema,
  ProjectCardSchema,
  ProjectSchema,
  SiteSchema,
} from "@portfolio/contracts";
import { describe, expect, it } from "vitest";
import { FixtureContentService } from "./service";

const service = new FixtureContentService();
const locales = ["en", "de"] as const;

describe.each(locales)("FixtureContentService (%s)", (locale) => {
  it("returns a valid Site", async () => {
    const site = await service.getSite(locale);
    expect(SiteSchema.safeParse(site).success).toBe(true);
  });

  it("returns a valid Homepage", async () => {
    const homepage = await service.getHomepage(locale);
    expect(HomepageSchema.safeParse(homepage).success).toBe(true);
  });

  it("returns a valid BlogIndex", async () => {
    const blogIndex = await service.getBlogIndex(locale);
    expect(blogIndex).not.toBeNull();
    expect(BlogIndexSchema.safeParse(blogIndex).success).toBe(true);
  });

  it("returns valid Posts, including a photoEssay layout", async () => {
    const blogIndex = await service.getBlogIndex(locale);
    for (const card of blogIndex!.posts) {
      const post = await service.getPost(locale, card.slug);
      expect(post).not.toBeNull();
      expect(PostSchema.safeParse(post).success).toBe(true);
    }

    const photoEssay = await service.getPost(locale, "a-walk-through-berlin");
    expect(photoEssay?.layout).toBe("photoEssay");
  });

  it("returns valid Projects", async () => {
    const { projects } = await service.getRoutes();
    for (const { slug } of projects.filter((p) => p.locale === locale)) {
      const project = await service.getProject(locale, slug);
      expect(project).not.toBeNull();
      expect(ProjectSchema.safeParse(project).success).toBe(true);
    }
  });

  it("returns all ProjectCards via getProjects", async () => {
    const cards = await service.getProjects(locale);
    expect(cards.length).toBe(5);
    for (const card of cards) {
      expect(ProjectCardSchema.safeParse(card).success).toBe(true);
    }
    expect(cards.map((c) => c.index)).toEqual(["01", "02", "03", "04", "05"]);
  });

  it("paginates the blog index across 12 posts", async () => {
    const page1 = await service.getBlogIndex(locale);
    expect(page1!.posts.length).toBe(6);
    expect(page1!.pagination).toEqual({
      page: 1,
      totalPages: 2,
      nextHref: "?page=2",
    });

    const page2 = await service.getBlogIndex(locale, { page: 2 });
    expect(page2!.posts.length).toBe(6);
    expect(page2!.pagination.page).toBe(2);
    expect(page2!.pagination.previousHref).toBe("?page=1");
    expect(page2!.pagination.nextHref).toBeUndefined();

    expect(await service.getBlogIndex(locale, { page: 3 })).toBeNull();
  });

  it("filters the blog index by category", async () => {
    const engineering = await service.getBlogIndex(locale, {
      category: "engineering",
    });
    const photography = await service.getBlogIndex(locale, {
      category: "photography",
    });
    expect(
      engineering!.categories.find((c) => c.slug === "engineering")!.postCount,
    ).toBe(8);
    expect(
      photography!.categories.find((c) => c.slug === "photography")!.postCount,
    ).toBe(4);
    expect(await service.getBlogIndex(locale, { category: "nope" })).toBeNull();
  });

  it("returns valid LegalPages", async () => {
    const { legalPages } = await service.getRoutes();
    for (const { slug } of legalPages.filter((p) => p.locale === locale)) {
      const page = await service.getLegalPage(locale, slug);
      expect(page).not.toBeNull();
      expect(LegalPageSchema.safeParse(page).success).toBe(true);
    }
  });

  it("returns null for unknown slugs", async () => {
    expect(await service.getPost(locale, "nope")).toBeNull();
    expect(await service.getProject(locale, "nope")).toBeNull();
    expect(await service.getLegalPage(locale, "nope")).toBeNull();
  });
});
