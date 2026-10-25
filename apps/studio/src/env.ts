/** Studio env, with the project defaults from the Sanity dashboard. */
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "jok2puek";
/** Where each workspace's Presentation tool previews (draft mode). */
export const previewUrls = {
  production:
    process.env.SANITY_STUDIO_PREVIEW_URL_PRODUCTION ||
    "https://www.damilolabada.com",
  development: process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000",
};
/** Pinned API version for Studio-side queries (validation, structure). */
export const apiVersion = "2026-10-21";
