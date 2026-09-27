import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { Anchor } from "../../lib/adapters";
import { Arrow, type ArrowDirection } from "../arrow/Arrow";

export interface SweepLinkProps {
  /** Without href it renders a span — e.g. "Read case study" inside a card whose title link covers it. */
  href?: string;
  children: ReactNode;
  arrow?: ArrowDirection;
  /** `is-soft`: --muted, --fg on hover. */
  soft?: boolean;
  className?: string;
  onClick?: () => void;
}

/** Mono uppercase link with the underline that sweeps in from the left (`.sweep`). */
function SweepLink({
  href,
  children,
  arrow,
  soft,
  className,
  onClick,
}: SweepLinkProps) {
  const classes = cn("sweep", soft && "sweep-soft", className);
  const content = (
    <>
      {children}
      {arrow && <Arrow dir={arrow} />}
    </>
  );
  if (!href) {
    return (
      <span data-slot="sweep-link" className={classes}>
        {content}
      </span>
    );
  }
  return (
    <Anchor
      data-slot="sweep-link"
      href={href}
      className={classes}
      onClick={onClick}
    >
      {content}
    </Anchor>
  );
}

export { SweepLink };
