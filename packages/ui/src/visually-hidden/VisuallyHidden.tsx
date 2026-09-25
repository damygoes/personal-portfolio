import { forwardRef } from "react";

import { cn } from "@portfolio/utils";

export interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-slot="visually-hidden"
        className={cn("sr-only", className)}
        {...props}
      />
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
