/**
 * Shadows and motion. Web values mirror tokens.css; `native` shapes are for
 * React Native (iOS shadow* props + Android elevation).
 */
import { colors } from "./colors";

export const shadows = {
  light: {
    sm: "0 1px 2px rgb(15 26 25 / 0.08)",
    md: "0 6px 18px rgb(15 26 25 / 0.10)",
    lg: "0 24px 60px rgb(15 26 25 / 0.16)",
  },
  dark: {
    sm: "0 1px 2px rgb(0 0 0 / 0.40)",
    md: "0 6px 18px rgb(0 0 0 / 0.45)",
    lg: "0 24px 60px rgb(0 0 0 / 0.55)",
  },
} as const;

export const nativeShadows = {
  sm: {
    shadowColor: colors.ink[900],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: colors.ink[900],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.ink[900],
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.16,
    shadowRadius: 60,
    elevation: 12,
  },
} as const;

/** Durations in ms. base (300) = the link underline sweep. */
export const durations = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 800,
} as const;

/** Easing curves as cubic-bezier control points. */
export const easings = {
  standard: [0.2, 0, 0, 1],
  outExpo: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const easingCss = {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const;
