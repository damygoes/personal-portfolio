/** Studio env, with the project defaults from the Sanity dashboard. */
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "jok2puek";
export const dataset = process.env.SANITY_STUDIO_DATASET || "development";
export const previewUrl =
  process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";
/** Pinned API version for Studio-side queries (validation, structure). */
export const apiVersion = "2026-10-21";
