import "server-only";
import type { ContentService, PreviewAdapter } from "@portfolio/contracts";
import { FixtureContentService } from "@portfolio/fixtures";
import { createSanityNext } from "@portfolio/sanity/next";
import type { ComponentType } from "react";

/**
 * The only module that knows which CMS adapter is in use. Pages, layouts and
 * route handlers import `content` / `preview` from here and never a CMS
 * package directly (enforced by ESLint), so swapping CMS means changing this
 * file only.
 *
 * Sanity when its env vars are set; the static fixtures otherwise, or when
 * forced with CONTENT_SOURCE=fixtures (offline dev, CI builds).
 */
function createContent(): {
  content: ContentService;
  preview: PreviewAdapter<ComponentType>;
} {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (process.env.CONTENT_SOURCE === "fixtures" || !projectId || !dataset) {
    return { content: new FixtureContentService(), preview: noPreview };
  }
  return createSanityNext({
    projectId,
    dataset,
    // Server-only; reads the private development dataset and drafts.
    token: process.env.SANITY_API_READ_TOKEN,
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    revalidateSecret: process.env.SANITY_REVALIDATE_SECRET,
  });
}

/** Fixtures have no drafts and never change at runtime. */
const notAvailable = () =>
  new Response("Preview is not available with fixture content", {
    status: 404,
  });
const noPreview: PreviewAdapter<ComponentType> = {
  enable: notAvailable,
  disable: notAvailable,
  revalidate: notAvailable,
  Overlay: () => null,
};

export const { content, preview } = createContent();
