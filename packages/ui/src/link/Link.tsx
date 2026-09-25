import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@portfolio/utils";

const linkVariants = cva("text-primary transition-colors", {
  variants: {
    underline: {
      always: "underline underline-offset-4",
      hover: "no-underline hover:underline underline-offset-4",
      none: "no-underline",
    },
  },
  defaultVariants: {
    underline: "hover",
  },
});

export interface LinkState {
  external: boolean;
}

export interface LinkProps
  extends
    Omit<useRender.ComponentProps<"a", LinkState>, "href">,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
}

function Link({
  href,
  external = false,
  underline,
  render,
  className,
  ref,
  ...props
}: LinkProps) {
  return useRender({
    render: render ?? <a />,
    ref,
    state: { external },
    props: {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener" : undefined,
      "data-slot": "link",
      className: cn(linkVariants({ underline, className })),
      ...props,
    },
    defaultTagName: "a",
  });
}

export { Link, linkVariants };
