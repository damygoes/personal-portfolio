import type { CategoryFilterItem } from "@portfolio/contracts";
import { Chip } from "@portfolio/ui";

export interface CategoryFilterProps {
  items: CategoryFilterItem[];
  allHref: string;
  allLabel?: string;
}

function CategoryFilter({
  items,
  allHref,
  allLabel = "All",
}: CategoryFilterProps) {
  const isAllActive = items.every((item) => !item.active);

  return (
    <nav
      data-slot="category-filter"
      aria-label="Categories"
      className="flex flex-wrap gap-2"
    >
      <Chip label={allLabel} href={allHref} active={isAllActive} />
      {items.map((item) => (
        <Chip
          key={item.slug}
          label={`${item.title} (${item.postCount})`}
          href={item.href}
          active={item.active}
        />
      ))}
    </nav>
  );
}

export { CategoryFilter };
