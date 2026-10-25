import type { Locale } from "@portfolio/contracts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BlogPostPage } from "@portfolio/ui";
import { content } from "@/lib/content";
import { highlightCodeBlocks } from "@/lib/highlight";
import { pageChrome, resolveLocale } from "@/lib/page";
import { pageMetadata, SITE_URL } from "@/lib/seo";

type Props = PageProps<"/[locale]/blog/[slug]">;

export async function generateStaticParams() {
  const { posts } = await content.getRoutes();
  return posts.map((slug) => ({ slug }));
}

// Shared by metadata and page: one fetch per request.
const getPost = cache((slug: string, locale: Locale) =>
  content.getPost(slug, locale),
);

async function load({ params }: Props) {
  const { locale: value, slug } = await params;
  const locale = resolveLocale(value);
  const post = await getPost(slug, locale);
  if (!post) notFound();
  return { locale, slug, post };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, slug, post } = await load(props);
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt,
    availableLocales: post.availableLocales,
    contentLocale: post.contentLocale,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      ...(post.cover && {
        images: [{ url: post.cover.src, alt: post.cover.alt }],
      }),
    },
  });
}

export default async function BlogPost(props: Props) {
  const { locale, slug, post } = await load(props);
  const [chrome, body] = await Promise.all([
    pageChrome(locale, `/blog/${slug}`),
    highlightCodeBlocks(post.body),
  ]);
  return (
    <BlogPostPage
      {...chrome}
      post={{ ...post, body }}
      shareUrl={`${SITE_URL}/${locale}/blog/${slug}`}
    />
  );
}
