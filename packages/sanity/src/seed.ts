import {
  experienceKey,
  type CaseStudyRecord,
  type ContentSet,
  type LocaleContent,
  type Translations,
} from "@portfolio/content-core";
import {
  DEFAULT_LOCALE,
  type BodyBlock,
  type Locale,
  type Paragraph,
  type TextRun,
} from "@portfolio/contracts";

/**
 * Records → Sanity documents: the inverse of the mappers, used by the seed
 * script (apps/studio/scripts/seed.ts) and by the round-trip tests. Pure: the
 * caller supplies every document id, so it decides which documents already
 * exist (found by natural key) and which get a new generated id.
 *
 * Translations (optional) are written the way the Studio stores them:
 * field-level values as extra internationalized-array entries, translated
 * documents as one document per language, linked by translation.metadata.
 * Null placeholders stay empty.
 */

/** @deprecated alias — use `ContentSet` from content-core. */
export type SeedContent = ContentSet;

export type SeedDocument = Record<string, unknown> & {
  _id: string;
  _type: string;
};

export type SeedKind =
  "category" | "project" | "caseStudy" | "experience" | "skillGroup" | "post";

/** How the seed finds an existing document of each kind (published only). */
export interface SeedLookup {
  kind: SeedKind;
  key: string;
  filter: string;
  params: Record<string, unknown>;
}

/** Fixed ids: singletons only (Sanity best practice). */
export const SITE_SETTINGS_ID = "siteSettings";
export const aboutId = (language: string) => `about-${language}`;

/** Lookup key of a translated document: language + its group key. */
export const translatedKey = (language: string, key: string) =>
  `${language}|${key}`;

/** Locales other than the default that have a translation. */
const translatedLocales = (translations: Translations) =>
  (Object.keys(translations) as Locale[]).filter((l) => l !== DEFAULT_LOCALE);

/** Languages a translated document exists in: default first. */
function documentLanguages(
  translations: Translations,
  has: (t: LocaleContent) => unknown,
): Locale[] {
  return [
    DEFAULT_LOCALE,
    ...translatedLocales(translations).filter((l) =>
      has(translations[l] ?? {}),
    ),
  ];
}

/** Natural keys of every non-singleton document the seed writes. */
export function seedLookups(
  content: ContentSet,
  includeSamples: boolean,
  translations: Translations = {},
): SeedLookup[] {
  return [
    ...content.categories.map((c) => ({
      kind: "category" as const,
      key: c.slug,
      filter: `_type == "category" && slug.current == $key`,
      params: { key: c.slug },
    })),
    ...content.projects.map((p) => ({
      kind: "project" as const,
      key: p.slug,
      filter: `_type == "project" && slug.current == $key`,
      params: { key: p.slug },
    })),
    ...content.caseStudies.flatMap((cs) =>
      documentLanguages(translations, (t) => t.caseStudies?.[cs.project]).map(
        (lang) => ({
          kind: "caseStudy" as const,
          key: translatedKey(lang, cs.project),
          filter: `_type == "caseStudy" && language == $lang && project->slug.current == $key`,
          params: { key: cs.project, lang },
        }),
      ),
    ),
    ...content.experience.map((e) => ({
      kind: "experience" as const,
      key: experienceKey(e),
      filter: `_type == "experience" && company == $company && startDate == $start`,
      params: { company: e.company, start: e.start },
    })),
    ...content.skillGroups.map((g) => ({
      kind: "skillGroup" as const,
      key: String(g.order),
      filter: `_type == "skillGroup" && order == $order`,
      params: { order: g.order },
    })),
    ...(includeSamples ? content.posts : []).flatMap((p) =>
      documentLanguages(translations, (t) => t.posts?.[p.slug]).map((lang) => ({
        kind: "post" as const,
        key: translatedKey(lang, p.slug),
        filter: `_type == "post" && language == $lang && slug.current == $key`,
        params: { key: p.slug, lang },
      })),
    ),
  ];
}

// ---------- value helpers ----------

type I18nType = "String" | "Text" | "StringList";

const isEmpty = (value: unknown) =>
  value === null ||
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

/**
 * Field-level translation (internationalized-array v5 shape): the default
 * value plus one entry per translated locale that has a non-empty value.
 */
function i18n(
  type: I18nType,
  value: unknown,
  translated: readonly [Locale, unknown][] = [],
) {
  const entries = [[DEFAULT_LOCALE, value] as const, ...translated].filter(
    ([, v]) => !isEmpty(v),
  );
  if (!entries.length) return undefined;
  return entries.map(([language, v]) => ({
    _key: language,
    _type: `internationalizedArray${type}Value`,
    language,
    value: v,
  }));
}

