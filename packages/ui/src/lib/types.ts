import type { Locale, SiteSettingsDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";

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
