import type { Metadata } from "next";
import { getDictionary } from "@portfolio/i18n";
import { AboutPage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const page = await content.getAbout(locale);
  return pageMetadata({
    locale,
    path: "/about",
    title: getDictionary(locale).nav.about,
    description: page.about.lede,
    availableLocales: page.availableLocales,
    contentLocale: page.contentLocale,
  });
}

export default async function About({ params }: PageProps<"/[locale]/about">) {
  const locale = resolveLocale((await params).locale);
  const [chrome, page] = await Promise.all([
    pageChrome(locale, "/about"),
    content.getAbout(locale),
  ]);
  return <AboutPage {...chrome} page={page} />;
}
