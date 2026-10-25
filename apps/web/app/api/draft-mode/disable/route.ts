import { preview } from "@/lib/content";

/** Leaves draft mode; `?redirect=/en/blog` returns to a page. */
export const GET = preview.disable;
