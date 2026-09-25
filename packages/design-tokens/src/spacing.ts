/**
 * Spacing, radius and layout — all values are unitless px numbers so they
 * work unchanged in React Native. tokens.css expresses the same values in rem
 * (16px = 1rem).
 *
 * The spacing scale is Tailwind's: key × 4px (`p-6` = spacing[6] = 24).
 * On the web Tailwind v4 derives every step from the single `--spacing`
 * base, so any multiple works; this object lists the curated steps.
 */

export const SPACING_BASE = 4;

export const spacing = {
  0: 0,
  px: 1,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const;

/** Soft corners. md for controls, lg for cards, full for pills/avatars. */
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 24,
  full: 9999,
} as const;

/** Semantic layout spacing. Each has sm / md / lg steps to pair with breakpoints. */
export const layout = {
  /** Horizontal page padding. */
  gutter: { sm: 16, md: 24, lg: 32 },
  /** Vertical padding between page sections. */
  sectionY: { sm: 96, md: 128, lg: 160 },
} as const;

/** Max content widths. reading ≈ 68ch of Inter at 16px, for blog posts (Tailwind already owns `max-w-prose` = 65ch). */
export const containers = {
  reading: 680,
  content: 1200,
  wide: 1440,
} as const;

/** Min-width breakpoints (Tailwind defaults). */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof borderRadius;
export type Breakpoint = keyof typeof breakpoints;
