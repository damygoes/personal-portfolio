import type { HugeiconsIcon } from "@hugeicons/react";
import { iconMap } from "./icon-map";

export type IconPosition = "start" | "end";

export type IconSvgObject = React.ComponentProps<typeof HugeiconsIcon>["icon"];

export type IconName = keyof typeof iconMap;

export type IconSize =
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
