import { cn, pad2 } from "@portfolio/utils";
import { Anchor } from "../../lib/adapters";

export interface CategoryFilterProps {
  options: { slug?: string; title: string; count: number; href: string }[];
  /** undefined = All. */
  active?: string;
  label: string;
  className?: string;
}

/**
 * Topic filter. Each option is a link to `?category=…`, so it works without JS
 * and the filtered view is shareable. The current option is marked with aria-current.
 */
function CategoryFilter({
  options,
  active,
  label,
  className,
}: CategoryFilterProps) {
  return (
    <div
      data-slot="category-filter"
      role="group"
      aria-label={label}
      className={cn("flex flex-wrap gap-2 border-t border-fg pt-6", className)}
    >
      {options.map((option) => {
        const isActive = option.slug === active;
        return (
          <Anchor
            key={option.slug ?? "all"}
            href={option.href}
            scroll={false}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "font-sans text-base uppercase tracking-[0.15em] inline-flex h-11 items-center gap-2.5 rounded-full border px-3.5 transition-colors duration-150 sm:px-[18px]",
              isActive
                ? "border-fg bg-fg text-bg"
                : "border-divider bg-transparent text-fg hover:bg-accent",
            )}
          >
            {option.title}{" "}
            {/* design: .6 — .65 keeps the count at WCAG AA (4.5:1) on the light ground */}
            <span className="opacity-65">{pad2(option.count)}</span>
          </Anchor>
        );
      })}
    </div>
  );
}

export { CategoryFilter };
