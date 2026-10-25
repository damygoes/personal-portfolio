import { z } from "zod";

/**
 * The locale registry — the single source of truth for every locale the site
 * supports. Studio languages, routes, hreflang, date formatting and the
 * language switch all derive from this list.
 *
 * Adding a locale: add it to `LOCALES` and `LOCALE_META`, then add its UI
 * dictionary to `@portfolio/i18n` (type-checking fails until you do).
 */
export const LOCALES = ["en", "de", "fr"] as const;

export const LocaleSchema = z.enum(LOCALES);
export type Locale = z.infer<typeof LocaleSchema>;

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleMeta {
  /** Short switcher label: "EN". */
  label: string;
  /** Native name, for the switcher menu and screen readers: "Deutsch". */
  name: string;
  /** BCP 47 tag for `Intl` formatting. */
  intl: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "EN", name: "English", intl: "en-US" },
  de: { label: "DE", name: "German", intl: "de-DE" },
  fr: { label: "FR", name: "French", intl: "fr-FR" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Languages to try, in order, when resolving content: the locale, then the default. */
export function fallbackChain(locale: Locale): Locale[] {
  return locale === DEFAULT_LOCALE ? [locale] : [locale, DEFAULT_LOCALE];
}
