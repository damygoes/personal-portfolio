import {
  LOCALES,
  type Locale,
  type SiteSettingsDTO,
} from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";

/** Flip to `true` to bring back the blog nav links, home section, routes and sitemap entries. */
export const BLOG_ENABLED = false;

export type NavKey = "work" | "about" | "blog";

/** What every page chrome component needs. */
export interface ChromeProps {
  site: SiteSettingsDTO;
  dict: Dictionary;
  locale: Locale;
  /** The current route in each locale, for the EN / DE switch. */
  alternates: Record<Locale, string>;
}

export function pagePaths(locale: Locale) {
  return {
    home: `/${locale}`,
    work: `/${locale}/work`,
    about: `/${locale}/about`,
    blog: `/${locale}/blog`,
  };
}

/** A locale-less path ("/work") in every registry locale: `{ en: "/en/work", … }`. */
export function localeAlternates(path: string): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((l) => [l, `/${l}${path}`])) as Record<
    Locale,
    string
  >;
}
