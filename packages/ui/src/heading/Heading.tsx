import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef } from "react";

import { cn } from "@portfolio/utils";

const headingVariants = cva("font-display", {
  variants: {
    size: {
      // Fixed type-scale tokens (--text-lg…--text-4xl) don't carry a paired
      // --font-weight, unlike the fluid --text-display-* tokens below, so
      // these need an explicit weight or they'd inherit Preflight's
      // `font-weight: inherit` and render as normal-weight text.
      sm: "text-lg font-bold",
      md: "text-xl font-bold",
      lg: "text-2xl font-bold",
      xl: "text-3xl font-bold",
      "2xl": "text-4xl font-bold",
      "display-sm": "text-display-sm",
      "display-md": "text-display-md",
      "display-lg": "text-display-lg",
      "display-hero": "text-display-hero",
    },
  },
});

type HeadingLevel = 1 | 2 | 3 | 4;

const levelToTag: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const levelToDefaultSize: Record<
  HeadingLevel,
  NonNullable<VariantProps<typeof headingVariants>["size"]>
> = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
};

export interface HeadingProps
  extends
    React.ComponentPropsWithoutRef<"h1">,
    VariantProps<typeof headingVariants> {
  level: HeadingLevel;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, size, className, ...props }, ref) => {
    return createElement(levelToTag[level], {
      ref,
      "data-slot": "heading",
      "data-level": level,
      className: cn(
        headingVariants({ size: size ?? levelToDefaultSize[level], className }),
      ),
      ...props,
    });
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
