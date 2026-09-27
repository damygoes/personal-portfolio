import { de } from "./de";
import { en, type Dictionary } from "./en";

export type { Dictionary };
export type Locale = "en" | "de";

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
