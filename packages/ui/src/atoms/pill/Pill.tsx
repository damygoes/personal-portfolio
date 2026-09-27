import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";

/** Outlined primary pill with a dot: "Live on the App Store", "Latest". */
function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      data-slot="pill"
      className={cn(
        "label-2xs inline-flex items-center gap-2 rounded-full border border-primary px-[11px] py-[5px] text-primary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-current"
      />
      {children}
    </span>
  );
}

/** Filled primary badge with a pulsing dot — the current job. */
function NowBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      data-slot="now-badge"
      className={cn(
        "label-2xs inline-flex items-center gap-2 rounded-full bg-primary px-2.5 py-1 text-primary-fg",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 animate-pulse rounded-full bg-primary-fg"
      />
      {children}
    </span>
  );
}

/** Pulsing status dot next to the local time. */
function LiveDot({ className }: { className?: string }) {
  return (
    <span
      data-slot="live-dot"
      aria-hidden="true"
      className={cn(
        "size-2 shrink-0 animate-pulse rounded-full bg-primary",
        className,
      )}
    />
  );
}

export { LiveDot, NowBadge, Pill };
