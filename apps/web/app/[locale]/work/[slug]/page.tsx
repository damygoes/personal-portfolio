import type { Locale } from "@portfolio/contracts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CaseStudyPage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";

type Props = PageProps<"/[locale]/work/[slug]">;

/** Only projects with a case study have a page; others 404. */
export async function generateStaticParams() {
  const { caseStudies } = await content.getRoutes();
  return caseStudies.map((slug) => ({ slug }));
}

// Shared by metadata and page: one fetch per request.
const getStudy = cache((slug: string, locale: Locale) =>
  content.getCaseStudy(slug, locale),
);

async function load({ params }: Props) {
  const { locale: value, slug } = await params;
  const locale = resolveLocale(value);
  const study = await getStudy(slug, locale);
  if (!study) notFound();
  return { locale, slug, study };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, slug, study } = await load(props);
  const cover = study.project.cover;
  return pageMetadata({
    locale,
    path: `/work/${slug}`,
    title: study.project.title,
    description: study.lede,
    availableLocales: study.availableLocales,
    contentLocale: study.contentLocale,
    openGraph: cover ? { images: [{ url: cover.src, alt: cover.alt }] } : {},
  });
}

export default async function CaseStudy(props: Props) {
  const { locale, slug, study } = await load(props);
  const chrome = await pageChrome(locale, `/work/${slug}`);
  return <CaseStudyPage {...chrome} study={study} />;
}
