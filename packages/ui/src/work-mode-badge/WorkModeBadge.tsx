import { cn } from "@portfolio/utils";
import { Icon } from "../icon/Icon";
import type { IconName } from "../icon/types";

export type WorkMode = "onsite" | "hybrid" | "remote";

const workModeIconMap: Record<WorkMode, IconName> = {
  onsite: "location",
  hybrid: "swap",
  remote: "globe",
};

export interface WorkModeBadgeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {
  mode: WorkMode;
  label: string;
}

function WorkModeBadge({
  mode,
  label,
  className,
  ...props
}: WorkModeBadgeProps) {
  return (
    <span
      data-slot="work-mode-badge"
      data-mode={mode}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <Icon name={workModeIconMap[mode]} size="xs" aria-hidden="true" />
      {label}
    </span>
  );
}

export { WorkModeBadge };
