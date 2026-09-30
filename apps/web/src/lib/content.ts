import type { ContentService } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";

/**
 * The only module that knows which CMS adapter is in use. Pages and layouts
 * import `content` from here and never a CMS package directly (enforced by
 * ESLint), so swapping CMS means changing this file only.
 *
 * Phase 2 adds `SanityContentService` from `@portfolio/sanity` and its
 * `PreviewAdapter` from `@portfolio/sanity/next`, with fixtures kept behind
 * `CONTENT_SOURCE=fixtures` for running without the CMS.
 */
export const content: ContentService = new FixtureContentService();
