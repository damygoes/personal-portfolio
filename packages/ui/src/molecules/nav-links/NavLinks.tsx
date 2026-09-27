import { cn } from "@portfolio/utils";
import { Anchor } from "../../lib/adapters";
import type { NavKey } from "../../lib/types";

export interface NavLinksProps {
  items: { key: NavKey; label: string; href: string }[];
  active: NavKey | null;
  label: string;
  className?: string;
}

/** Desktop page links: primary + 1px underline on the active one. */
function NavLinks({ items, active, label, className }: NavLinksProps) {
  return (
    <nav
      data-slot="nav-links"
      aria-label={label}
      className={cn("hidden lg:block", className)}
    >
      <ul className="flex gap-10">
        {items.map((item) => {
          const isActive = item.key === active;
          return (
            <li key={item.key}>
              <Anchor
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "label group relative flex min-h-11 items-center gap-2",
                  isActive &&
                    "after:absolute after:inset-x-0 after:bottom-2 after:h-px after:bg-primary",
                )}
              >
                <span
                  className={cn(
                    "transition-colors duration-150 group-hover:text-primary",
                    isActive && "text-primary",
                  )}
                >
                  {item.label}
                </span>
              </Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { NavLinks };
