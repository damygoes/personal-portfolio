import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@portfolio/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        success: "bg-success-muted text-success",
        warning: "bg-warning-muted text-warning",
        muted: "bg-secondary text-muted-foreground",
      },
    },
    defaultVariants: {
      tone: "muted",
    },
  },
);

const dotToneMap: Record<
  NonNullable<VariantProps<typeof statusBadgeVariants>["tone"]>,
  string
> = {
  success: "bg-success",
  warning: "bg-warning",
  muted: "bg-muted-foreground",
};

// Known statuses map to a visual tone; anything else falls back to "muted"
// so the badge degrades gracefully rather than throwing on an unknown value.
const statusToneMap: Record<
  string,
  NonNullable<VariantProps<typeof statusBadgeVariants>["tone"]>
> = {
  live: "success",
  "in-development": "warning",
  archived: "muted",
};

export interface StatusBadgeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {
  status: string;
  label: string;
}

function StatusBadge({ status, label, className, ...props }: StatusBadgeProps) {
  const tone = statusToneMap[status] ?? "muted";

  return (
    <span
      data-slot="status-badge"
      data-status={status}
      className={cn(statusBadgeVariants({ tone }), className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rounded-full", dotToneMap[tone])}
      />
      {label}
    </span>
  );
}

export { StatusBadge, statusBadgeVariants };
