import { cn } from "@portfolio/utils";

export interface SectionIndexProps extends React.ComponentPropsWithoutRef<"span"> {
  index: string;
}

function SectionIndex({ index, className, ...props }: SectionIndexProps) {
  return (
    <span
      data-slot="section-index"
      className={cn(
        "font-mono text-sm tracking-tight text-muted-foreground tabular-nums",
        className,
      )}
      {...props}
    >
      ({index})
    </span>
  );
}

export { SectionIndex };
