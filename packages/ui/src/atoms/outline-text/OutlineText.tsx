import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";

export interface OutlineTextProps {
  children: ReactNode;
  /** `thin` = 3px at every size (marquee, footer wordmark); default = 3px mobile / 4px. */
  weight?: "default" | "thin";
  className?: string;
}

/**
 * Outlined display type, painted with the paint-order technique so the variable
 * font's overlapping contours don't show. Colours follow the context (`band`, …).
 */
function OutlineText({
  children,
  weight = "default",
  className,
}: OutlineTextProps) {
  return (
    <span
      data-slot="outline-text"
      className={cn(
        weight === "thin" ? "text-outline-thin" : "text-outline",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The spark full stop that ends titles. */
function Dot({
  children = ".",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span data-slot="dot" className={cn("dot", className)}>
      {children}
    </span>
  );
}

export { Dot, OutlineText };
