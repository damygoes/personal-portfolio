import { describe, expect, it } from "vitest";
import {
  BlogIndexSchema,
  BodyBlockSchema,
  CaseSectionSchema,
  CaseStudySchema,
  PostCardSchema,
  ProjectCardSchema,
  SiteSettingsSchema,
  fallbackChain,
  isLocale,
} from "./index";

const project = {
  index: 1,
  total: 5,
  slug: "passe",
  title: "Passe",
  titleDot: true,
  kind: "iOS app",
  summary: "Summary",
  tech: ["Expo"],
  tone: "warm",
  ghost: "01",
  primaryHref: "/en/work/passe",
  hasCaseStudy: true,
  featured: true,
};

const post = {
  slug: "post",
  href: "/en/blog/post",
  title: "Title",
  excerpt: "Excerpt",
  date: "2026-08-30",
  dateLabel: "Aug 30, 2026",
  readingMinutes: 7,
  category: { slug: "programming", title: "Programming" },
  categories: [{ slug: "programming", title: "Programming" }],
  tone: "ink",
  ghost: "Code",
};

describe("contracts", () => {
  it("parses a project card and rejects an unknown tone", () => {
    expect(ProjectCardSchema.safeParse(project).success).toBe(true);
    expect(
      ProjectCardSchema.safeParse({ ...project, tone: "stone" }).success,
    ).toBe(false);
  });

  it("parses every case-study section type", () => {
    const base = { label: "Overview", number: "01" };
    const sections = [
      { type: "textBlock", ...base, heading: "H", body: [[{ text: "Body" }]] },
      { type: "stepsGrid", ...base, steps: [{ title: "Create a trip" }] },
      {
        type: "featureGrid",
        ...base,
        features: [{ title: "Keepsakes", text: "Export" }],
      },
      {
        type: "plans",
        ...base,
        plans: [
          {
            name: "Free",
            price: "€0",
            period: "/ month",
            features: ["3 trips"],
          },
        ],
      },
      {
        type: "architecture",
        ...base,
        core: [{ eyebrow: "API", title: "Next.js", isCore: true }],
        sub: [],
        notes: [],
      },
      { type: "quote", ...base, text: "Quote" },
    ];
    for (const section of sections) {
      expect(CaseSectionSchema.safeParse(section).success).toBe(true);
    }
  });

  it("parses a case study with an all-work next link", () => {
    const result = CaseStudySchema.safeParse({
      project,
      caseNumber: "02",
      titleParts: [
        { text: "Ellies", outlined: false },
        { text: "Note", outlined: true },
      ],
      lede: "Lede",
      meta: [{ label: "Type", value: "iOS app" }],
      screens: [],
      sections: [],
      next: { kind: "allWork", href: "/en/work", from: 3, total: 5 },
      contentLocale: "en",
      availableLocales: ["en"],
    });
    expect(result.success).toBe(true);
  });

  it("carries opaque, CMS-neutral edit attributes", () => {
    expect(
      ProjectCardSchema.safeParse({
        ...project,
        editAttrs: { "data-sanity": "id=project.passe;path=title" },
      }).success,
    ).toBe(true);
    expect(
      ProjectCardSchema.safeParse({ ...project, editAttrs: "id=x" }).success,
    ).toBe(false);
  });

  it("parses post cards, body blocks and the blog index", () => {
    expect(PostCardSchema.safeParse(post).success).toBe(true);
    expect(
      BodyBlockSchema.safeParse({
        _type: "heading",
        _key: "h1",
        id: "s1",
        text: "Keep it small",
      }).success,
    ).toBe(true);
    expect(
      BlogIndexSchema.safeParse({
        total: 1,
        categories: [],
        featured: post,
        posts: [],
      }).success,
    ).toBe(true);
  });

  it("requires the site settings fields", () => {
    expect(
      SiteSettingsSchema.safeParse({ name: "Damilola Bada" }).success,
    ).toBe(false);
  });
});

describe("locale registry", () => {
  it("falls back to the default locale", () => {
    expect(fallbackChain("de")).toEqual(["de", "en"]);
    expect(fallbackChain("en")).toEqual(["en"]);
  });

  it("narrows unknown strings", () => {
    expect(isLocale("de")).toBe(true);
    expect(isLocale("fr")).toBe(true);
    expect(isLocale("es")).toBe(false);
  });
});
