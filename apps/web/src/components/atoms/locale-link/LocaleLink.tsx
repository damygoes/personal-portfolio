import type { Locale } from "@portfolio/contracts";
import { Link } from "@portfolio/ui";
import { cn } from "@portfolio/utils";

export interface LocaleLinkProps {
  locale: Locale;
  href: string;
  label: string;
  active: boolean;
}

function LocaleLink({ href, label, active }: LocaleLinkProps) {
  return (
    <Link
      href={href}
      underline="none"
      data-slot="locale-link"
      aria-current={active ? "true" : undefined}
      className={cn(
        "text-sm font-medium uppercase",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

export { LocaleLink };
