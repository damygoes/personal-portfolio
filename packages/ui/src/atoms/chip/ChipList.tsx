import { cn } from "@portfolio/utils";

export interface ChipListProps {
  items: string[];
  className?: string;
}

/** Tech / category chips (`.chips .chip`). */
function ChipList({ items, className }: ChipListProps) {
  if (!items.length) return null;
  return (
    <ul
      data-slot="chip-list"
      className={cn("label-2xs flex flex-wrap gap-1.5", className)}
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-secondary px-2.5 py-[5px] text-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export { ChipList };
