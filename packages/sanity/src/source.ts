import type { RecordSource } from "@portfolio/content-core";
import { fallbackChain, type Locale } from "@portfolio/contracts";
import type {
  FilteredResponseQueryOptions,
  SanityClient,
} from "@sanity/client";
import {
  pickDocument,
  pickPerSlug,
  toAboutRecord,
  toCaseStudyRecord,
  toCategoryRecord,
  toExperienceRecord,
  toFullPostRecord,
  toPostRecord,
  toProjectRecord,
  toSiteRecord,
  toSkillGroupRecord,
  type MapContext,
} from "./mappers";
import {
  ABOUT_QUERY,
  CASE_STUDY_QUERY,
  CATEGORIES_QUERY,
  EXPERIENCE_QUERY,
  POST_QUERY,
  POSTS_QUERY,
  PROJECTS_QUERY,
  ROUTES_QUERY,
  SITE_SETTINGS_QUERY,
  SKILL_GROUPS_QUERY,
} from "./queries";

/** Fetches with GROQ and maps the results to records, per locale. */
export function sanityRecordSource(
  client: SanityClient,
  context: Omit<MapContext, "chain">,
  /** Passed to every fetch (e.g. Next.js cache tags). */
  fetchOptions: FilteredResponseQueryOptions = {},
): RecordSource {
  const ctx = (locale: Locale): MapContext => ({
    ...context,
    chain: fallbackChain(locale),
  });

  return {
    async site(locale) {
      const raw = await client.fetch(SITE_SETTINGS_QUERY, {}, fetchOptions);
      if (!raw) throw new Error("Sanity: siteSettings document is missing");
      return toSiteRecord(raw, ctx(locale));
    },
    async about(locale) {
      const c = ctx(locale);
      const docs = await client.fetch(
        ABOUT_QUERY,
        { chain: c.chain },
        fetchOptions,
      );
      const doc = pickDocument(docs, c.chain);
      if (!doc)
        throw new Error(`Sanity: no About document for ${c.chain.join(" / ")}`);
      return toAboutRecord(doc, c);
    },
    async experience(locale) {
      const c = ctx(locale);
      return (await client.fetch(EXPERIENCE_QUERY, {}, fetchOptions)).map((e) =>
        toExperienceRecord(e, c),
      );
    },
    async skillGroups(locale) {
      const c = ctx(locale);
      return (await client.fetch(SKILL_GROUPS_QUERY, {}, fetchOptions)).map(
        (g) => toSkillGroupRecord(g, c),
      );
    },
    async projects(locale) {
      const c = ctx(locale);
      return (await client.fetch(PROJECTS_QUERY, {}, fetchOptions)).map((p) =>
        toProjectRecord(p, c),
      );
    },
    async caseStudy(slug, locale) {
      const c = ctx(locale);
      const docs = await client.fetch(
        CASE_STUDY_QUERY,
        {
          chain: c.chain,
          slug,
        },
        fetchOptions,
      );
      const doc = pickDocument(docs, c.chain);
      return doc ? toCaseStudyRecord(doc, c) : null;
    },
    async categories(locale) {
      const c = ctx(locale);
      return (await client.fetch(CATEGORIES_QUERY, {}, fetchOptions)).map(
        (cat) => toCategoryRecord(cat, c),
      );
    },
    async posts(locale) {
      const c = ctx(locale);
      const docs = await client.fetch(
        POSTS_QUERY,
        { chain: c.chain },
        fetchOptions,
      );
      return pickPerSlug(docs, c.chain).map((p) => toPostRecord(p, c));
    },
    async post(slug, locale) {
      const c = ctx(locale);
      const docs = await client.fetch(
        POST_QUERY,
        { chain: c.chain, slug },
        fetchOptions,
      );
      const doc = pickDocument(docs, c.chain);
      return doc ? toFullPostRecord(doc, c) : null;
    },
    async routes() {
      const routes = await client.fetch(ROUTES_QUERY, {}, fetchOptions);
      return {
        caseStudies: routes.caseStudies.filter((s): s is string => Boolean(s)),
        posts: routes.posts.filter((s): s is string => Boolean(s)),
      };
    },
  };
}
