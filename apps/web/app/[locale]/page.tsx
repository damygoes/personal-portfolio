import type { Metadata } from "next";
import { HomePage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const site = await content.getSiteSettings(locale);
  return {
    ...pageMetadata({ locale, path: "", description: site.tagline }),
    // Home is the brand page: "Damilola Bada — <role>", not the "%s — …" template.
    title: { absolute: `${site.name} — ${site.currentRole.title}` },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const locale = resolveLocale((await params).locale);
  const [chrome, home] = await Promise.all([
    pageChrome(locale, ""),
    content.getHome(locale),
  ]);
  return <HomePage {...chrome} home={home} />;
}
