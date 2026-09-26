import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@portfolio/utils";
import { Icon } from "../icon/Icon";
import type { IconName, IconPosition, IconSize } from "../icon/types";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-md font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-[0.98] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_[data-icon=inline-end]]:transition-transform hover:[&_[data-icon=inline-end]]:translate-x-0.5 motion-reduce:hover:[&_[data-icon=inline-end]]:translate-x-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-12 gap-1.5 px-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-8 gap-1 px-3 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1 px-6 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-1.5 px-12 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonIconProps = Omit<
  React.ComponentProps<typeof Icon>,
  "name" | "size" | "aria-hidden"
>;

export interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  icon?: IconName;
  iconPosition?: IconPosition;
  iconSize?: IconSize;
  iconProps?: ButtonIconProps;
  isLoading?: boolean;
}

const iconSizeMap: Record<NonNullable<ButtonProps["size"]>, IconSize> = {
  xs: "xs",
  sm: "xs",
  default: "sm",
  lg: "sm",
  icon: "sm",
  "icon-xs": "xs",
  "icon-sm": "sm",
  "icon-lg": "sm",
};

function Button({
  className,
  variant = "default",
  size = "default",

  icon,
  iconSize,
  iconPosition = "start",
  iconProps,

  isLoading = false,

  disabled,
  children,

  nativeButton,
  render,

  ...props
}: ButtonProps) {
  const resolvedSize = (size ?? "default") as NonNullable<ButtonProps["size"]>;

  const effectiveIconSize = iconSize ?? iconSizeMap[resolvedSize];

  const showIcon = isLoading || !!icon;

  // Icon-only layout applies only when there's actually an icon to render (via the
  // `icon` prop or loading spinner). An icon-sized button that instead receives its
  // glyph/text as `children` must still render them — otherwise the content vanishes.
  const isIconOnly = resolvedSize.startsWith("icon") && showIcon;

  const iconName: IconName | null = showIcon
    ? isLoading
      ? "loading"
      : (icon ?? null)
    : null;

  const renderIcon = (position: IconPosition) => {
    if (!iconName) {
      return null;
    }

    return (
      <span data-icon={position} className={cn(isLoading && "animate-spin")}>
        <Icon
          name={iconName}
          size={effectiveIconSize}
          aria-hidden="true"
          {...iconProps}
        />
      </span>
    );
  };

  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={resolvedSize}
      className={cn(
        buttonVariants({
          variant,
          size: resolvedSize,
          className,
        }),
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      render={render}
      nativeButton={nativeButton ?? !render}
      {...props}
    >
      {isIconOnly ? (
        renderIcon("start")
      ) : (
        <>
          {iconPosition === "start" && renderIcon("start")}

          {children}

          {iconPosition === "end" && !isLoading && renderIcon("end")}
        </>
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
