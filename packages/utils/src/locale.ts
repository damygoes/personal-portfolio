import type { Locale } from "@portfolio/contracts";
import { isPlaceholder } from "./content";

/**
 * A field-level translation: one entry per language, in the shape of
 * sanity-plugin-internationalized-array v5 (`language` field, random `_key`).
 * A `_key` holding the language (the plugin's v4 shape) is still accepted.
 */
export interface LocalizedValue<T> {
  _key?: string;
  language?: string | null;
  value?: T | null;
}

/**
 * The first non-empty translation along the fallback chain
 * (`fallbackChain(locale)` from contracts), or undefined.
 */
export function pickLocale<T>(
  values: readonly LocalizedValue<T>[] | null | undefined,
  chain: readonly Locale[],
): T | undefined {
  for (const locale of chain) {
    const hit = values?.find((v) => (v.language ?? v._key) === locale);
    if (hit && !isPlaceholder(hit.value)) return hit.value as T;
  }
  return undefined;
}
