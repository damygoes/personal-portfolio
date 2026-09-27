import { z } from "zod";
import { ImageSchema, TextRunSchema } from "./common";

/**
 * Post body blocks. The content layer converts Portable Text into these, so the
 * renderer never sees CMS shapes. Heading ids are stable anchors shared with the TOC.
 */

const key = z.string();

export const ParagraphBlockSchema = z.object({
  _type: z.literal("paragraph"),
  _key: key,
  children: z.array(TextRunSchema).min(1),
});

export const HeadingBlockSchema = z.object({
  _type: z.literal("heading"),
  _key: key,
  id: z.string(),
  text: z.string(),
});

export const ListBlockSchema = z.object({
  _type: z.literal("list"),
  _key: key,
  ordered: z.boolean(),
  items: z.array(z.array(TextRunSchema).min(1)).min(1),
});

export const PullQuoteBlockSchema = z.object({
  _type: z.literal("pullQuote"),
  _key: key,
  text: z.string(),
});

export const CodeBlockSchema = z.object({
  _type: z.literal("code"),
  _key: key,
  code: z.string(),
  language: z.string(),
  /** Display name for the code bar ("Markdown"). */
  languageLabel: z.string().optional(),
  filename: z.string().optional(),
  /** Pre-highlighted HTML (tokens use the .k / .s / .c classes). */
  html: z.string().optional(),
});

export const FigureBlockSchema = z.object({
  _type: z.literal("figure"),
  _key: key,
  image: ImageSchema,
  caption: z.string().optional(),
});

/** Reserved for the photography layout (not designed yet): renders as figures. */
export const GalleryBlockSchema = z.object({
  _type: z.literal("gallery"),
  _key: key,
  images: z.array(ImageSchema).min(1),
  caption: z.string().optional(),
});

export const BodyBlockSchema = z.discriminatedUnion("_type", [
  ParagraphBlockSchema,
  HeadingBlockSchema,
  ListBlockSchema,
  PullQuoteBlockSchema,
  CodeBlockSchema,
  FigureBlockSchema,
  GalleryBlockSchema,
]);
export type BodyBlock = z.infer<typeof BodyBlockSchema>;
export type CodeBlock = z.infer<typeof CodeBlockSchema>;
export type FigureBlock = z.infer<typeof FigureBlockSchema>;
export type GalleryBlock = z.infer<typeof GalleryBlockSchema>;

export const TocEntrySchema = z.object({
  id: z.string(),
  text: z.string(),
  /** "01" */
  number: z.string(),
});
export type TocEntry = z.infer<typeof TocEntrySchema>;
