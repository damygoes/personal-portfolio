import type { Locale } from "@portfolio/contracts";
import { de } from "./de";
import { en, type Dictionary } from "./en";
import { fr } from "./fr";

export type { Dictionary, Locale };

/** One dictionary per registry locale — adding a locale without one fails type-checking. */
export const dictionaries: Record<Locale, Dictionary> = { en, de, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
