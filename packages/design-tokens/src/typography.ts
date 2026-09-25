/**
 * Typography — Bricolage Grotesque (display) · Inter (body/UI) · Geist Mono (labels)
 *
 * Sizes are unitless px numbers (React Native-ready); tokens.css uses rem.
 * lineHeights and letterSpacings are RELATIVE (multiplier / em) — on React
 * Native convert with `toLineHeight` / `toLetterSpacing` below, since RN wants
 * absolute px.
 */

/** Family names as registered by the font loader (next/font, expo-font). */
export const fontFamilies = {
  display: "Bricolage Grotesque",
  sans: "Inter",
  mono: "Geist Mono",
} as const;

/** Full CSS stacks with fallbacks (web). */
export const fontStacks = {
  display: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif",
  sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  mono: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

/** Fixed UI scale (px). */
export const fontSizes = {
  "2xs": 11,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
} as const;

/** Named line-height multipliers. */
export const lineHeights = {
  hero: 0.86,
  none: 1,
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.65,
} as const;

/** Default line-height paired with each font size (what `text-*` applies). */
export const fontSizeLineHeights: Record<keyof typeof fontSizes, number> = {
  "2xs": 1.45,
  xs: 1.5,
  sm: 1.5,
  base: 1.6,
  lg: 1.55,
  xl: 1.45,
  "2xl": 1.3,
  "3xl": 1.2,
  "4xl": 1.15,
  "5xl": 1.05,
  "6xl": 1,
  "7xl": 1,
};

/** Letter spacing in em. widest = the mono uppercase labels and links. */
export const letterSpacings = {
  tighter: -0.025,
  tight: -0.01,
  normal: 0,
  wide: 0.08,
  widest: 0.15,
} as const;

/**
 * Fluid display sizes for the uppercase headlines.
 * Web: clamp(min, preferred, max) in tokens.css (`text-display-*`).
 * Native: pick `min` on phones, `max` on tablets, or interpolate on width.
 */
export const displaySizes = {
  hero: {
    min: 52,
    max: 184,
    css: "clamp(3.25rem, 13vw, 11.5rem)",
    lineHeight: 0.86,
    letterSpacing: -0.025,
    fontWeight: 800,
  },
  lg: {
    min: 40,
    max: 96,
    css: "clamp(2.5rem, 1.6rem + 4.5vw, 6rem)",
    lineHeight: 0.9,
    letterSpacing: -0.025,
    fontWeight: 800,
  },
  md: {
    min: 32,
    max: 64,
    css: "clamp(2rem, 1.4rem + 3vw, 4rem)",
    lineHeight: 1,
    letterSpacing: -0.02,
    fontWeight: 700,
  },
  sm: {
    min: 28,
    max: 48,
    css: "clamp(1.75rem, 1.35rem + 2vw, 3rem)",
    lineHeight: 1.05,
    letterSpacing: -0.015,
    fontWeight: 700,
  },
} as const;

/** Composite presets for the recurring roles on the site. */
export const textStyles = {
  hero: {
    fontFamily: "display",
    fontSize: "display-hero",
    fontWeight: 800,
    lineHeight: 0.86,
    letterSpacing: -0.025,
    textTransform: "uppercase",
  },
  heading: {
    fontFamily: "display",
    fontSize: "4xl",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: -0.02,
  },
  body: {
    fontFamily: "sans",
    fontSize: "base",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  prose: {
    fontFamily: "sans",
    fontSize: "lg",
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: 0,
  },
  label: {
    fontFamily: "mono",
    fontSize: "xs",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    textTransform: "uppercase",
  },
  link: {
    fontFamily: "mono",
    fontSize: "xs",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0.15,
    textTransform: "uppercase",
  },
} as const;

/** RN helpers: relative → absolute px. */
export const toLineHeight = (fontSize: number, multiplier: number) =>
  Math.round(fontSize * multiplier);
export const toLetterSpacing = (fontSize: number, em: number) =>
  +(fontSize * em).toFixed(2);

export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type FontFamily = keyof typeof fontFamilies;
