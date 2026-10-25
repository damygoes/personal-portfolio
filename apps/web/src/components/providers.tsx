"use client";

import {
  ThemeControllerProvider,
  UiAdapterProvider,
  type ImageComponentProps,
  type LinkComponentProps,
} from "@portfolio/ui";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider, useTheme } from "next-themes";
import { useSyncExternalStore, type ReactNode } from "react";

function NextLink(props: LinkComponentProps) {
  return <Link {...props} />;
}

function NextImage({ priority, blurDataURL, ...props }: ImageComponentProps) {
  return (
    <Image
      {...props}
      preload={priority}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
    />
  );
}

const subscribe = () => () => {};

/**
 * next-themes owns persistence and the no-flash script; the ui's ThemeToggle
 * reads it through ThemeControllerProvider. The stored theme is unknown on
 * the server, so the toggle renders "light" until hydrated.
 */
function ThemeBridge({ children }: { children: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = hydrated && resolvedTheme === "dark";
  return (
    <ThemeControllerProvider
      value={{ isDark, toggle: () => setTheme(isDark ? "light" : "dark") }}
    >
      {children}
    </ThemeControllerProvider>
  );
}

/**
 * next-themes' no-flash script only needs to run from the SSR HTML. A locale
 * switch remounts this provider on the client, where React warns about
 * executable scripts, so the client copy is marked as an inert data block.
 */
const themeScriptProps =
  typeof window === "undefined" ? undefined : { type: "application/json" };

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      scriptProps={themeScriptProps}
    >
      <ThemeBridge>
        <UiAdapterProvider Link={NextLink} Image={NextImage}>
          {children}
        </UiAdapterProvider>
      </ThemeBridge>
    </ThemeProvider>
  );
}
