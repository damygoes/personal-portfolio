import { cn } from "@portfolio/utils";

export interface ScrollHintProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {
  label?: string;
}

function ScrollHint({
  label = "Scroll",
  className,
  ...props
}: ScrollHintProps) {
  return (
    <span
      data-slot="scroll-hint"
      className={cn(
        "text-xs tracking-widest text-muted-foreground uppercase",
        className,
      )}
      {...props}
    >
      ({label})
    </span>
  );
}

export { ScrollHint };
