import { LOCALES } from "@portfolio/contracts";
import { BLOG_ENABLED } from "@portfolio/ui";
import type { MetadataRoute } from "next";
import { content } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

/** Every page in every locale, each with its hreflang alternates. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { caseStudies, posts } = await content.getRoutes();
  const paths = [
    "",
    "/work",
    "/about",
    ...caseStudies.map((slug) => `/work/${slug}`),
    ...(BLOG_ENABLED ? ["/blog", ...posts.map((slug) => `/blog/${slug}`)] : []),
  ];
  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`]),
    );
    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages },
    }));
  });
}
