/// <reference types="next/types/global" />
/**
 * Next.js glue for the Sanity adapter: a draft-aware ContentService and the
 * `PreviewAdapter` (draft-mode route handlers, the publish webhook, the
 * visual-editing overlay). A separate entry point so the root export stays
 * framework-agnostic.
 */
import type { ContentService, PreviewAdapter } from "@portfolio/contracts";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { createDataAttribute } from "@sanity/visual-editing/create-data-attribute";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidateTag } from "next/cache";
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { ComponentType } from "react";
import { createSanityClient, createSanityContentService } from "./index";
import { SanityOverlay } from "./overlay";

/**
 * One tag for every published read. Pages combine most document types (the
 * home page shows projects, posts, categories, about and site settings), so
 * finer tags would revalidate nearly everything on each publish anyway.
 */
export const SANITY_CACHE_TAG = "sanity";

/** The field an element-level overlay opens when no field path is given. */
const DOCUMENT_FIELD: Record<string, string> = {
  about: "statement",
  caseStudy: "titleSplit",
  experience: "role",
  project: "card",
  siteSettings: "identity",
};

export interface SanityNextConfig {
  projectId: string;
  dataset: string;
  /** Viewer token: private datasets and drafts. Server-only. */
  token?: string;
  /** Studio URL, for "open in Studio" links from overlays. */
  studioUrl?: string;
  /** Shared secret of the Sanity publish webhook. */
  revalidateSecret?: string;
}

export interface SanityNext {
  /** Published content (cache-tagged), or drafts with edit attributes in draft mode. */
  content: ContentService;
  preview: PreviewAdapter<ComponentType>;
}

export function createSanityNext(config: SanityNextConfig): SanityNext {
  const { projectId, dataset, token, studioUrl } = config;

  const published = createSanityContentService({
    projectId,
    dataset,
    token,
    // Next's data cache holds published reads; skipping the API CDN means a
    // webhook-triggered refetch never sees the CDN's not-yet-updated copy.
    useCdn: false,
    fetchOptions: { next: { tags: [SANITY_CACHE_TAG], revalidate: false } },
  });
  // Drafts need the token; without one, draft mode shows published content.
  const drafts = token
    ? createSanityContentService({
        projectId,
        dataset,
        token,
        perspective: "drafts",
        useCdn: false,
        fetchOptions: { cache: "no-store" },
        editAttrs: (doc, path) => ({
          "data-sanity": createDataAttribute({
            projectId,
            dataset,
            baseUrl: studioUrl,
            id: doc.id,
            type: doc.type,
            path: path ?? DOCUMENT_FIELD[doc.type] ?? "title",
          }).toString(),
        }),
      })
    : published;

  const pick = async () => ((await draftMode()).isEnabled ? drafts : published);
  const content: ContentService = {
    getSiteSettings: async (...a) => (await pick()).getSiteSettings(...a),
    getHome: async (...a) => (await pick()).getHome(...a),
    getWorkPage: async (...a) => (await pick()).getWorkPage(...a),
    getCaseStudy: async (...a) => (await pick()).getCaseStudy(...a),
    getAbout: async (...a) => (await pick()).getAbout(...a),
    getBlogIndex: async (...a) => (await pick()).getBlogIndex(...a),
    getPost: async (...a) => (await pick()).getPost(...a),
    // Static params: always the published slugs.
    getRoutes: () => published.getRoutes(),
  };

  return {
    content,
    preview: {
      enable: (request) => enableDraftMode(request, config),
      disable: disableDraftMode,
      revalidate: (request) => revalidate(request, config),
      Overlay: SanityOverlay,
    },
  };
}

/**
 * The Presentation tool opens this with a one-time secret. The cookie must be
 * `SameSite=None; Partitioned` when the preview is a cross-site iframe, or
 * browsers that block third-party cookies drop it (after next-sanity).
 */
async function enableDraftMode(
  request: Request,
  config: SanityNextConfig,
): Promise<Response> {
  if (!config.token)
    return new Response("Draft mode needs SANITY_API_READ_TOKEN", {
      status: 500,
    });
  const client = createSanityClient({ ...config, useCdn: false });
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client,
    request.url,
  );
  if (!isValid) return new Response("Invalid secret", { status: 401 });

  const draft = await draftMode();
  if (!draft.isEnabled) draft.enable();

  const secure = process.env.NODE_ENV === "production";
  const cookieStore = await cookies();
  cookieStore.set({
    name: "__prerender_bypass",
    value: cookieStore.get("__prerender_bypass")?.value ?? "",
    httpOnly: true,
    path: "/",
    secure,
    sameSite: secure ? "none" : "lax",
    partitioned:
      secure &&
      request.headers.get("sec-fetch-dest") === "iframe" &&
      request.headers.get("sec-fetch-site") === "cross-site",
  });
  redirect(redirectTo);
}

/** Leaves draft mode and returns to `?redirect=` (same-origin paths only). */
async function disableDraftMode(request: Request): Promise<Response> {
  (await draftMode()).disable();
  const target = new URL(request.url).searchParams.get("redirect") ?? "/";
  redirect(target.startsWith("/") && !target.startsWith("//") ? target : "/");
}

/**
 * The Sanity publish webhook (any document type). Checks the signature, then
 * expires every published read so the next request fetches fresh content.
 */
async function revalidate(request: Request, config: SanityNextConfig) {
  if (!config.revalidateSecret)
    return new Response("SANITY_REVALIDATE_SECRET is not set", { status: 500 });
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const body = await request.text();
  if (
    !signature ||
    !(await isValidSignature(body, signature, config.revalidateSecret.trim()))
  )
    return new Response("Invalid signature", { status: 401 });

  revalidateTag(SANITY_CACHE_TAG, { expire: 0 });
  return Response.json({ revalidated: [SANITY_CACHE_TAG], now: Date.now() });
}

export type { PreviewAdapter } from "@portfolio/contracts";
