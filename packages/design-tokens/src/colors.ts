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
 * `--color-*` aliases in tokens.css), never the raw ramps directly.
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

  /* Status — 100: light bg · 400: dark text · 600: light text · 900: dark bg */
  success: { 100: "#e1f5e4", 400: "#5bbd74", 600: "#137738", 900: "#102b17" },
  warning: { 100: "#fcecd9", 400: "#dc932e", 600: "#895706", 900: "#331f05" },
  danger: { 100: "#ffe9e7", 400: "#fd7273", 600: "#b7162d", 900: "#391919" },
  info: { 100: "#e1f1ff", 400: "#5eaceb", 600: "#0668a4", 900: "#0c263a" },

  white: "#ffffff",
  black: "#000000",
} as const;

/**
 * Semantic colors resolved to hex, per theme.
 * Mirrors the `--color-*` aliases in tokens.css — use this on React Native
 * (or anywhere CSS variables are unavailable).
 */
const light = {
  background: colors.sand[100],
  foreground: colors.ink[900],
  "foreground-soft": colors.ink[700],

  card: colors.sand[50],
  "card-foreground": colors.ink[900],
  popover: colors.sand[50],
  "popover-foreground": colors.ink[900],

  primary: colors.lagoon[700],
  "primary-foreground": colors.sand[50],

  spark: colors.coral[500],
  "spark-foreground": colors.ink[900],
  "spark-text": colors.coral[600],

  secondary: colors.sand[200],
  "secondary-foreground": colors.ink[900],
  muted: colors.sand[50],
  "muted-foreground": colors.ink[600],
  accent: colors.sand[200],
  "accent-foreground": colors.ink[900],

  border: colors.sand[200],
  divider: "#0f1a191f", // ink-900 @ 12%
  input: colors.sand[600],
  ring: colors.lagoon[700],

  success: colors.success[600],
  "success-muted": colors.success[100],
  warning: colors.warning[600],
  "warning-muted": colors.warning[100],
  destructive: colors.danger[600],
  "destructive-muted": colors.danger[100],
  "destructive-foreground": colors.sand[50],
  info: colors.info[600],
  "info-muted": colors.info[100],

  sidebar: colors.sand[50],
  "sidebar-foreground": colors.ink[900],
  "sidebar-accent": colors.sand[200],
  "sidebar-accent-foreground": colors.ink[900],
  "sidebar-border": colors.sand[200],
  "sidebar-ring": colors.lagoon[700],
} as const;

const dark: Record<keyof typeof light, string> = {
  background: colors.ink[950],
  foreground: colors.ink[100],
  "foreground-soft": colors.ink[300],

  card: colors.ink[900],
  "card-foreground": colors.ink[100],
  popover: colors.ink[900],
  "popover-foreground": colors.ink[100],

  primary: colors.lagoon[400],
  "primary-foreground": colors.ink[950],

  spark: colors.coral[400],
  "spark-foreground": colors.ink[950],
  "spark-text": colors.coral[400],

  secondary: colors.ink[800],
  "secondary-foreground": colors.ink[100],
  muted: colors.ink[900],
  "muted-foreground": colors.ink[400],
  accent: colors.ink[800],
  "accent-foreground": colors.ink[100],

  border: colors.ink[800],
  divider: "#e7ecea1f", // ink-100 @ 12%
  input: colors.ink[600],
  ring: colors.lagoon[400],

  success: colors.success[400],
  "success-muted": colors.success[900],
  warning: colors.warning[400],
  "warning-muted": colors.warning[900],
  destructive: colors.danger[400],
  "destructive-muted": colors.danger[900],
  "destructive-foreground": colors.ink[950],
  info: colors.info[400],
  "info-muted": colors.info[900],

  sidebar: colors.ink[900],
  "sidebar-foreground": colors.ink[100],
  "sidebar-accent": colors.ink[800],
  "sidebar-accent-foreground": colors.ink[100],
  "sidebar-border": colors.ink[800],
  "sidebar-ring": colors.lagoon[400],
};

export const themes = { light, dark } as const;

export type ColorName = keyof typeof colors;
export type ThemeName = keyof typeof themes;
export type SemanticColor = keyof typeof light;
