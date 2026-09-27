import { pad2 } from "./format";

/**
 * True for values that must never render: empty, whitespace, `[bracketed]`
 * design placeholders, and `{ placeholder: true }` seed objects.
 */
export function isPlaceholder(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") {
    const t = value.trim();
    return t === "" || /^\[.*\]$/s.test(t);
  }
  if (Array.isArray(value)) return value.every(isPlaceholder);
  if (typeof value === "object") {
    return (value as { placeholder?: unknown }).placeholder === true;
  }
  return false;
}

/** The string, or undefined when it is a placeholder. */
export function text(value: string | null | undefined): string | undefined {
  return isPlaceholder(value) ? undefined : (value as string).trim();
}

/** Drops placeholder entries from a list. */
export function compact<T>(
  items: readonly (T | null | undefined)[] | null | undefined,
): T[] {
  return (items ?? []).filter((item): item is T => !isPlaceholder(item));
}

/** Numbers the items that remain after filtering: "01", "02", … */
export function numberItems<T extends object>(
  items: readonly T[],
): (T & { number: string })[] {
  return items.map((item, i) => ({ ...item, number: pad2(i + 1) }));
}
