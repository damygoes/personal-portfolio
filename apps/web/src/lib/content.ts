import "server-only";
import type { ContentService } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { createSanityContentService } from "@portfolio/sanity";

/**
 * The only module that knows which CMS adapter is in use. Pages and layouts
 * import `content` from here and never a CMS package directly (enforced by
 * ESLint), so swapping CMS means changing this file only.
 *
 * Sanity when its env vars are set; the static fixtures otherwise, or when
 * forced with CONTENT_SOURCE=fixtures (offline dev, CI builds).
 * Phase 3 adds the PreviewAdapter (draft mode, overlay, revalidation).
 */
function createContent(): ContentService {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (process.env.CONTENT_SOURCE === "fixtures" || !projectId || !dataset) {
    return new FixtureContentService();
  }
  return createSanityContentService({
    projectId,
    dataset,
    // Server-only; required to read a private dataset (development).
    token: process.env.SANITY_API_READ_TOKEN,
  });
}

export const content: ContentService = createContent();
