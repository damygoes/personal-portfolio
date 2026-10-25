import { DEFAULT_LOCALE, isLocale } from "@portfolio/contracts";
import { getDictionary } from "@portfolio/i18n";
import { NotFoundPage } from "@portfolio/ui";
import type { Metadata } from "next";
import { locale as rootLocale } from "next/root-params";
import { pageChrome } from "@/lib/page";

export async function generateMetadata(): Promise<Metadata> {
  const value = await rootLocale();
  return {
    title: getDictionary(isLocale(value) ? value : DEFAULT_LOCALE).notFound
      .metaTitle,
    robots: { index: false },
  };
}

/** 404 inside the site chrome, in the route's locale. */
export default async function NotFound() {
  const value = await rootLocale();
  const locale = isLocale(value) ? value : DEFAULT_LOCALE;
  return <NotFoundPage {...await pageChrome(locale, "")} />;
}
