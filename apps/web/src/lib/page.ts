import "server-only";
import { isLocale, type Locale } from "@portfolio/contracts";
import { getDictionary } from "@portfolio/i18n";
import { localeAlternates, type ChromeProps } from "@portfolio/ui";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";

/** The `[locale]` segment as a registry locale; anything else is a 404. */
export function resolveLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}

/**
 * What every page template's chrome needs. `path` is the locale-less route
 * ("/work"); slugs are shared across languages, so the language switch only
 * swaps the prefix.
 */
export async function pageChrome(
  locale: Locale,
  path: string,
): Promise<ChromeProps> {
  return {
    site: await content.getSiteSettings(locale),
    dict: getDictionary(locale),
    locale,
    alternates: localeAlternates(path),
  };
}
