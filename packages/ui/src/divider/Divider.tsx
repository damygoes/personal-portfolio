import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@portfolio/utils";

const dividerVariants = cva(
  "shrink-0 bg-divider data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
  {
    variants: {
      spacing: {
        none: "",
        sm: "my-2 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-2",
        md: "my-4 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-4",
        lg: "my-6 data-[orientation=vertical]:my-0 data-[orientation=vertical]:mx-6",
      },
    },
    defaultVariants: {
      spacing: "md",
    },
  },
);

export interface DividerProps
  extends SeparatorPrimitive.Props, VariantProps<typeof dividerVariants> {}

function Divider({ className, spacing, ...props }: DividerProps) {
  return (
    <SeparatorPrimitive
      data-slot="divider"
      className={cn(dividerVariants({ spacing, className }))}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
