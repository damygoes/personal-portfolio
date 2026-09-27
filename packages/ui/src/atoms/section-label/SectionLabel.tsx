import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";

export interface SectionLabelProps {
  /** "01" — rendered in --primary (or --band-primary on a band). */
  number?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

/** Mono uppercase label, optionally numbered: "01 Selected work". */
function SectionLabel({ number, children, className, id }: SectionLabelProps) {
  return (
    <p data-slot="section-label" id={id} className={cn("label", className)}>
      {number && <span className="num">{number}</span>} {children}
    </p>
  );
}

export { SectionLabel };
