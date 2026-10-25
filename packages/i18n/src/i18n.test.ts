import { LOCALES } from "@portfolio/contracts";
import { describe, expect, it } from "vitest";
import { dictionaries } from "./index";

/** Dotted paths of every leaf string: "nav.work", "lang.label", … */
function keys(obj: object, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

describe("dictionaries", () => {
  const reference = keys(dictionaries.en).sort();

  it.each(LOCALES)("%s has exactly the EN keys", (locale) => {
    expect(keys(dictionaries[locale]).sort()).toEqual(reference);
  });

  it.each(LOCALES)("%s has no empty strings", (locale) => {
    const empty = keys(dictionaries[locale]).filter((path) => {
      const value = path
        .split(".")
        .reduce<unknown>(
          (o, k) => (o as Record<string, unknown>)[k],
          dictionaries[locale],
        );
      return typeof value === "string" && value.trim() === "";
    });
    expect(empty).toEqual([]);
  });
});
