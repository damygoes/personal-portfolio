import { cn } from "@portfolio/utils";
import { Fragment } from "react";
import { Anchor } from "../../lib/adapters";

export interface CrumbsProps {
  items: { label: string; href?: string }[];
  label: string;
  className?: string;
}

/** Breadcrumb: "Home / Work", "← All work / Case study 01". The last item is plain text. */
function Crumbs({ items, label, className }: CrumbsProps) {
  return (
    <nav
      data-slot="crumbs"
      aria-label={label}
      className={cn(
        "label flex flex-wrap items-center gap-3 text-muted",
        className,
      )}
    >
      {items.map((item, i) => (
        <Fragment key={`${item.label}-${i}`}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Anchor
              href={item.href}
              className="flex min-h-11 items-center transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </Anchor>
          ) : (
            <span aria-current={i === items.length - 1 ? "page" : undefined}>
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export { Crumbs };
