import { cn } from "@portfolio/utils";
import { Anchor } from "../../lib/adapters";
import { Dot } from "../outline-text/OutlineText";

export interface BrandProps {
  href: string;
  initials: string;
  label: string;
  className?: string;
}

/** "DB." wordmark linking home. */
function Brand({ href, initials, label, className }: BrandProps) {
  return (
    <Anchor
      data-slot="brand"
      href={href}
      aria-label={label}
      className={cn(
        "type-display flex min-h-11 items-center text-[22px] leading-none sm:text-[26px]",
        className,
      )}
    >
      {initials}
      <Dot />
    </Anchor>
  );
}

/** Initials in a lagoon circle (post author, bio card). */
function Avatar({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      data-slot="avatar"
      data-vd="media"
      aria-hidden="true"
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-full bg-cover font-display text-lg font-extrabold text-cover-fg",
        className,
      )}
    >
      {initials}
    </span>
  );
}

export { Avatar, Brand };
