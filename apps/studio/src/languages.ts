import { DEFAULT_LOCALE, LOCALES, LOCALE_META } from "@portfolio/contracts";

/**
 * Studio languages come from the site's locale registry, so adding a locale
 * to `LOCALES` adds it to both translation plugins and the structure.
 */
export const languages = LOCALES.map((id) => ({
  id,
  title: LOCALE_META[id].name,
}));

export const baseLanguage = DEFAULT_LOCALE;

/** Document types translated as whole documents (one per language). */
export const translatedDocumentTypes = ["post", "caseStudy", "about"];

/** Document types with field-level (internationalized array) translations. */
export const fieldTranslatedDocumentTypes = [
  "siteSettings",
  "project",
  "experience",
  "skillGroup",
  "category",
];
