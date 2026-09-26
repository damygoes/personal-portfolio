import type { Neighbour } from "@portfolio/contracts";
import { Link, Text } from "@portfolio/ui";
import { cn } from "@portfolio/utils";

export interface PrevNextNavProps {
  previous?: Neighbour;
  next?: Neighbour;
  previousLabel?: string;
  nextLabel?: string;
}

function PrevNextNav({
  previous,
  next,
  previousLabel = "Previous",
  nextLabel = "Next",
}: PrevNextNavProps) {
  if (!previous && !next) return null;

  return (
    <nav
      data-slot="prev-next-nav"
      aria-label="Related pages"
      className="grid grid-cols-2 gap-4 border-t border-border pt-6"
    >
      <div className={cn(!previous && "invisible")}>
        {previous && (
          <Link
            href={previous.href}
            underline="none"
            className="group flex flex-col gap-1"
          >
            <Text size="xs" tone="muted" className="uppercase tracking-wide">
              {previousLabel}
            </Text>
            <Text size="base" weight="medium" className="group-hover:underline">
              {previous.title}
            </Text>
          </Link>
        )}
      </div>
      <div className={cn("text-right", !next && "invisible")}>
        {next && (
          <Link
            href={next.href}
            underline="none"
            className="group flex flex-col gap-1"
          >
            <Text size="xs" tone="muted" className="uppercase tracking-wide">
              {nextLabel}
            </Text>
            <Text size="base" weight="medium" className="group-hover:underline">
              {next.title}
            </Text>
          </Link>
        )}
      </div>
    </nav>
  );
}

export { PrevNextNav };
