import {
  DEFAULT_LOCALE,
  fallbackChain,
  type Locale,
} from "@portfolio/contracts";
import { isPlaceholder } from "@portfolio/utils";
import {
  experienceKey,
  type AboutRecord,
  type CaseStudyRecord,
  type CategoryRecord,
  type ContentSet,
  type ExperienceRecord,
  type LocaleContent,
  type Localized,
  type PostRecord,
  type ProjectRecord,
  type SiteRecord,
  type SkillGroupRecord,
  type Translations,
} from "./records";

/** A ContentSet resolved for one locale: what a RecordSource serves. */
export interface LocalizedContent {
  site: SiteRecord;
  about: AboutRecord;
  experience: ExperienceRecord[];
  skillGroups: SkillGroupRecord[];
  projects: ProjectRecord[];
  caseStudies: CaseStudyRecord[];
  categories: CategoryRecord[];
  posts: (PostRecord & Localized)[];
}

type Pick = (t: LocaleContent) => object | undefined;

/** `base` with the non-empty values of `values` on top. */
function overlay<T extends object>(base: T, values: object | undefined): T {
  if (!values) return base;
  const set = Object.entries(values).filter(([, v]) => !isPlaceholder(v));
  return { ...base, ...Object.fromEntries(set) };
}

/**
 * Resolves default-locale content plus its translations for `locale`, with
 * the Sanity adapter's rules: field-level values fall back field by field
 * along `fallbackChain`; a translated document replaces the default one when
 * it exists, and reports which language was served and which exist.
 */
export function localizeContent(
  content: ContentSet,
  translations: Translations,
  locale: Locale,
): LocalizedContent {
  // Translated locales in the chain, most preferred first ("de" for de).
  const preferred = fallbackChain(locale).filter((l) => l !== DEFAULT_LOCALE);
  const layers = preferred.map((l) => ({
    locale: l,
    t: translations[l] ?? {},
  }));

  /** Field level: overlays applied least preferred first, so preferred wins. */
  const fields = <T extends object>(base: T, pick: Pick): T =>
    [...layers].reverse().reduce((acc, { t }) => overlay(acc, pick(t)), base);

  /** Document level: the first preferred locale that has the document. */
  const document = <T extends object>(base: T, pick: Pick): T & Localized => {
    const served = layers.find(({ t }) => pick(t));
    const translated = (Object.keys(translations) as Locale[]).filter(
      (l) => l !== DEFAULT_LOCALE && pick(translations[l] ?? {}),
    );
    return {
      ...base,
      ...(served && pick(served.t)),
      contentLocale: served?.locale ?? DEFAULT_LOCALE,
      availableLocales: [DEFAULT_LOCALE, ...translated],
    };
  };

  const roleTitle = fields({ title: content.site.currentRole.title }, (t) => ({
    title: t.site?.currentRoleTitle,
  })).title;

  return {
    site: {
      ...fields(
        content.site,
        ({ site }) => site && { ...site, currentRoleTitle: undefined },
      ),
      currentRole: { ...content.site.currentRole, title: roleTitle },
    },
    about: document(content.about, (t) => t.about),
    experience: content.experience.map((e) => {
      const key = experienceKey(e);
      const row = fields(e, (t) => {
        const { projects: _projects, ...rest } = t.experience?.[key] ?? {};
        return rest;
      });
      const projects = e.projects?.map((p, i) =>
        fields(p, (t) => t.experience?.[key]?.projects?.[i]),
      );
      return projects ? { ...row, projects } : row;
    }),
    skillGroups: content.skillGroups.map((g) =>
      fields(g, (t) => t.skillGroups?.[g.order]),
    ),
    projects: content.projects.map((p) => {
      const card = fields(p, (t) => {
        const { statusLabel: _status, ...rest } = t.projects?.[p.slug] ?? {};
        return rest;
      });
      const label = fields({ label: p.status?.label }, (t) => ({
        label: t.projects?.[p.slug]?.statusLabel,
      })).label;
      return p.status && label
        ? { ...card, status: { ...p.status, label } }
        : card;
    }),
    caseStudies: content.caseStudies.map((cs) =>
      document(cs, (t) => t.caseStudies?.[cs.project]),
    ),
    categories: content.categories.map((c) =>
      fields(c, (t) => t.categories?.[c.slug]),
    ),
    posts: content.posts.map((p) => document(p, (t) => t.posts?.[p.slug])),
  };
}
