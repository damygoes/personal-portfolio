import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@portfolio/utils";
import { Link } from "../link/Link";

const chipVariants = cva(
  "inline-flex items-center rounded-full border border-transparent font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
      },
      active: {
        true: "bg-primary text-primary-foreground",
        false: "bg-secondary text-secondary-foreground",
      },
    },
    compoundVariants: [
      {
        active: false,
        class: "hover:bg-muted hover:text-foreground",
      },
    ],
    defaultVariants: {
      size: "sm",
      active: false,
    },
  },
);

export interface ChipProps extends VariantProps<typeof chipVariants> {
  label: string;
  href?: string;
  className?: string;
}

function Chip({ label, href, active, size, className }: ChipProps) {
  const chipClassName = cn(chipVariants({ size, active }), className);

  if (href) {
    return (
      <Link
        href={href}
        underline="none"
        data-slot="chip"
        aria-current={active ? "true" : undefined}
        className={chipClassName}
      >
        {label}
      </Link>
    );
  }

  return (
    <span data-slot="chip" className={chipClassName}>
      {label}
    </span>
  );
}

export { Chip, chipVariants };
