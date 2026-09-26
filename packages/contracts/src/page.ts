import { z } from "zod";
import { IsoDateSchema, SeoSchema } from "./common";
import { RichTextSchema } from "./rich-text";

/** Simple content pages: Impressum, Datenschutz, etc. */
export const LegalPageSchema = z.object({
  title: z.string(),
  body: RichTextSchema,
  updatedAt: IsoDateSchema,
  seo: SeoSchema,
});
export type LegalPage = z.infer<typeof LegalPageSchema>;
