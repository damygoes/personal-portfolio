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
} as const;

/** Letter spacing in em. widest = the mono uppercase labels and links. */
export const letterSpacings = {
  tighter: -0.025,
  tight: -0.015,
  normal: 0,
  widest: 0.15,
} as const;

type Step = { mobile: number; tablet: number; desktop: number };

/**
 * The design's type roles (site.css), px per layout: mobile < 640,
 * tablet 640–1023, desktop >= 1024. tokens.css exposes each as a utility
 * with the same name (`t-hero`, `t-xl`, …).
 */
export const typeScale = {
  "t-hero": { mobile: 64, tablet: 108, desktop: 184, lineHeight: 0.86 },
  "cs-title": { mobile: 52, tablet: 100, desktop: 184, lineHeight: 0.86 },
  "t-xl": { mobile: 44, tablet: 72, desktop: 96, lineHeight: 0.9 },
  "t-cta": { mobile: 48, tablet: 72, desktop: 96, lineHeight: 0.9 },
  "t-next": { mobile: 40, tablet: 72, desktop: 120, lineHeight: 0.9 },
  "t-ftr-mark": { mobile: 64, tablet: 84, desktop: 166, lineHeight: 0.86 },
  "t-statement": {
    mobile: 34,
    tablet: 44,
    desktop: 56,
    lineHeight: 1.05,
    fontWeight: 600,
  },
  "t-md": {
    mobile: 32,
    tablet: 48,
    desktop: 64,
    lineHeight: 1,
    fontWeight: 700,
  },
  "t-sm": {
    mobile: 32,
    tablet: 40,
    desktop: 40,
    lineHeight: 1.05,
    fontWeight: 700,
  },
  "cs-h": {
    mobile: 32,
    tablet: 44,
    desktop: 56,
    lineHeight: 1.05,
    fontWeight: 700,
  },
  "ph-title": {
    mobile: 38,
    tablet: 60,
    desktop: 88,
    lineHeight: 1,
    fontWeight: 700,
  },
  "t-lede": {
    mobile: 22,
    tablet: 26,
    desktop: 32,
    lineHeight: 1.2,
    fontWeight: 500,
  },
  "t-post": {
    mobile: 24,
    tablet: 28,
    desktop: 28,
    lineHeight: 1.15,
    fontWeight: 700,
  },
  "t-body-lg": { mobile: 16, tablet: 18, desktop: 18, lineHeight: 1.65 },
  "t-body": { mobile: 16, tablet: 16, desktop: 16, lineHeight: 1.6 },
  label: { mobile: 12, tablet: 12, desktop: 12, lineHeight: 1.5 },
  "label-2xs": { mobile: 11, tablet: 11, desktop: 11, lineHeight: 1.45 },
} as const satisfies Record<
  string,
  Step & { lineHeight: number; fontWeight?: number }
>;

/** RN helpers: relative → absolute px. */
export const toLineHeight = (fontSize: number, multiplier: number) =>
  Math.round(fontSize * multiplier);
export const toLetterSpacing = (fontSize: number, em: number) =>
  +(fontSize * em).toFixed(2);

export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type FontFamily = keyof typeof fontFamilies;
