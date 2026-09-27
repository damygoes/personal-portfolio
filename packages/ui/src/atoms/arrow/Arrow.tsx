import { cn } from "@portfolio/utils";

const glyphs = {
  "up-right": "↗",
  down: "↓",
  right: "→",
  up: "↑",
  "down-right": "↘",
} as const;

export type ArrowDirection = keyof typeof glyphs;

export interface ArrowProps {
  dir: ArrowDirection;
  className?: string;
}

/** The spark arrow glyph. Nudges on hover inside a `sweep` link (direction-aware). */
function Arrow({ dir, className }: ArrowProps) {
  return (
    <span
      data-slot="arrow"
      data-dir={dir}
      aria-hidden="true"
      className={cn("arr", className)}
    >
      {glyphs[dir]}
    </span>
  );
}

export { Arrow };
