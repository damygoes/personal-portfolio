import { preview } from "@/lib/content";

/** CMS publish webhook: verifies the signature and revalidates cached content. */
export const POST = preview.revalidate;
