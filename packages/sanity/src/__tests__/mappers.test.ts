import type { Locale } from "@portfolio/contracts";
import { describe, expect, it } from "vitest";
import {
  pickDocument,
  pickPerSlug,
  toSiteRecord,
  type MapContext,
} from "../mappers";

// The pickers take any chain, so a third locale needs no code change.
const fr = "fr" as Locale;
const chain = [fr, "en"] as Locale[];

const docs = [
  { slug: "a", language: "en", title: "A (en)" },
  { slug: "a", language: "fr", title: "A (fr)" },
  { slug: "b", language: "en", title: "B (en)" },
  { slug: "c", language: "de", title: "C (de)" },
];

describe("pickDocument", () => {
  it("takes the first chain language that has a document", () => {
    expect(
      pickDocument(
        docs.filter((d) => d.slug === "a"),
        chain,
      )?.title,
    ).toBe("A (fr)");
    expect(
      pickDocument(
        docs.filter((d) => d.slug === "b"),
        chain,
      )?.title,
    ).toBe("B (en)");
  });

  it("ignores languages outside the chain", () => {
    expect(
      pickDocument(
        docs.filter((d) => d.slug === "c"),
        chain,
      ),
    ).toBeUndefined();
  });
});

describe("pickPerSlug", () => {
  it("keeps one document per translation group", () => {
    expect(pickPerSlug(docs, chain).map((d) => d.title)).toEqual([
      "A (fr)",
      "B (en)",
    ]);
  });
});

describe("toSiteRecord cvUrl", () => {
  const ctx: MapContext = {
    chain,
    image: () => undefined,
    edit: () => undefined,
  };
  const site = (cvFile: { language: string; value: string | null }[] | null) =>
    toSiteRecord(
      {
        _id: "siteSettings",
        _type: "siteSettings",
        cvFile: cvFile?.map((f) => ({ _key: f.language, ...f })) ?? null,
        cvUrl: "https://example.com/cv.pdf",
      } as Parameters<typeof toSiteRecord>[0],
      ctx,
    ).cvUrl;

  it("serves the CV of the requested language", () => {
    expect(
      site([
        { language: "en", value: "en.pdf" },
        { language: "fr", value: "fr.pdf" },
      ]),
    ).toBe("fr.pdf?dl=");
  });

  it("falls back to the default-locale CV", () => {
    expect(site([{ language: "en", value: "en.pdf" }])).toBe("en.pdf?dl=");
  });

  it("falls back to the CV URL without uploads", () => {
    expect(site(null)).toBe("https://example.com/cv.pdf");
  });
});
