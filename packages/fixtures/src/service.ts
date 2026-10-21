import {
  createContentService,
  localizeContent,
  type RecordSource,
} from "@portfolio/content-core";
import type { ContentService } from "@portfolio/contracts";
import { content, translations } from "./data";

/**
 * Static content for Storybook and local development: the EN content plus
 * its translations, resolved per locale with the same fallback rules as the
 * Sanity adapter (field by field; whole documents for about, case studies
 * and posts).
 */
const fixtureSource: RecordSource = {
  site: async (locale) => localizeContent(content, translations, locale).site,
  about: async (locale) => localizeContent(content, translations, locale).about,
  experience: async (locale) =>
    localizeContent(content, translations, locale).experience,
  skillGroups: async (locale) =>
    localizeContent(content, translations, locale).skillGroups,
  projects: async (locale) =>
    localizeContent(content, translations, locale).projects,
  caseStudy: async (slug, locale) =>
    localizeContent(content, translations, locale).caseStudies.find(
      (c) => c.project === slug,
    ) ?? null,
  categories: async (locale) =>
    localizeContent(content, translations, locale).categories,
  posts: async (locale) =>
    localizeContent(content, translations, locale).posts.map(
      ({ body: _body, ...card }) => card,
    ),
  post: async (slug, locale) =>
    localizeContent(content, translations, locale).posts.find(
      (p) => p.slug === slug,
    ) ?? null,
  routes: async () => ({
    caseStudies: content.caseStudies.map((c) => c.project),
    posts: content.posts.map((p) => p.slug),
  }),
};

// The class only exists so callers can `new FixtureContentService()`; the
// interface merge gives it ContentService's methods, assigned in the constructor.
export interface FixtureContentService extends ContentService {}
export class FixtureContentService {
  constructor() {
    Object.assign(this, createContentService(fixtureSource));
  }
}
