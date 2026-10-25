import type { Metadata } from "next";
import { getDictionary } from "@portfolio/i18n";
import { WorkPage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/work",
    title: dict.nav.work,
    description: dict.work.lede,
  });
}

export default async function Work({ params }: PageProps<"/[locale]/work">) {
  const locale = resolveLocale((await params).locale);
  const [chrome, work] = await Promise.all([
    pageChrome(locale, "/work"),
    content.getWorkPage(locale),
  ]);
  return <WorkPage {...chrome} work={work} />;
}