const ref = (id: string, weak = false) => ({
  _type: "reference",
  _ref: id,
  ...(weak && { _weak: true }),
});
const keyed = <T extends object>(items: readonly T[], prefix: string) =>
  items.map((item, i) => ({ _key: `${prefix}${i}`, ...item }));
const slug = (current: string) => ({ _type: "slug", current });
const opt = <T>(value: T | null | undefined) => value ?? undefined;

/** Runs → one Portable Text block (strong / highlight decorators, link annotations). */
function block(runs: readonly TextRun[], key: string, extra: object = {}) {
  const markDefs: { _key: string; _type: "link"; href: string }[] = [];
  const children = runs.map((run, i) => {
    const marks: string[] = [];
    if (run.strong) marks.push("strong");
    if (run.highlight) marks.push("highlight");
    if (run.href) {
      const linkKey = `${key}l${markDefs.length}`;
      markDefs.push({ _key: linkKey, _type: "link", href: run.href });
      marks.push(linkKey);
    }
    return { _key: `${key}s${i}`, _type: "span", text: run.text, marks };
  });
  return {
    _key: key,
    _type: "block",
    style: "normal",
    markDefs,
    children,
    ...extra,
  };
}

const blocks = (
  paragraphs: readonly (Paragraph | string | null)[],
  prefix: string,
) =>
  paragraphs
    .filter((p): p is Paragraph | string => p !== null)
    .map((p, i) =>
      block(typeof p === "string" ? [{ text: p }] : p, `${prefix}${i}`),
    );

function postBody(body: readonly BodyBlock[]): object[] {
  return body.flatMap((b): object[] => {
    switch (b._type) {
      case "paragraph":
        return [block(b.children, b._key)];
      case "heading":
        return [block([{ text: b.text }], b._key, { style: "h2" })];
      case "list":
        return b.items.map((runs, i) =>
          block(runs, i === 0 ? b._key : `${b._key}i${i}`, {
            listItem: b.ordered ? "number" : "bullet",
            level: 1,
          }),
        );
      case "code":
        return [
          {
            _key: b._key,
            _type: "code",
            code: b.code,
            language: b.language,
            languageLabel: b.languageLabel,
            filename: b.filename,
          },
        ];
      case "pullQuote":
        return [{ _key: b._key, _type: "pullQuote", text: b.text }];
      // Images need uploaded assets; the fixtures have none.
      default:
        return [];
    }
  });
}

function caseSections(sections: CaseStudyRecord["sections"]) {
  return sections.map((s, i) => {
    const key = `sec${i}`;
    const base = { _key: key, _type: s.type, label: s.label };
    switch (s.type) {
      case "textBlock":
        return {
          ...base,
          heading: opt(s.heading),
          body: blocks(s.body, `${key}b`),
        };
      case "stepsGrid":
        return {
          ...base,
          heading: opt(s.heading),
          steps: keyed(
            s.steps.map((x) => ({
              _type: "step",
              title: x.title,
              text: opt(x.text),
            })),
            `${key}s`,
          ),
        };
      case "featureGrid":
        return {
          ...base,
          heading: opt(s.heading),
          features: keyed(
            s.features.map((x) => ({
              _type: "feature",
              title: x.title,
              text: opt(x.text),
            })),
            `${key}f`,
          ),
        };
      case "plans":
        return {
          ...base,
          heading: opt(s.heading),
          note: opt(s.note),
          plans: keyed(
            s.plans.map((p) => ({ _type: "plan", ...p })),
            `${key}p`,
          ),
        };
      case "architecture":
        return {
          ...base,
          heading: opt(s.heading),
          core: keyed(
            s.core.map((b) => ({
              _type: "coreBox",
              eyebrow: b.eyebrow,
              title: b.title,
              sub: opt(b.sub),
              isCore: b.isCore,
            })),
            `${key}c`,
          ),
          sub: keyed(
            s.sub.map((b) => ({
              _type: "subBox",
              eyebrow: b.eyebrow,
              title: b.title,
              sub: opt(b.sub),
            })),
            `${key}u`,
          ),
          notes: blocks(s.notes, `${key}n`),
        };
      case "quote":
        return { ...base, text: opt(s.text), attribution: opt(s.attribution) };
    }
  });
}

