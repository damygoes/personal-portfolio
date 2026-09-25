/**
 * Tailwind's JIT scanner only generates utilities for class names it can see
 * literally in source. A dynamic template like `gap-${n}` is invisible to it,
 * so every supported step is spelled out here instead (capped at 0-12, the
 * common range — extend this map if a larger gap is ever needed).
 */
const gapClassNames = {
  0: "gap-0",
  0.5: "gap-0.5",
  1: "gap-1",
  1.5: "gap-1.5",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
} as const;

export type Gap = keyof typeof gapClassNames;

export function resolveGapClassName(gap: Gap): string {
  return gapClassNames[gap];
}
