# @repo/design-tokens

Lagoon + Coral design tokens for the damilolabada.com monorepo (web, blog, CMS, mobile).

| File                | Exports                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `src/colors.ts`     | `colors` (raw hex ramps 50–950 + status), `themes.light` / `themes.dark` (semantic, resolved hex)                       |
| `src/spacing.ts`    | `spacing`, `borderRadius`, `layout`, `containers`, `breakpoints` (px numbers)                                           |
| `src/typography.ts` | `fontFamilies`, `fontStacks`, `fontSizes`, `fontWeights`, `lineHeights`, `letterSpacings`, `displaySizes`, `textStyles` |
| `src/effects.ts`    | `shadows`, `nativeShadows`, `durations`, `easings`                                                                      |
| `src/tokens.css`    | Tailwind v4 `@theme` + `.dark` overrides + `text-stroke` / `link-sweep` utilities                                       |

## Web (Next.js + Tailwind v4)

```css
/* apps/web/app/globals.css */
@import "tailwindcss";
@import "@repo/design-tokens/tokens.css";
@source "../../../packages/ui"; /* if you have a shared UI package */
```

```tsx
// apps/web/app/layout.tsx
import { Bricolage_Grotesque, Inter, Geist_Mono } from 'next/font/google';
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const sans = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

<html className={`${display.variable} ${sans.variable} ${mono.variable}`}>  {/* add "dark" for dark mode */}
```

Put the font variable classes on `<html>`, not `<body>`, so `--font-*` resolves at `:root`.

## React Native / Expo

```ts
import {
  themes,
  spacing,
  borderRadius,
  fontSizes,
  toLineHeight,
  nativeShadows,
} from "@repo/design-tokens";
const t = themes.light;
const styles = {
  card: {
    backgroundColor: t.card,
    padding: spacing[6],
    borderRadius: borderRadius.lg,
    ...nativeShadows.md,
  },
};
```

On native, each font weight is its own family name (`Inter_400Regular` and so on with `@expo-google-fonts/*`). Map `fontWeights` to those names in the app.