/** Removes undefined values, so documents compare equal to their stored copies. */
export const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export interface SeedOptions {
  /** Id of the document with this natural key (existing, or newly generated). */
  id(kind: SeedKind, key: string): string;
  includeSamples: boolean;
  /** Translations to write next to the default locale. */
  translations?: Translations;
  /** An uploaded image value for the About portrait. */
  portrait?: {
    _type: "image";
    alt: string;
    asset: { _type: "reference"; _ref: string };
  };
}

export interface SeedResult {
  documents: SeedDocument[];
  /** Language versions of one translated document, default first: one translation.metadata each. */
  translationGroups: SeedDocument[][];
}

/** Every document the seed writes, in dependency order. */
export function seedDocuments(
  content: ContentSet,
  options: SeedOptions,
): SeedResult {
  const { id } = options;
  const translations = options.translations ?? {};
  const locales = translatedLocales(translations);
  const docs: SeedDocument[] = [];
  const groups: SeedDocument[][] = [];

  /** [locale, value] for every translated locale. */
  const each = (pick: (t: LocaleContent) => unknown): [Locale, unknown][] =>
    locales.map((l) => [l, pick(translations[l] ?? {})]);

  for (const c of content.categories) {
    docs.push({
      _id: id("category", c.slug),
      _type: "category",
      title: i18n(
        "String",
        c.title,
        each((t) => t.categories?.[c.slug]?.title),
      ),
      slug: slug(c.slug),
      coverTone: c.coverTone,
      order: c.order,
    });
  }

  for (const p of content.projects) {
    const tr = (
      pick: (t: NonNullable<LocaleContent["projects"]>[string]) => unknown,
    ) =>
      each((t) => {
        const project = t.projects?.[p.slug];
        return project && pick(project);
      });
    docs.push({
      _id: id("project", p.slug),
      _type: "project",
      title: p.title,
      slug: slug(p.slug),
      kind: i18n(
        "String",
        p.kind,
        tr((x) => x.kind),
      ),
      summary: i18n(
        "Text",
        p.summary,
        tr((x) => x.summary),
      ),
      teaser: i18n(
        "String",
        p.teaser,
        tr((x) => x.teaser),
      ),
      coverTag: i18n(
        "String",
        p.coverTag,
        tr((x) => x.coverTag),
      ),
      tech: p.tech,
      status: p.status
        ? {
            label: i18n(
              "String",
              p.status.label,
              tr((x) => x.statusLabel),
            ),
            isNew: p.status.isNew,
          }
        : undefined,
      links: {
        live: opt(p.links.live),
        github: opt(p.links.github),
        appStoreId: opt(p.links.appStoreId),
      },
      coverTone: p.coverTone,
      featured: p.featured,
      order: p.order,
    });
  }

  for (const cs of content.caseStudies) {
    const group = documentLanguages(
      translations,
      (t) => t.caseStudies?.[cs.project],
    ).map((lang): SeedDocument => {
      const doc: Omit<CaseStudyRecord, "contentLocale" | "availableLocales"> = {
        ...cs,
        ...(lang === DEFAULT_LOCALE
          ? {}
          : translations[lang]?.caseStudies?.[cs.project]),
      };
      return {
        _id: id("caseStudy", translatedKey(lang, cs.project)),
        _type: "caseStudy",
        language: lang,
        project: ref(id("project", cs.project)),
        titleSplit: doc.titleSplit
          ? { solid: doc.titleSplit[0], outlined: doc.titleSplit[1] }
          : undefined,
        lede: doc.lede,
        meta: keyed(
          doc.meta.map((m) => ({
            _type: "metaItem",
            label: m.label,
            value: opt(m.value),
          })),
          "m",
        ),
        sections: caseSections(doc.sections),
      };
    });
    docs.push(...group);
    groups.push(group);
  }

  for (const e of content.experience) {
    const key = experienceKey(e);
    const bullets = (list: readonly (string | null)[] | null | undefined) =>
      (list ?? []).filter((b): b is string => Boolean(b));
    docs.push({
      _id: id("experience", key),
      _type: "experience",
      role: i18n(
        "String",
        e.role,
        each((t) => t.experience?.[key]?.role),
      ),
      company: e.company,
      location: opt(e.location),
      workMode: opt(e.workMode),
      startDate: e.start,
      endDate: opt(e.end),
      summary: i18n(
        "Text",
        e.summary,
        each((t) => t.experience?.[key]?.summary),
      ),
      bullets: i18n(
        "StringList",
        bullets(e.bullets),
        each((t) => bullets(t.experience?.[key]?.bullets)),
      ),
      order: e.order,
    });
  }

  for (const g of content.skillGroups) {
    docs.push({
      _id: id("skillGroup", String(g.order)),
      _type: "skillGroup",
      title: i18n(
        "String",
        g.title,
        each((t) => t.skillGroups?.[g.order]?.title),
      ),
      items: g.items,
      order: g.order,
    });
  }

  const aboutGroup = documentLanguages(translations, (t) => t.about).map(
    (lang): SeedDocument => {
      const about = {
        ...content.about,
        ...(lang === DEFAULT_LOCALE ? {} : translations[lang]?.about),
      };
      return {
        _id: aboutId(lang),
        _type: "about",
        language: lang,
        statement: [block(about.statement, "st")],
        lede: about.lede,
        bio: blocks(about.bio, "bio"),
        teaserParagraphs: blocks(about.teaserParagraphs, "tp"),
        portrait: options.portrait,
        facts: keyed(
          about.facts.map((f) => ({
            _type: "fact",
            label: f.label,
            value: f.value,
            projects: f.links?.length
              ? keyed(
                  f.links.map((s) => ref(id("project", s))),
                  "p",
                )
              : undefined,
            aboutPageOnly: Boolean(f.aboutPageOnly),
          })),
          "f",
        ),
        skillsIntro: opt(about.skillsIntro),
      };
    },
  );
  docs.push(...aboutGroup);
  groups.push(aboutGroup);

  const { site } = content;
  const siteTr = (pick: (s: NonNullable<LocaleContent["site"]>) => unknown) =>
    each((t) => t.site && pick(t.site));
  docs.push({
    _id: SITE_SETTINGS_ID,
    _type: "siteSettings",
    name: site.name,
    initials: site.initials,
    tagline: i18n(
      "Text",
      site.tagline,
      siteTr((s) => s.tagline),
    ),
    email: site.email,
    socials: keyed(
      site.socials.map((s) => ({ _type: "social", ...s })),
      "s",
    ),
    cvUrl: opt(site.cvUrl),
    location: i18n(
      "String",
      site.location,
      siteTr((s) => s.location),
    ),
    timezone: site.timezone,
    yearsExperienceLabel: i18n(
      "String",
      site.yearsExperienceLabel,
      siteTr((s) => s.yearsExperienceLabel),
    ),
    heroMeta: i18n(
      "StringList",
      site.heroMeta,
      siteTr((s) => s.heroMeta),
    ),
    currentRole: {
      title: i18n(
        "String",
        site.currentRole.title,
        siteTr((s) => s.currentRoleTitle),
      ),
      company: site.currentRole.company,
    },
    marqueeItems: keyed(
      site.marqueeItems.map((m) => ({
        _type: "marqueeItem",
        text: m.text,
        outlined: Boolean(m.outlined),
      })),
      "q",
    ),
    authorBio: i18n(
      "Text",
      site.authorBio,
      siteTr((s) => s.authorBio),
    ),
  });

  if (options.includeSamples) {
    for (const p of content.posts) {
      const group = documentLanguages(
        translations,
        (t) => t.posts?.[p.slug],
      ).map((lang): SeedDocument => {
        const post = {
          ...p,
          ...(lang === DEFAULT_LOCALE
            ? {}
            : translations[lang]?.posts?.[p.slug]),
        };
        return {
          _id: id("post", translatedKey(lang, p.slug)),
          _type: "post",
          language: lang,
          title: post.title,
          slug: slug(p.slug),
          excerpt: post.excerpt,
          publishedAt: post.publishedAt,
          categories: keyed(
            post.categories.map((c) => ref(id("category", c))),
            "c",
          ),
          coverWord: post.coverWord,
          body: post.body ? postBody(post.body) : undefined,
          sample: post.sample ? true : undefined,
        };
      });
      docs.push(...group);
      groups.push(group);
    }
  }

  return {
    documents: docs.map(clean),
    translationGroups: groups.map((g) => g.map(clean)),
  };
}

/** Links the language versions of one document, as the translation plugin does. */
export function translationMetadata(
  metadataId: string,
  group: readonly SeedDocument[],
): SeedDocument {
  return {
    _id: metadataId,
    _type: "translation.metadata",
    schemaTypes: [group[0]?._type ?? ""],
    translations: group.map((doc) => ({
      _key: String(doc.language),
      _type: "internationalizedArrayReferenceValue",
      language: doc.language,
      value: ref(doc._id, true),
    })),
  };
}
