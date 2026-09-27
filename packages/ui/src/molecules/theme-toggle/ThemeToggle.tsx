"use client";

import { cn } from "@portfolio/utils";
import { useTheme } from "../../lib/theme";

export interface ThemeToggleProps {
  labels: { dark: string; light: string };
  className?: string;
}

/**
 * Pill with a half-filled circle. The label names the theme it switches to;
 * below 1024 it collapses to a 44px circle.
 */
function ThemeToggle({ labels, className }: ThemeToggleProps) {
  const { isDark, toggle } = useTheme();
  const label = isDark ? labels.light : labels.dark;
  return (
    <button
      data-slot="theme-toggle"
      type="button"
      aria-pressed={isDark}
      aria-label={label}
      onClick={toggle}
      className={cn(
        "font-sans text-base uppercase tracking-[0.15em] flex size-11 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-divider bg-transparent p-0 text-fg transition-colors duration-150 hover:bg-accent lg:h-10 lg:w-auto lg:justify-start lg:px-4",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-3 shrink-0 rounded-full border-[1.5px] border-fg bg-[linear-gradient(90deg,var(--fg)_50%,transparent_50%)]"
      />
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}

export { ThemeToggle };
