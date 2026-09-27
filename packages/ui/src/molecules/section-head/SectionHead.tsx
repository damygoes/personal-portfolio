import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { FitText } from "../../atoms/fit-text/FitText";

export interface SectionHeadProps {
  /** The label line (usually a SectionLabel). */
  label: ReactNode;
  /** Title content, rendered in an h2 with the t-xl display style. */
  title: ReactNode;
  titleId?: string;
  /** Right-hand slot: a link or a short line of text. Stacks below the title on mobile. */
  aside?: ReactNode;
  className?: string;
}

/** Section label + big display title + optional aside (`.sec-head`). */
function SectionHead({
  label,
  title,
  titleId,
  aside,
  className,
}: SectionHeadProps) {
  return (
    <div
      data-slot="section-head"
      className={cn("mb-10 flex flex-col gap-4 sm:mb-16 sm:gap-6", className)}
    >
      {label}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <FitText
          as="h2"
          min={36}
          id={titleId}
          className="type-display t-xl max-w-full"
        >
          {title}
        </FitText>
        {aside}
      </div>
    </div>
  );
}

export { SectionHead };
