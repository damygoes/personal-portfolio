import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef } from "react";

import { cn } from "@portfolio/utils";

const containerVariants = cva("mx-auto w-full px-gutter-sm sm:px-gutter-md", {
  variants: {
    size: {
      prose: "max-w-reading",
      default: "max-w-content",
      wide: "max-w-wide",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ContainerProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as = "div", size, className, ...props }, ref) => {
    return createElement(as, {
      ref,
      "data-slot": "container",
      className: cn(containerVariants({ size, className })),
      ...props,
    });
  },
);

Container.displayName = "Container";

export { Container, containerVariants };
