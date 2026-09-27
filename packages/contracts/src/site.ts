import { z } from "zod";
import { EditTargetSchema, LinkSchema } from "./common";

export const MarqueeItemSchema = z.object({
  text: z.string(),
  outlined: z.boolean(),
});
export type MarqueeItemDTO = z.infer<typeof MarqueeItemSchema>;

export const AuthorSchema = z.object({
  name: z.string(),
  /** "DB" — shown in the avatar circle. */
  initials: z.string(),
  role: z.string(),
  bio: z.string().optional(),
});
export type AuthorDTO = z.infer<typeof AuthorSchema>;

/** Site-wide settings: header, footer, hero meta, contact and marquee. */
export const SiteSettingsSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  email: z.string(),
  /** LinkedIn, GitHub — in display order. */
  socials: z.array(LinkSchema),
  cvUrl: z.string().optional(),
  location: z.string(),
  timezone: z.string(),
  yearsExperienceLabel: z.string(),
  heroMeta: z.array(z.string()),
  currentRole: z.object({ title: z.string(), company: z.string() }),
  marqueeItems: z.array(MarqueeItemSchema),
  author: AuthorSchema,
  editTarget: EditTargetSchema,
});
export type SiteSettingsDTO = z.infer<typeof SiteSettingsSchema>;
