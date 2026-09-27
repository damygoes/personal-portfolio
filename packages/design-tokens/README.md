# @portfolio/design-tokens

Lagoon + Coral design tokens for damilolabada.com. The source of truth is
`damilolabada-redesign-handoff/design/styles/site.css`.

| File                | Exports                                                                |
| ------------------- | ---------------------------------------------------------------------- |
| `styles/tokens.css` | Tailwind v4 theme, light/dark variables, type/layout/outline utilities |
| `src/colors.ts`     | `colors` (raw ramps), `themes.light` / `themes.dark` (semantic hex)    |
| `src/typography.ts` | font families, weights, `typeScale` (px per mobile/tablet/desktop)     |
| `src/spacing.ts`    | `spacing`, `borderRadius`, `layout`, `containers`, `breakpoints`       |
| `src/effects.ts`    | `durations`, `easings`                                                 |

## Usage

```css
@import "tailwindcss";
@import "@portfolio/design-tokens/styles";
```

Load the fonts as CSS variables on `<html>`: `--font-bricolage`, `--font-inter`,
`--font-geist-mono` (next/font in the app, @fontsource in Storybook). Dark mode is
the `.dark` class on `<html>`.

## Utilities

- Colours: `bg-bg`, `text-fg`, `text-fg-soft`, `text-muted`, `text-primary`, `text-spark`,
  `bg-card`, `border-border`, `border-divider`, `bg-band`, `text-band-fg`, …
- Type: `type-display` (Bricolage 800 uppercase) and `font-display` (Bricolage), plus the
  sizes `t-hero`, `cs-title`, `t-xl`, `t-cta`, `t-next`, `t-ftr-mark`, `t-statement`,
  `t-md`, `t-sm`, `cs-h`, `ph-title`, `t-lede`, `t-post`, `t-body-lg`, `t-body`, `label`,
  `label-2xs`.
- Outlined type: `text-outline` (3px mobile / 4px stroke, paint-order), `text-outline-thin`,
  `text-ghost`. Fill and stroke come from `--outline-fill` / `--outline-line` and
  `--ghost-fill` / `--ghost-line`, set by `band` and the tones.
- Tones: `tone-card`, `tone-lagoon`, `tone-warm`, `tone-stone`, `tone-ink`, `cover-warm`.
- Layout: `wrap` (gutters 20/32/48, max 1440), `sec` (96/128/160), `g12`, `rule`.
- Links and cards: `sweep`, `sweep-soft`, `arr`, `big-link`, `card-link`, `lift`, `cover-inner`
  (zooms inside a hovered `group`).
- Animations: `animate-marquee`, `animate-spin-slow`, `animate-pulse`, `animate-scroll-line`.
