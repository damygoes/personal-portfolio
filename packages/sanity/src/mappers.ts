import type {
  AboutRecord,
  CaseStudyRecord,
  CategoryRecord,
  ExperienceRecord,
  Localized,
  PostRecord,
  ProjectRecord,
  SectionRecord,
  SiteRecord,
  SkillGroupRecord,
} from "@portfolio/content-core";
import {
  isLocale,
  type EditAttrs,
  type ImageDTO,
  type Locale,
} from "@portfolio/contracts";
import {
  countWords,
  pickLocale,
  readingMinutes,
  type LocalizedValue,
} from "@portfolio/utils";
import {
  toBodyBlocks,
  toParagraphs,
  toRunsOf,
  type PostBodyInput,
} from "./portable-text";
import type {
  ABOUT_QUERY_RESULT,
  CASE_STUDY_QUERY_RESULT,
  CATEGORIES_QUERY_RESULT,
  EXPERIENCE_QUERY_RESULT,
  POST_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  PROJECTS_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
  SKILL_GROUPS_QUERY_RESULT,
} from "./sanity.types";

/**
 * Raw query results → content-core records, for one locale. Field-level
 * translations resolve along the fallback chain; translated documents are
 * picked by the same chain. Everything else (numbering, placeholders,
 * counts) is content-core's job.
 */

export interface MapContext {
  /** `fallbackChain(locale)`: the locale, then the default. */
  chain: Locale[];
  image(value: unknown): ImageDTO | undefined;
  /** Visual-editing attributes for a document field; undefined outside draft mode. */
  edit(
    doc: { _id: string; _type: string },
    path?: string,
  ): EditAttrs | undefined;
}

type I18n<T> = readonly LocalizedValue<T>[] | null | undefined;

const str = (ctx: MapContext, values: I18n<string>) =>
  pickLocale(values, ctx.chain) ?? "";
const optStr = (ctx: MapContext, values: I18n<string>) =>
  pickLocale(values, ctx.chain) ?? null;

/** The document in the first chain language that has one. */
export function pickDocument<T extends { language: string | null }>(
  docs: readonly T[],
  chain: readonly Locale[],
): T | undefined {
  for (const locale of chain) {
    const doc = docs.find((d) => d.language === locale);
    if (doc) return doc;
  }
  return undefined;
}

/** One document per slug (a translation group), in the first chain language. */
export function pickPerSlug<
  T extends { slug: string | null; language: string | null },
>(docs: readonly T[], chain: readonly Locale[]): T[] {
  const slugs = [...new Set(docs.map((d) => d.slug).filter(Boolean))];
  return slugs
    .map((slug) =>
      pickDocument(
        docs.filter((d) => d.slug === slug),
        chain,
      ),
    )
    .filter((d): d is T => Boolean(d));
}

function localized(doc: {
  language: string | null;
  availableLocales?: readonly (string | null)[];
}): Localized {
  const contentLocale =
    doc.language && isLocale(doc.language) ? doc.language : "en";
  const available = (doc.availableLocales ?? []).filter(
    (l): l is Locale => typeof l === "string" && isLocale(l),
  );
  return {
    contentLocale,
    availableLocales: [...new Set([contentLocale, ...available])],
  };
}

type Site = NonNullable<SITE_SETTINGS_QUERY_RESULT>;

export function toSiteRecord(raw: Site, ctx: MapContext): SiteRecord {
  const cvFile = optStr(ctx, raw.cvFile);
  return {
    name: raw.name ?? "",
    initials: raw.initials ?? "",
    tagline: str(ctx, raw.tagline),
    email: raw.email ?? "",
    socials: (raw.socials ?? []).map((s) => ({ label: s.label, url: s.url })),
    // ?dl= makes Sanity send the file as a download, under its upload name.
    cvUrl: cvFile ? `${cvFile}?dl=` : raw.cvUrl,
    location: str(ctx, raw.location),
    timezone: raw.timezone ?? "Europe/Berlin",
    yearsExperienceLabel: str(ctx, raw.yearsExperienceLabel),
    heroMeta: pickLocale(raw.heroMeta, ctx.chain) ?? [],
    currentRole: {
      title: str(ctx, raw.currentRole?.title),
      company: raw.currentRole?.company ?? "",
    },
    marqueeItems: (raw.marqueeItems ?? []).map((m) => ({
      text: m.text,
      outlined: Boolean(m.outlined),
    })),
    authorBio: optStr(ctx, raw.authorBio),
    editAttrs: ctx.edit(raw),
  };
}

export function toAboutRecord(
  raw: ABOUT_QUERY_RESULT[number],
  ctx: MapContext,
): AboutRecord {
  return {
    statement: toRunsOf(raw.statement),
    bio: toParagraphs(raw.bio),
    teaserParagraphs: toParagraphs(raw.teaserParagraphs),
    lede: raw.lede,
    portrait: ctx.image(raw.portrait),
    facts: (raw.facts ?? []).map((f) => ({
      label: f.label,
      value: f.value ?? "",
      links: (f.projects ?? []).filter(Boolean),
      aboutPageOnly: Boolean(f.aboutPageOnly),
    })),
    skillsIntro: raw.skillsIntro,
    editAttrs: ctx.edit(raw),
    ...localized(raw),
  };
}

