import { z } from "zod";

/**
 * Shared building blocks for every DTO.
 * Nothing in this package knows about Sanity: values reach the frontend already
 * resolved for the requested locale, with placeholders removed.
 */

export const LocaleSchema = z.enum(["en", "de"]);
export type Locale = z.infer<typeof LocaleSchema>;
export const LOCALES = LocaleSchema.options;

/** Opaque `data-sanity` value for Visual Editing overlays. Only set in draft mode. */
export const EditTargetSchema = z.string().optional();

/** ISO 8601 date ("2026-08-30") or month ("2025-11"). */
export const IsoDateSchema = z.string();

/** Cover and background tones. Project "warm" renders the fixed coral Passe. cover. */
export const ToneSchema = z.enum(["warm", "lagoon", "card", "ink", "stone"]);
export type Tone = z.infer<typeof ToneSchema>;

export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().int(),
  height: z.number().int(),
  blurDataURL: z.string().optional(),
  editTarget: EditTargetSchema,
});
export type ImageDTO = z.infer<typeof ImageSchema>;

export const LinkSchema = z.object({
  label: z.string(),
  /** Locale-prefixed path ("/de/work"), anchor ("#contact") or absolute URL. */
  href: z.string(),
  external: z.boolean().optional(),
});
export type LinkDTO = z.infer<typeof LinkSchema>;

/**
 * A run of inline text. `strong` = semi-bold in --fg, `highlight` = --primary
 * (the about statement), `href` = inline link.
 */
export const TextRunSchema = z.object({
  text: z.string(),
  strong: z.boolean().optional(),
  highlight: z.boolean().optional(),
  href: z.string().optional(),
});
export type TextRun = z.infer<typeof TextRunSchema>;

export const ParagraphSchema = z.array(TextRunSchema).min(1);
export type Paragraph = z.infer<typeof ParagraphSchema>;
