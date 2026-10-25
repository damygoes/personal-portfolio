import {
  DEFAULT_LOCALE,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "@portfolio/contracts";
import type { Metadata } from "next";

/** Canonical origin; Vercel preview deployments fall back to their own URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

interface PageSeo {
  locale: Locale;
  /** Locale-less path: "" (home), "/work", "/blog/my-post". */
  path: string;
  title?: string;
  description?: string;
  /** Locales that have this content (translated documents); default all. */
  availableLocales?: readonly Locale[];
  /** The language actually served; differs from `locale` on fallback. */
  contentLocale?: Locale;
  openGraph?: Metadata["openGraph"];
}

/**
 * Title, description, canonical and hreflang for one page. hreflang lists only
 * the locales that have the content, plus `x-default` → the default locale.
 * A page served in fallback language points its canonical at that language.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  availableLocales = LOCALES,
  contentLocale = locale,
  openGraph,
}: PageSeo): Metadata {
  const languages: Record<string, string> = Object.fromEntries(
    availableLocales.map((l) => [l, `/${l}${path}`]),
  );
  languages["x-default"] = `/${DEFAULT_LOCALE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: `/${contentLocale}${path}`, languages },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      locale: LOCALE_META[locale].intl.replace("-", "_"),
      siteName: "Damilola Bada",
      type: "website",
      // Brand card unless the page passes its cover image.
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title ?? "")}`,
          width: 1200,
          height: 630,
          alt: title ?? "Damilola Bada",
        },
      ],
      ...openGraph,
    },
  };
}
