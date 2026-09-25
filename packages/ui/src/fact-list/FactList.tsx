import { cn } from "@portfolio/utils";

export interface FactListProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "children"
> {
  items: string[];
  separator?: React.ReactNode;
}

function FactList({
  items,
  separator = "·",
  className,
  ...props
}: FactListProps) {
  return (
    <ul
      data-slot="fact-list"
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-x-2">
          {index > 0 && <span aria-hidden="true">{separator}</span>}
          {item}
        </li>
      ))}
    </ul>
  );
}

export { FactList };
