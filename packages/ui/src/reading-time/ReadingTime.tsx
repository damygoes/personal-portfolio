import { cn } from "@portfolio/utils";

export interface ReadingTimeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {
  minutes: number;
  label: string;
}

function ReadingTime({
  minutes,
  label,
  className,
  ...props
}: ReadingTimeProps) {
  return (
    <span
      data-slot="reading-time"
      data-minutes={minutes}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {label}
    </span>
  );
}

export { ReadingTime };
