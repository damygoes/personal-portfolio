/**
 * Next.js glue for the Sanity adapter — implemented in Phase 3:
 * draft-mode route handlers, the visual-editing overlay, the revalidation
 * webhook and a cached fetch, together implementing `PreviewAdapter` from
 * `@portfolio/contracts`. Kept as a separate entry point so the root export
 * stays framework-agnostic.
 */
export type { PreviewAdapter } from "@portfolio/contracts";
