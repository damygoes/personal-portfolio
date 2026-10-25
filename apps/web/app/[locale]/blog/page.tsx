import type { Metadata } from "next";
import { getDictionary } from "@portfolio/i18n";
import { BlogPage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata } from "@/lib/seo";

type Props = PageProps<"/[locale]/blog">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  // Filtered views share the index's canonical.
  return pageMetadata({
    locale,
    path: "/blog",
    title: dict.nav.blog,
    description: dict.blog.lede,
  });
}

/** `?category=` filters on the server, so the filter links work without JS. */
export default async function Blog({ params, searchParams }: Props) {
  const locale = resolveLocale((await params).locale);
  const { category } = await searchParams;
  const [chrome, blog] = await Promise.all([
    pageChrome(locale, "/blog"),
    content.getBlogIndex(locale, {
      category: typeof category === "string" ? category : undefined,
    }),
  ]);
  return <BlogPage {...chrome} blog={blog} />;
}