export function toExperienceRecord(
  raw: EXPERIENCE_QUERY_RESULT[number],
  ctx: MapContext,
): ExperienceRecord {
  return {
    order: raw.order,
    role: str(ctx, raw.role),
    company: raw.company,
    location: raw.location,
    workMode: raw.workMode,
    start: raw.startDate,
    end: raw.endDate,
    summary: optStr(ctx, raw.summary),
    bullets: pickLocale(raw.bullets, ctx.chain) ?? [],
    editAttrs: ctx.edit(raw),
  };
}

export function toSkillGroupRecord(
  raw: SKILL_GROUPS_QUERY_RESULT[number],
  ctx: MapContext,
): SkillGroupRecord {
  return {
    order: raw.order,
    title: str(ctx, raw.title),
    items: raw.items,
    editAttrs: ctx.edit(raw),
  };
}

export function toProjectRecord(
  raw: PROJECTS_QUERY_RESULT[number],
  ctx: MapContext,
): ProjectRecord {
  const statusLabel = optStr(ctx, raw.status?.label);
  return {
    order: raw.order,
    slug: raw.slug,
    title: raw.title,
    kind: str(ctx, raw.kind),
    teaser: optStr(ctx, raw.teaser),
    coverTag: optStr(ctx, raw.coverTag),
    status: statusLabel
      ? { label: statusLabel, isNew: Boolean(raw.status?.isNew) }
      : null,
    summary: str(ctx, raw.summary),
    tech: raw.tech ?? [],
    links: {
      live: raw.links?.live,
      github: raw.links?.github,
      appStoreId: raw.links?.appStoreId,
    },
    coverTone: raw.coverTone,
    cover: ctx.image(raw.cover),
    featured: Boolean(raw.featured),
    caseStudy: raw.hasCaseStudy ? raw.slug : null,
    editAttrs: ctx.edit(raw),
  };
}

type RawSection = NonNullable<
  CASE_STUDY_QUERY_RESULT[number]["sections"]
>[number];

function toSectionRecord(
  raw: RawSection,
  doc: { _id: string; _type: string },
  ctx: MapContext,
): SectionRecord {
  const editAttrs = ctx.edit(doc, `sections[_key=="${raw._key}"]`);
  const base = { label: raw.label, heading: raw.heading ?? null, editAttrs };
  switch (raw._type) {
    case "textBlock":
      return { type: "textBlock", ...base, body: toParagraphs(raw.body) };
    case "stepsGrid":
      return {
        type: "stepsGrid",
        ...base,
        steps: (raw.steps ?? []).map((s) => ({ title: s.title, text: s.text })),
      };
    case "featureGrid":
      return {
        type: "featureGrid",
        ...base,
        features: (raw.features ?? []).map((f) => ({
          title: f.title,
          text: f.text,
        })),
      };
    case "plans":
      return {
        type: "plans",
        ...base,
        plans: (raw.plans ?? []).map((p) => ({
          name: p.name,
          price: p.price,
          period: p.period ?? "",
          features: p.features ?? [],
        })),
        note: raw.note ?? null,
      };
    case "architecture":
      return {
        type: "architecture",
        ...base,
        core: (raw.core ?? []).map((b) => ({
          eyebrow: b.eyebrow ?? "",
          title: b.title,
          sub: b.sub,
          isCore: b.isCore ? true : undefined,
        })),
        sub: (raw.sub ?? []).map((b) => ({
          eyebrow: b.eyebrow ?? "",
          title: b.title,
          sub: b.sub,
        })),
        notes: toParagraphs(raw.notes),
      };
    case "quote":
      return {
        type: "quote",
        label: raw.label,
        text: raw.text ?? null,
        attribution: raw.attribution ?? null,
        editAttrs,
      };
  }
}

export function toCaseStudyRecord(
  raw: CASE_STUDY_QUERY_RESULT[number],
  ctx: MapContext,
): CaseStudyRecord {
  const split = raw.titleSplit;
  return {
    project: raw.project,
    titleSplit:
      split?.solid && split.outlined ? [split.solid, split.outlined] : null,
    lede: raw.lede,
    meta: (raw.meta ?? []).map((m) => ({ label: m.label, value: m.value })),
    screens: (raw.screens ?? [])
      .map((s) => ctx.image(s))
      .filter((s): s is ImageDTO => Boolean(s)),
    sections: (raw.sections ?? []).map((s) => toSectionRecord(s, raw, ctx)),
    editAttrs: ctx.edit(raw),
    ...localized(raw),
  };
}

export function toCategoryRecord(
  raw: CATEGORIES_QUERY_RESULT[number],
  ctx: MapContext,
): CategoryRecord {
  return {
    order: raw.order,
    slug: raw.slug,
    title: str(ctx, raw.title),
    coverTone: raw.coverTone,
  };
}

export function toPostRecord(
  raw: POSTS_QUERY_RESULT[number],
  ctx: MapContext,
): PostRecord {
  return {
    slug: raw.slug,
    title: raw.title,
    categories: (raw.categories ?? []).filter(Boolean),
    publishedAt: raw.publishedAt,
    // Text blocks only (pt::text): code and pull quotes don't add reading time.
    readingMinutes: readingMinutes(countWords(raw.plainText ?? "")),
    coverWord: raw.coverWord,
    excerpt: raw.excerpt,
    cover: ctx.image(raw.cover),
    sample: raw.sample ?? undefined,
    editAttrs: ctx.edit(raw),
  };
}

export function toFullPostRecord(
  raw: POST_QUERY_RESULT[number],
  ctx: MapContext,
): PostRecord & Localized {
  return {
    ...toPostRecord(raw, ctx),
    body: toBodyBlocks(raw.body as PostBodyInput | null, ctx.image),
    ...localized(raw),
  };
}
