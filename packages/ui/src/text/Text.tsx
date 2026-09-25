import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef } from "react";

import { cn } from "@portfolio/utils";

const textVariants = cva("", {
  variants: {
    size: {
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "default",
    weight: "normal",
  },
});

type TextElement = "p" | "span" | "div" | "label" | "strong" | "em" | "small";

export interface TextProps
  extends
    React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textVariants> {
  as?: TextElement;
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", className, size, tone, weight, ...props }, ref) => {
    return createElement(as, {
      ref,
      "data-slot": "text",
      className: cn(textVariants({ size, tone, weight, className })),
      ...props,
    });
  },
);

Text.displayName = "Text";

export { Text, textVariants };
