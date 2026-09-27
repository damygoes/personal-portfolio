import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { Crumbs, type CrumbsProps } from "../../molecules/crumbs/Crumbs";
import { FitText } from "../../atoms/fit-text/FitText";

export interface PageHeroProps {
  crumbs: CrumbsProps["items"];
  crumbsLabel: string;
  /** ["Selected", "work"] — the second line is outlined, then a spark dot. */
  title: readonly string[];
  /** Render the first title line in --primary ("ABOUT"). */
  primaryFirst?: boolean;
  titleId: string;
  lede: string;
  count?: string;
  /** `blog`: tighter padding and a wider lede column; the filter goes in `children`. */
  variant?: "page" | "blog";
  children?: ReactNode;
}

/** Inner-page hero: crumbs, t-hero title, lede + count, optional filters. */
function PageHero({
  crumbs,
  crumbsLabel,
  title,
  primaryFirst,
  titleId,
  lede,
  count,
  variant = "page",
  children,
}: PageHeroProps) {
  const [first, ...rest] = title;
  const blog = variant === "blog";
  return (
    <section
      data-slot="page-hero"
      aria-labelledby={titleId}
      className={cn(
        "wrap flex flex-col gap-8 pt-6 sm:gap-12 lg:pt-10",
        blog
          ? "pb-12 sm:pt-10 sm:pb-16"
          : "pb-14 sm:pt-8 sm:pb-[72px] lg:pb-24",
      )}
    >
      <Crumbs items={crumbs} label={crumbsLabel} />
      <FitText
        as="h1"
        min={52}
        id={titleId}
        className="type-display t-hero flex flex-col"
      >
        <span className={primaryFirst ? "num" : undefined}>{first}</span>
        <span>
          <OutlineText>{rest.join(" ")}</OutlineText>
          <Dot />
        </span>
      </FitText>
      <div className="g12 items-end gap-y-6">
        <p
          className={cn(
            "t-lede col-span-12 font-display",
            blog ? "sm:col-span-8 lg:col-span-6" : "lg:col-span-7",
          )}
        >
          {lede}
        </p>
        {count && (
          <p
            className={cn(
              "label col-span-12 text-left text-muted lg:col-span-3 lg:col-start-10 lg:text-right",
              blog && "sm:col-span-4 sm:text-right",
            )}
          >
            {count}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export { PageHero };
