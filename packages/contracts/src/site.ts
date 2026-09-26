import { z } from "zod";
import { ImageSchema, LocaleSchema, SocialLinkSchema } from "./common";

/**
 * Data for the shell (header, footer, metadata defaults). Fetched once per locale.
 * UI labels ("Download CV", "Back to top", nav labels) come from next-intl messages,
 * keyed by `NavKey`, not from here.
 */

export const SectionIdSchema = z.enum([
  "about",
  "experience",
  "work",
  "skills",
  "contact",
]);
export type SectionId = z.infer<typeof SectionIdSchema>;

export const NavKeySchema = z.enum([
  "about",
  "experience",
  "work",
  "skills",
  "contact",
  "blog",
]);
export type NavKey = z.infer<typeof NavKeySchema>;

export const NavItemSchema = z.object({
  key: NavKeySchema,
  /** "/en#about" or "/en/blog". Disabled homepage sections are left out. */
  href: z.string(),
  /** "01" … — only for homepage sections */
  index: z.string().optional(),
});
export type NavItem = z.infer<typeof NavItemSchema>;

export const SiteSchema = z.object({
  locale: LocaleSchema,
  siteName: z.string(),
  siteUrl: z.string(),
  defaultDescription: z.string(),
  defaultOgImage: ImageSchema.optional(),
  owner: z.object({ name: z.string(), email: z.string() }),
  socials: z.array(SocialLinkSchema),
  /** CV for this locale, falls back to the English file. */
  cv: z.object({ href: z.string(), fileName: z.string() }).optional(),
  nav: z.array(NavItemSchema),
  footer: z.object({ tagline: z.string(), copyrightYear: z.number().int() }),
  legalLinks: z.array(z.object({ title: z.string(), href: z.string() })),
});
export type Site = z.infer<typeof SiteSchema>;
