"use client";

import type { NavItem } from "@portfolio/contracts";
import { Link, SectionIndex } from "@portfolio/ui";
import { cn } from "@portfolio/utils";
import { useEffect, useState } from "react";

export type NavListItem = NavItem & { label: string };

export interface NavListProps {
  items: NavListItem[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

function useActiveSection(items: NavListItem[]) {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    const ids = items
      .map((item) =>
        item.href.includes("#") ? item.href.split("#")[1] : undefined,
      )
      .filter((id): id is string => Boolean(id));

    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  return active;
}

function NavList({
  items,
  orientation = "horizontal",
  onNavigate,
}: NavListProps) {
  const active = useActiveSection(items);

  return (
    <ul
      data-slot="nav-list"
      className={cn(
        "flex gap-6",
        orientation === "vertical" && "flex-col gap-4",
      )}
    >
      {items.map((item) => {
        const isActive =
          item.href.includes("#") && item.href.endsWith(`#${active}`);

        return (
          <li key={item.key}>
            <Link
              href={item.href}
              underline="none"
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.index && <SectionIndex index={item.index} />}
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { NavList };
