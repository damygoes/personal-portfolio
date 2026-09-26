import { z } from "zod";

/**
 * Shared building blocks for every view model.
 * Rule: nothing in this package knows about Sanity. All values are already
 * resolved for the requested locale when they reach the frontend.
 */

export const LocaleSchema = z.enum(["en", "de"]);
export type Locale = z.infer<typeof LocaleSchema>;

/**
 * Opaque value for a `data-sanity` attribute. Only set in draft mode (Presentation tool).
 * Lets Visual Editing put click-to-edit overlays on things stega can't mark: images, dates,
 * numbers, whole cards/list items (which also enables drag-to-reorder of arrays).
 * The frontend just spreads it: `<div data-sanity={x.editTarget}>`.
 */
export const EditTargetSchema = z.string().optional();

/** ISO 8601 string. The frontend formats dates with Intl for the active locale. */
export const IsoDateSchema = z.string();

export const ImageSchema = z.object({
  /** Untransformed CDN URL. The Next.js image loader appends width/quality/format. */
  src: z.string(),
  width: z.number().int(),
  height: z.number().int(),
  alt: z.string(),
  caption: z.string().optional(),
  /** Base64 blur placeholder for next/image `placeholder="blur"`. */
  lqip: z.string().optional(),
  /** Focal point (0–1) → CSS object-position. */
  focalPoint: z.object({ x: z.number(), y: z.number() }).optional(),
  editTarget: EditTargetSchema,
});
export type Image = z.infer<typeof ImageSchema>;

/** Already formatted for display ("f/2.8", "1/250s", "35mm"). */
export const ExifSchema = z.object({
  camera: z.string().optional(),
  lens: z.string().optional(),
  focalLength: z.string().optional(),
  aperture: z.string().optional(),
  shutterSpeed: z.string().optional(),
  iso: z.number().int().optional(),
  takenAt: IsoDateSchema.optional(),
});
export type Exif = z.infer<typeof ExifSchema>;

export const PhotoSchema = ImageSchema.extend({ exif: ExifSchema.optional() });
export type Photo = z.infer<typeof PhotoSchema>;

export const LinkSchema = z.object({
  label: z.string(),
  /** Locale-prefixed internal path ("/de/blog/…"), anchor ("#work") or absolute URL. */
  href: z.string(),
  external: z.boolean(),
});
export type Link = z.infer<typeof LinkSchema>;

/** Extend the enum when you add platforms. */
export const SocialPlatformSchema = z.enum(["linkedin", "github", "other"]);
export const SocialLinkSchema = z.object({
  platform: SocialPlatformSchema,
  label: z.string(),
  href: z.string(),
});
export type SocialLink = z.infer<typeof SocialLinkSchema>;

/** Only locales that actually have a published translation are listed. */
export const AlternateSchema = z.object({
  locale: LocaleSchema,
  href: z.string(),
});
export type Alternate = z.infer<typeof AlternateSchema>;

export const SeoSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonicalUrl: z.string(),
  ogImage: ImageSchema.optional(),
  noIndex: z.boolean(),
  alternates: z.array(AlternateSchema),
});
export type Seo = z.infer<typeof SeoSchema>;

export const PeriodSchema = z.object({
  start: IsoDateSchema,
  /** null = ongoing */
  end: IsoDateSchema.nullable(),
  isCurrent: z.boolean(),
});
export type Period = z.infer<typeof PeriodSchema>;

/** Minimal pointer used for prev/next navigation. */
export const NeighbourSchema = z.object({
  title: z.string(),
  href: z.string(),
});
export type Neighbour = z.infer<typeof NeighbourSchema>;
