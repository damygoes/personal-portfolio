import { cn } from "@portfolio/utils";
import { Fragment } from "react";

/** "Based in Germany · Fullstack Developer · 4+ yrs experience" — stacks on mobile. */
function MetaList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <p
      data-slot="meta-list"
      className={cn(
        "label flex flex-col gap-0.5 text-muted sm:flex-row sm:gap-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
          )}
          <span>{item}</span>
        </Fragment>
      ))}
    </p>
  );
}

export { MetaList };
