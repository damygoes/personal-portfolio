/**
 * Colors — Lagoon + Coral
 *
 * Raw palette: every hex value in the system, as 50–950 ramps.
 * The 500-ish anchors are the brand colors:
 *   lagoon-700 #0b6b66 (primary, light) · lagoon-400 #46c7ba (primary, dark)
 *   coral-500  #e2583e (spark)          · coral-400  #ff7a5c (spark, dark)
 *   sand-100   #f3efe6 (paper)          · ink-950    #0b1110 (night)
 *
 * Components should consume the SEMANTIC names (`themes` below / the
 * CSS variables in tokens.css), never the raw ramps directly.
 */

export const colors = {
  /** Brand primary — deep teal. */
  lagoon: {
    50: "#eafbf9",
    100: "#d4f5f1",
    200: "#aee8e2",
    300: "#7ad7cf",
    400: "#46c7ba",
    500: "#09a198",
    600: "#117f78",
    700: "#0b6b66",
    800: "#004d49",
    900: "#003633",
    950: "#00201e",
  },
  /** Brand spark — warm coral. Decorative: the dot, arrows, highlights. */
  coral: {
    50: "#fff4f2",
    100: "#fee7e1",
    200: "#fecec3",
    300: "#fdad9b",
    400: "#ff7a5c",
    500: "#e2583e",
    600: "#b8402a",
    700: "#983623",
    800: "#712617",
    900: "#50190f",
    950: "#310d07",
  },
  /** Warm paper neutrals — light-theme surfaces and borders. */
  sand: {
    50: "#fbf9f3",
    100: "#f3efe6",
    200: "#e4dfd3",
    300: "#d1cabb",
    400: "#b8b0a0",
    500: "#989282",
    600: "#7a7466",
    700: "#605a4e",
    800: "#464238",
    900: "#312d26",
    950: "#1d1a15",
  },
  /** Teal-tinted greys — text in both themes, dark-theme surfaces. */
  ink: {
    50: "#f4f8f7",
    100: "#e7ecea",
    200: "#d5dcdb",
    300: "#c3cbc8",
    400: "#949b98",
    500: "#757c7b",
    600: "#5f6664",
    700: "#37403e",
    800: "#212b2a",
    900: "#0f1a19",
    950: "#0b1110",
  },

  white: "#ffffff",
  black: "#000000",
} as const;

/**
 * Semantic colours resolved to hex, per theme. Mirrors the CSS variables in
 * styles/tokens.css (`--bg`, `--fg`, …) — use this where CSS variables are
 * unavailable.
 */
const light = {
  bg: colors.sand[100],
  fg: colors.ink[900],
  "fg-soft": colors.ink[700],
  muted: colors.ink[600],
  primary: colors.lagoon[700],
  "primary-fg": colors.sand[50],
  spark: colors.coral[500],
  "spark-text": colors.coral[600],
  card: colors.sand[50],
  border: colors.sand[200],
  divider: "#0f1a191f",
  secondary: colors.sand[200],
  accent: colors.sand[200],
  ring: colors.lagoon[700],
  band: colors.ink[900],
  "band-fg": colors.sand[100],
  "band-muted": colors.ink[400],
  "band-primary": colors.lagoon[400],
  "band-line": "#e7ecea24",
  cover: colors.lagoon[800],
  "cover-fg": colors.lagoon[100],
  "cover-line": colors.lagoon[300],
  "cover-ghost": "#7ad7cf55",
  warm: colors.coral[100],
  "warm-fg": colors.coral[700],
  "warm-ghost": colors.coral[300],
  stone: colors.sand[200],
  "stone-fg": colors.sand[800],
  "stone-ghost": colors.sand[400],
  "cover-warm": colors.coral[800],
} as const;

const dark: Record<keyof typeof light, string> = {
  bg: colors.ink[950],
  fg: colors.ink[100],
  "fg-soft": colors.ink[300],
  muted: colors.ink[400],
  primary: colors.lagoon[400],
  "primary-fg": colors.ink[950],
  spark: colors.coral[400],
  "spark-text": colors.coral[400],
  card: colors.ink[900],
  border: colors.ink[800],
  divider: "#e7ecea1f",
  secondary: colors.ink[800],
  accent: colors.ink[800],
  ring: colors.lagoon[400],
  band: colors.lagoon[950],
  "band-fg": colors.ink[100],
  "band-muted": colors.ink[400],
  "band-primary": colors.lagoon[400],
  "band-line": "#e7ecea24",
  cover: colors.lagoon[900],
  "cover-fg": colors.lagoon[100],
  "cover-line": colors.lagoon[400],
  "cover-ghost": "#46c7ba44",
  warm: colors.coral[950],
  "warm-fg": colors.coral[300],
  "warm-ghost": colors.coral[700],
  stone: colors.ink[800],
  "stone-fg": colors.ink[300],
  "stone-ghost": colors.ink[700],
  "cover-warm": colors.coral[900],
};

export const themes = { light, dark } as const;

export type ColorName = keyof typeof colors;
export type ThemeName = keyof typeof themes;
export type SemanticColor = keyof typeof light;
