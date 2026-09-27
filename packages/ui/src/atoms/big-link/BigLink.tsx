import { cn } from "@portfolio/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { FitText } from "../fit-text/FitText";

const bigLinkVariants = cva(
  "big-link self-start font-display font-bold leading-none tracking-[-0.02em]",
  {
    variants: {
      size: {
        /** Home contact section: 28 / 44 / 64. */
        contact: "text-[28px] sm:text-[44px] lg:text-[64px]",
        /** Inner-page CTA band: 26 / 40 / 40, bottom-right on desktop. */
        cta: "text-[26px] sm:text-[40px] lg:self-end",
      },
    },
    defaultVariants: { size: "contact" },
  },
);

const arrowSize = {
  contact: "text-[22px] sm:text-[34px] lg:text-[48px]",
  cta: "text-[22px] sm:text-[32px]",
} as const;

export interface BigLinkProps extends VariantProps<typeof bigLinkVariants> {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Large display link (the email): turns primary with a 2px sweep underline on hover. */
function BigLink({ href, children, size, className }: BigLinkProps) {
  return (
    <FitText
      as="a"
      min={20}
      data-slot="big-link"
      href={href}
      className={cn(bigLinkVariants({ size }), "max-w-full", className)}
    >
      {children}{" "}
      <span
        aria-hidden="true"
        className={cn("text-spark", arrowSize[size ?? "contact"])}
      >
        ↗
      </span>
    </FitText>
  );
}

export { BigLink, bigLinkVariants };
