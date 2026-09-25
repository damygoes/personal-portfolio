import { HugeiconsIcon } from "@hugeicons/react";
import { forwardRef } from "react";
import { iconMap } from "./icon-map";
import type { IconName, IconPosition, IconSize } from "./types";

export type { IconName, IconPosition, IconSize };

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  "5xl": 56,
};

const strokeWidthMap: Record<IconSize, number> = {
  xs: 1.5,
  sm: 1.5,
  md: 1.5,
  lg: 1.5,
  xl: 1.5,
  "2xl": 1.5,
  "3xl": 2,
  "4xl": 2,
  "5xl": 2,
};

/**
 * HugeiconsIcon is not an <svg>; it renders an svg internally.
 * So its props are NOT React.SVGProps<SVGSVGElement>.
 */
type HugeiconsProps = React.ComponentProps<typeof HugeiconsIcon>;

export interface IconProps extends Omit<
  HugeiconsProps,
  // we control these via our own API:
  "icon" | "size" | "color" | "strokeWidth"
> {
  name: IconName;
  size?: IconSize;
  color?: string;
  strokeWidth?: number;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = "md",
      color = "currentColor",
      strokeWidth,
      className,
      ...rest
    },
    ref,
  ) => {
    const icon = iconMap[name];
    if (!icon) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `Icon "${name}" not found. Available icons: ${Object.keys(iconMap).join(", ")}`,
        );
      }
      return null;
    }

    const px = sizeMap[size];
    const sw = strokeWidth ?? strokeWidthMap[size];

    return (
      <HugeiconsIcon
        // HugeiconsIcon should forward refs to the underlying svg in recent versions.
        ref={ref}
        icon={icon}
        size={px}
        color={color}
        strokeWidth={sw}
        className={className}
        {...rest}
      />
    );
  },
);

Icon.displayName = "Icon";
