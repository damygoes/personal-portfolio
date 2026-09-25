import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef } from "react";

import { cn } from "@portfolio/utils";
import { resolveGapClassName, type Gap } from "../lib/gap";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
  },
  defaultVariants: {
    direction: "column",
    align: "stretch",
  },
});

export interface StackProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof stackVariants> {
  gap?: Gap;
  as?: React.ElementType;
}

const Stack = forwardRef<HTMLElement, StackProps>(
  ({ as = "div", direction, align, gap = 4, className, ...props }, ref) => {
    return createElement(as, {
      ref,
      "data-slot": "stack",
      className: cn(
        stackVariants({ direction, align, className }),
        resolveGapClassName(gap),
      ),
      ...props,
    });
  },
);

Stack.displayName = "Stack";

export { Stack, stackVariants };
