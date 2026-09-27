"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type ThemeController = { isDark: boolean; toggle: () => void };

const ThemeContext = createContext<ThemeController | null>(null);

/** Lets the app drive the toggle (e.g. next-themes for persistence and no flash). */
export function ThemeControllerProvider({
  value,
  children,
}: {
  value: ThemeController;
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const readDark = () => document.documentElement.classList.contains("dark");

/** Without a provider, the `.dark` class on <html> is the state. */
export function useTheme(): ThemeController {
  const provided = useContext(ThemeContext);
  const isDark = useSyncExternalStore(subscribe, readDark, () => false);
  if (provided) return provided;
  return {
    isDark,
    toggle: () => document.documentElement.classList.toggle("dark"),
  };
}
