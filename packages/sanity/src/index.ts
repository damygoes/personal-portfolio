import { createContentService } from "@portfolio/content-core";
import type { ContentService, EditAttrs } from "@portfolio/contracts";
import {
  createClient,
  type FilteredResponseQueryOptions,
  type SanityClient,
} from "@sanity/client";
import { imageMapper } from "./images";
import { sanityRecordSource } from "./source";

/** Pinned Content Lake API version (a UTC date; bump deliberately). */
export const SANITY_API_VERSION = "2026-10-21";

export interface SanityContentConfig {
  projectId: string;
  dataset: string;
  /** Read token: needed for drafts (draft mode) and private datasets. Server-only. */
  token?: string;
  /** "drafts" in draft mode; published content otherwise. */
  perspective?: "published" | "drafts";
  /** Use the CDN for published reads (default true unless a token is set). */
  useCdn?: boolean;
  /**
   * Builds visual-editing attributes for a document field. Phase 3's
   * `@portfolio/sanity/next` passes one in draft mode; unset = no attributes.
   */
  editAttrs?: (doc: { id: string; type: string }, path?: string) => EditAttrs;
  /** Inject a client (tests, or a framework-specific fetch wrapper). */
  client?: SanityClient;
  /** Options for every fetch, e.g. Next.js `{ next: { tags } }` or `{ cache: "no-store" }`. */
  fetchOptions?: FilteredResponseQueryOptions;
}

export function createSanityClient(config: SanityContentConfig): SanityClient {
  return (
    config.client ??
    createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: SANITY_API_VERSION,
      token: config.token,
      perspective: config.perspective ?? "published",
      useCdn: config.useCdn ?? !config.token,
    })
  );
}

/** ContentService backed by Sanity; same DTOs as the fixture service. */
export function createSanityContentService(
  config: SanityContentConfig,
): ContentService {
  const client = createSanityClient(config);
  return createContentService(
    sanityRecordSource(
      client,
      {
        image: imageMapper(config),
        edit: (doc, path) =>
          config.editAttrs?.({ id: doc._id, type: doc._type }, path),
      },
      config.fetchOptions,
    ),
  );
}

export { sanityRecordSource } from "./source";
