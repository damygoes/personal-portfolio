import type { Translations } from "@portfolio/content-core";
import type { ContentService, Locale } from "@portfolio/contracts";
import {
  AboutPageSchema,
  BlogIndexSchema,
  CaseStudySchema,
  HomeSchema,
  PostSchema,
  SiteSettingsSchema,
  WorkPageSchema,
} from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { content, translations } from "@portfolio/fixtures/data";
import type { SanityClient } from "@sanity/client";
import { evaluate, parse } from "groq-js";
import { describe, expect, it } from "vitest";
import { createSanityContentService } from "../index";
import { seedDocuments, translationMetadata, type SeedDocument } from "../seed";

/**
 * Round trip: fixture content (EN + translations) → seed documents → the real
 * GROQ queries (evaluated in memory by groq-js) → mappers → content-core →
 * DTOs. The result must match the fixture service, so both adapters render
 * the same site in every locale.
 */

const PORTRAIT_ASSET = {
  _id: "image-portrait-1099x1211-jpg",
  _type: "sanity.imageAsset",
  url: "https://cdn.sanity.io/images/test/test/portrait-1099x1211.jpg",
  metadata: {
    lqip: "data:image/jpeg;base64,AAAA",
    dimensions: { width: 1099, height: 1211 },
  },
};

function seededDataset(
  withTranslations: Translations = translations,
): SeedDocument[] {
  const { documents, translationGroups } = seedDocuments(content, {
    includeSamples: true,
    translations: withTranslations,
    id: (kind, key) => `${kind}.${key}`,
    portrait: {
      _type: "image",
      alt: "Damilola Bada",
      asset: { _type: "reference", _ref: PORTRAIT_ASSET._id },
    },
  });
  const metadata = translationGroups.map((group, i) =>
    translationMetadata(`meta.${i}`, group),
  );
  return [...documents, ...metadata, PORTRAIT_ASSET as unknown as SeedDocument];
}

/** A client whose fetch runs GROQ against an in-memory dataset. */
function memoryClient(dataset: readonly object[]): SanityClient {
  return {
    fetch: async (query: string, params: Record<string, unknown> = {}) => {
      const result = await evaluate(parse(query, { params }), {
        dataset,
        params,
      });
      return result.get();
    },
  } as unknown as SanityClient;
}

const sanityService = (dataset: readonly object[]) =>
  createSanityContentService({
    projectId: "test",
    dataset: "test",
    client: memoryClient(dataset),
  });

/**
 * Expected adapter differences: image URLs (CDN vs source), reading time
 * (computed from the body, stored in fixtures) and pre-highlighted code
 * HTML (fixtures only; the web app highlights at build time).
 */
function normalize(value: unknown): unknown {
  return JSON.parse(JSON.stringify(value), (key, v) => {
    if (key === "readingMinutes" || key === "html" || key === "blurDataURL")
      return undefined;
    if (key === "src") return "<image>";
    if (key === "availableLocales") return [...(v as string[])].sort();
    return v;
  });
}

async function everyDto(service: ContentService, locale: Locale) {
  const routes = await service.getRoutes();
  return {
    site: await service.getSiteSettings(locale),
    home: await service.getHome(locale),
    work: await service.getWorkPage(locale),
    about: await service.getAbout(locale),
    blog: await service.getBlogIndex(locale),
    blogCycling: await service.getBlogIndex(locale, { category: "cycling" }),
    caseStudies: await Promise.all(
      ["passe", "elliesnote", "kpi-bot"].map((s) =>
        service.getCaseStudy(s, locale),
      ),
    ),
    posts: await Promise.all(
      [...routes.posts, "missing"].map((s) => service.getPost(s, locale)),
    ),
    routes: {
      caseStudies: [...routes.caseStudies].sort(),
      posts: [...routes.posts].sort(),
    },
  };
}

const de = translations.de!;
const codeReview = "code-review-team-of-three";

