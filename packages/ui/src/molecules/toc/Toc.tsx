"use client";

import type { TocEntry } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { useEffect, useState, type MouseEvent } from "react";

export interface TocProps {
  entries: TocEntry[];
  label: string;
  className?: string;
}

/** "On this page": follows the h2 in view; smooth-scrolls unless reduced motion is set. */
function Toc({ entries, label, className }: TocProps) {
  const [active, setActive] = useState(entries[0]?.id);

  useEffect(() => {
    const headings = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -60% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [entries]);

  const jump = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  if (!entries.length) return null;
  return (
    <aside
      data-slot="toc"
      aria-label={label}
      className={cn("flex flex-col gap-4", className)}
    >
      <p className="label-2xs text-muted">{label}</p>
      <ol className="flex flex-col border-t border-divider">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              onClick={(e) => jump(e, entry.id)}
              aria-current={entry.id === active ? "location" : undefined}
              className={cn(
                "flex min-h-11 items-center gap-3 border-b border-divider text-sm transition-colors duration-150 hover:text-primary",
                entry.id === active && "text-primary",
              )}
            >
              <span className="label-2xs num">{entry.number}</span>
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export { Toc };
