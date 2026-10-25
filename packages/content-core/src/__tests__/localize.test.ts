import { describe, expect, it } from "vitest";
import { localizeContent } from "../localize";
import type { ContentSet, Translations } from "../records";

const content: ContentSet = {
  site: {
    name: "Ada",
    initials: "AL",
    tagline: "I build things.",
    email: "ada@example.com",
    socials: [],
    location: "Germany",
    timezone: "Europe/Berlin",
    yearsExperienceLabel: "4+ yrs",
    heroMeta: ["Based in Germany"],
    currentRole: { title: "Engineer", company: "ACME" },
    marqueeItems: [],
  },
  about: {
    statement: [{ text: "Hello" }],
    bio: [],
    teaserParagraphs: [],
    lede: "English lede",
    facts: [],
  },
  experience: [
    {
      order: 1,
      role: "Lead",
      company: "ACME",
      location: null,
      workMode: null,
      start: "2025-01",
      end: null,
    },
  ],
  skillGroups: [{ order: 1, title: "Database", items: ["Postgres"] }],
  projects: [
    {
      order: 1,
      slug: "app",
      title: "App.",
      kind: "iOS app",
      summary: "An app.",
      status: { label: "Live", isNew: true },
      tech: [],
      links: {},
      coverTone: "warm",
      featured: true,
    },
  ],
  caseStudies: [{ project: "app", lede: "Case", meta: [], sections: [] }],
  categories: [{ order: 1, slug: "tech", title: "Tech", coverTone: "lagoon" }],
  posts: [
    {
      slug: "a",
      title: "Post A",
      categories: ["tech"],
      publishedAt: "2026-01-01",
      readingMinutes: 1,
      coverWord: "A",
      excerpt: "A",
    },
    {
      slug: "b",
      title: "Post B",
      categories: ["tech"],
      publishedAt: "2026-01-02",
      readingMinutes: 1,
      coverWord: "B",
      excerpt: "B",
    },
  ],
};

const translations: Translations = {
  de: {
    site: {
      tagline: "Ich baue Dinge.",
      location: "",
      currentRoleTitle: "Ingenieurin",
    },
    projects: {
      app: { kind: "iOS-App", statusLabel: "Verfügbar", summary: "[To write]" },
    },
    experience: { "ACME|2025-01": { role: "Leitung" } },
    skillGroups: { 1: { title: "Datenbank" } },
    categories: { tech: { title: "Technik" } },
    about: { lede: "Deutsche Einleitung" },
    posts: { a: { title: "Beitrag A" } },
  },
};

describe("localizeContent", () => {
  it("returns the default content unchanged for the default locale", () => {
    const en = localizeContent(content, translations, "en");
    expect(en.site.tagline).toBe("I build things.");
    expect(en.projects[0]?.kind).toBe("iOS app");
    expect(en.about.contentLocale).toBe("en");
    expect(en.about.availableLocales).toEqual(["en", "de"]);
  });

  it("overlays field-level translations, falling back per field", () => {
    const de = localizeContent(content, translations, "de");
    expect(de.site.tagline).toBe("Ich baue Dinge.");
    // Empty and placeholder values fall back to English.
    expect(de.site.location).toBe("Germany");
    expect(de.projects[0]?.summary).toBe("An app.");
    expect(de.site.currentRole).toEqual({
      title: "Ingenieurin",
      company: "ACME",
    });
    expect(de.projects[0]?.kind).toBe("iOS-App");
    expect(de.projects[0]?.status).toEqual({ label: "Verfügbar", isNew: true });
    expect(de.experience[0]?.role).toBe("Leitung");
    expect(de.skillGroups[0]?.title).toBe("Datenbank");
    expect(de.categories[0]?.title).toBe("Technik");
  });

  it("serves translated documents, and the default where there is none", () => {
    const de = localizeContent(content, translations, "de");
    expect(de.about).toMatchObject({
      lede: "Deutsche Einleitung",
      contentLocale: "de",
    });
    const [a, b] = de.posts;
    expect(a).toMatchObject({
      title: "Beitrag A",
      contentLocale: "de",
      availableLocales: ["en", "de"],
    });
    // Shared fields come from the default document.
    expect(a?.publishedAt).toBe("2026-01-01");
    expect(b).toMatchObject({
      title: "Post B",
      contentLocale: "en",
      availableLocales: ["en"],
    });
    expect(de.caseStudies[0]).toMatchObject({
      lede: "Case",
      contentLocale: "en",
      availableLocales: ["en"],
    });
  });

  it("serves the default content when a locale has no translations", () => {
    const de = localizeContent(content, {}, "de");
    expect(de.site.tagline).toBe("I build things.");
    expect(de.about).toMatchObject({
      contentLocale: "en",
      availableLocales: ["en"],
    });
  });
});
