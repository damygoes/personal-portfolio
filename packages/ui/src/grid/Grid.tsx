import { forwardRef } from "react";

import { cn } from "@portfolio/utils";
import { resolveGapClassName, type Gap } from "../lib/gap";
import { resolveColsClassNames, type ResponsiveCols } from "./grid-cols-map";

export interface GridProps extends React.ComponentPropsWithoutRef<"div"> {
  cols?: ResponsiveCols;
  gap?: Gap;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols, gap = 4, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="grid"
        className={cn(
          "grid",
          resolveGapClassName(gap),
          resolveColsClassNames(cols),
          className,
        )}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
