import { z } from "zod";
import type { PortableTextBlock } from "@portabletext/types";
import { PhotoSchema } from "./common";

/**
 * Rich text is Portable Text (an open spec, not Sanity-specific) plus custom blocks.
 * The content layer has already:
 *  - resolved every image to `Photo`
 *  - resolved `link` / `internalLink` marks to `{ href, external }` (locale-aware)
 *  - removed empty blocks
 * Heading anchors use the block's `_key`, so the TOC and renderer always agree.
 */

const isTextBlock = (v: unknown): v is PortableTextBlock =>
  typeof v === "object" &&
  v !== null &&
  (v as { _type?: unknown })._type === "block";

export const TextBlockSchema = z.custom<PortableTextBlock>(isTextBlock, {
  message: "Expected a Portable Text block",
});

export const FigureBlockSchema = z.object({
  _type: z.literal("figure"),
  _key: z.string(),
  image: PhotoSchema,
  size: z.enum(["inline", "wide", "fullBleed"]),
  showExif: z.boolean(),
});

export const GalleryBlockSchema = z.object({
  _type: z.literal("gallery"),
  _key: z.string(),
  layout: z.enum(["grid", "masonry", "carousel"]),
  caption: z.string().optional(),
  showExif: z.boolean(),
  images: z.array(PhotoSchema).min(2),
});

export const CodeBlockSchema = z.object({
  _type: z.literal("code"),
  _key: z.string(),
  language: z.string(),
  code: z.string(),
  filename: z.string().optional(),
  highlightedLines: z.array(z.number().int()),
});

export const CalloutBlockSchema = z.object({
  _type: z.literal("callout"),
  _key: z.string(),
  tone: z.enum(["info", "tip", "warning"]),
  body: z.array(TextBlockSchema),
});

export const VideoEmbedBlockSchema = z.object({
  _type: z.literal("videoEmbed"),
  _key: z.string(),
  provider: z.enum(["youtube", "vimeo"]),
  videoId: z.string(),
  title: z.string(),
});

export const RichTextNodeSchema = z.union([
  TextBlockSchema,
  FigureBlockSchema,
  GalleryBlockSchema,
  CodeBlockSchema,
  CalloutBlockSchema,
  VideoEmbedBlockSchema,
]);
export const RichTextSchema = z.array(RichTextNodeSchema);

export type FigureBlock = z.infer<typeof FigureBlockSchema>;
export type GalleryBlock = z.infer<typeof GalleryBlockSchema>;
export type CodeBlock = z.infer<typeof CodeBlockSchema>;
export type CalloutBlock = z.infer<typeof CalloutBlockSchema>;
export type VideoEmbedBlock = z.infer<typeof VideoEmbedBlockSchema>;
export type RichText = z.infer<typeof RichTextSchema>;

export const TocEntrySchema = z.object({
  /** = heading block `_key` */
  id: z.string(),
  text: z.string(),
  level: z.union([z.literal(2), z.literal(3)]),
});
export type TocEntry = z.infer<typeof TocEntrySchema>;

/* Portable Text blocks have `_type: string`, so `_type` checks don't narrow. Use these guards. */
export type RichTextNode = z.infer<typeof RichTextNodeSchema>;
export const isFigureBlock = (n: RichTextNode): n is FigureBlock =>
  n._type === "figure";
export const isGalleryBlock = (n: RichTextNode): n is GalleryBlock =>
  n._type === "gallery";
