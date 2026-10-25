import "@/styles/globals.css";
import { LOCALES } from "@portfolio/contracts";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Bricolage_Grotesque, Geist_Mono, Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Providers } from "@/components/providers";
import { content, preview } from "@/lib/content";
import { resolveLocale } from "@/lib/page";
import { SITE_URL } from "@/lib/seo";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

// Only the display face is preloaded: it draws the LCP headline, and on slow
// connections the body and mono faces would compete with it for bandwidth.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/**
 * Geist Mono has no → ↗ ↘ glyphs. next/font's metric-adjusted fallback face
 * (Arial at size-adjust 135%) would draw them oversized, so the variable drops
 * it and they fall through to the token stack's ui-monospace, as in the design.
 * (`adjustFontFallback: false` would do this, but Turbopack ignores it.)
 */
const monoFamily = geistMono.style.fontFamily
  .split(",")
  .filter((family) => !family.includes("Fallback"))
  .join(",");

// Only registry locales exist; anything else under the first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const site = await content.getSiteSettings(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.name, template: `%s — ${site.name}` },
    description: site.tagline,
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const locale = resolveLocale((await params).locale);
  const { isEnabled: isDraft } = await draftMode();
  const { Overlay } = preview;
  return (
    <html
      lang={locale}
      className={`${bricolage.variable} ${inter.variable}`}
      style={{ "--font-geist-mono": monoFamily } as CSSProperties}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
        {isDraft && <Overlay />}
      </body>
    </html>
  );
}