describe("Sanity adapter round trip", () => {
  const dataset = seededDataset();

  it.each(["en", "de"] as const)(
    "matches the fixture service (%s)",
    async (locale) => {
      const actual = await everyDto(sanityService(dataset), locale);
      const expected = await everyDto(new FixtureContentService(), locale);
      expect(normalize(actual)).toEqual(normalize(expected));
    },
  );

  it("produces DTOs that pass the contracts", async () => {
    const service = sanityService(dataset);
    for (const locale of ["en", "de"] as const) {
      SiteSettingsSchema.parse(await service.getSiteSettings(locale));
      HomeSchema.parse(await service.getHome(locale));
      WorkPageSchema.parse(await service.getWorkPage(locale));
      AboutPageSchema.parse(await service.getAbout(locale));
      BlogIndexSchema.parse(await service.getBlogIndex(locale));
      CaseStudySchema.parse(await service.getCaseStudy("passe", locale));
      PostSchema.parse(await service.getPost(codeReview, locale));
    }
  });

  it("serves the German translations", async () => {
    const service = sanityService(dataset);
    const post = await service.getPost(codeReview, "de");
    expect(post?.title).toBe(de.posts?.[codeReview]?.title);
    expect(post?.contentLocale).toBe("de");
    expect(post?.availableLocales.sort()).toEqual(["de", "en"]);
    expect(post?.toc[0]?.text).toBe("Reviews sind Gespräche");
    expect(post?.href).toBe(`/de/blog/${codeReview}`);

    const about = await service.getAbout("de");
    expect(about.about.lede).toBe(de.about?.lede);
    expect(about.contentLocale).toBe("de");

    const passe = (await service.getWorkPage("de")).featured.find(
      (p) => p.slug === "passe",
    );
    expect(passe?.kind).toBe("iOS-App");
    expect(passe?.status?.label).toBe("Im App Store verfügbar");

    const blog = await service.getBlogIndex("de");
    expect(blog.categories.map((c) => c.title)).toEqual([
      "Technik",
      "Programmierung",
      "Radfahren",
      "Fotografie",
    ]);
    // English readers are unaffected.
    expect((await service.getPost(codeReview, "en"))?.title).toMatch(
      /^What leading/,
    );
  });

  it("computes reading time from the body text (words / 225, rounded up)", async () => {
    const post = await sanityService(dataset).getPost(codeReview, "en");
    const words = (post?.body ?? [])
      .flatMap((b) =>
        b._type === "paragraph"
          ? b.children.map((r) => r.text)
          : b._type === "heading"
            ? [b.text]
            : b._type === "list"
              ? b.items.flat().map((r) => r.text)
              : [],
      )
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;
    expect(post?.readingMinutes).toBe(Math.ceil(words / 225));
  });

  it("uses the Sanity image for the portrait in every language", async () => {
    for (const locale of ["en", "de"] as const) {
      const { about } = await sanityService(dataset).getAbout(locale);
      expect(about.portrait).toMatchObject({
        alt: "Damilola Bada",
        width: 1099,
        height: 1211,
        blurDataURL: PORTRAIT_ASSET.metadata.lqip,
      });
      expect(about.portrait?.src).toContain(
        "cdn.sanity.io/images/test/test/portrait-1099x1211.jpg",
      );
    }
  });

  it("links every language version in one translation.metadata document", () => {
    const meta = dataset.filter((d) => d._type === "translation.metadata");
    const post = meta.find((m) =>
      (m.translations as { value: { _ref: string } }[]).some(
        (t) => t.value._ref === `post.en|${codeReview}`,
      ),
    );
    expect(
      (post?.translations as { language: string }[]).map((t) => t.language),
    ).toEqual(["en", "de"]);
  });
});

describe("Sanity adapter fallback", () => {
  /** EN-only content plus a single German post. */
  function partlyTranslated(): object[] {
    const docs = seededDataset({});
    const post = docs.find((d) => d._id === `post.en|${codeReview}`)!;
    const tech = docs.find((d) => d._id === "category.tech")!;
    return [
      ...docs.map((d) =>
        d === tech
          ? {
              ...d,
              title: [
                ...(d.title as object[]),
                // An empty German value falls back to English.
                {
                  _key: "de",
                  _type: "internationalizedArrayStringValue",
                  language: "de",
                  value: "",
                },
              ],
            }
          : d,
      ),
      {
        ...post,
        _id: "post.de-only",
        language: "de",
        title: "Nur dieser Beitrag ist übersetzt",
      },
    ];
  }

  it("serves the EN document when there is no translation", async () => {
    const service = sanityService(partlyTranslated());
    const post = await service.getPost("first-200km-ride", "de");
    expect(post?.contentLocale).toBe("en");
    expect(post?.availableLocales).toEqual(["en"]);
    expect((await service.getCaseStudy("passe", "de"))?.contentLocale).toBe(
      "en",
    );
    expect((await service.getAbout("de")).contentLocale).toBe("en");
  });

  it("keeps one post per translation group in lists, preferring the locale", async () => {
    const service = sanityService(partlyTranslated());
    const deBlog = await service.getBlogIndex("de");
    const all = [deBlog.featured, ...deBlog.posts].filter(Boolean);
    expect(all).toHaveLength(content.posts.length);
    expect(all.filter((p) => p?.slug === codeReview)).toHaveLength(1);
    expect(all.find((p) => p?.slug === codeReview)?.title).toBe(
      "Nur dieser Beitrag ist übersetzt",
    );
    const enBlog = await service.getBlogIndex("en");
    expect(enBlog.categories.map((c) => c.count)).toEqual(
      deBlog.categories.map((c) => c.count),
    );
  });

  it("falls back field by field", async () => {
    const blog = await sanityService(partlyTranslated()).getBlogIndex("de");
    expect(blog.categories.find((c) => c.slug === "tech")?.title).toBe("Tech");
  });
});
