import {
  BlogIndexSchema,
  HomepageSchema,
  LegalPageSchema,
  PostSchema,
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
