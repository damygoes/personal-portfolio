import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// The design-token type utilities set font-size, so a later one must replace an earlier one.
// Arbitrary sizes (text-[64px]) don't set line-height in Tailwind v4, so leading-* is kept.
const twMerge = extendTailwindMerge({
  override: {
    conflictingClassGroups: { "font-size": [] },
  },
  extend: {
    classGroups: {
      "font-size": [
        {
          t: [
            "hero",
            "xl",
            "cta",
            "next",
            "ftr-mark",
            "statement",
            "md",
            "sm",
            "lede",
            "post",
            "body-lg",
            "body",
          ],
        },
        "cs-title",
        "cs-h",
        "ph-title",
        "label",
        "label-2xs",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
