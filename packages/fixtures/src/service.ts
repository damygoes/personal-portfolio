import type {
  BlogIndex,
  ContentService,
  Locale,
  Post,
  Project,
  Site,
} from "@portfolio/contracts";
import { getHomepage } from "./data/homepage";
import { getLegalPage, getLegalPageSlugs } from "./data/legal-pages";
import { getCategories, getPosts, toPostCard } from "./data/posts";
import { getProjects, toProjectCard } from "./data/projects";
import { getSite } from "./data/site";

const PAGE_SIZE = 6;

export class FixtureContentService implements ContentService {
  async getSite(locale: Locale): Promise<Site> {
    return getSite(locale);
  }

  async getHomepage(locale: Locale) {
    return getHomepage(locale);
  }

  async getBlogIndex(
    locale: Locale,
    opts?: { category?: string; page?: number },
  ): Promise<BlogIndex | null> {
    const allPosts = getPosts(locale);
    const categories = getCategories(locale);

    const activeCategory = opts?.category
      ? categories.find((category) => category.slug === opts.category)
      : undefined;
    if (opts?.category && !activeCategory) return null;

    const filteredPosts = activeCategory
      ? allPosts.filter((post) =>
          post.categories.some((c) => c.slug === activeCategory.slug),
        )
      : allPosts;

    const page = opts?.page ?? 1;
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
    if (page > totalPages) return null;

    const start = (page - 1) * PAGE_SIZE;
    const pagePosts = filteredPosts.slice(start, start + PAGE_SIZE);

    return {
      heading: activeCategory ? activeCategory.title : "Blog",
      activeCategory,
      categories: categories.map((category) => ({
        ...category,
        postCount: allPosts.filter((post) =>
          post.categories.some((c) => c.slug === category.slug),
        ).length,
        active: category.slug === activeCategory?.slug,
      })),
      posts: pagePosts.map(toPostCard),
      pagination: {
        page,
        totalPages,
        previousHref: page > 1 ? `?page=${page - 1}` : undefined,
        nextHref: page < totalPages ? `?page=${page + 1}` : undefined,
      },
      seo: {
        title: activeCategory ? activeCategory.title : "Blog",
        description:
          activeCategory?.description ??
          "Posts about engineering and photography.",
        canonicalUrl: `https://damilolabada.com/${locale}/blog`,
        noIndex: false,
        alternates: [
          { locale: "en", href: `https://damilolabada.com/en/blog` },
          { locale: "de", href: `https://damilolabada.com/de/blog` },
        ],
      },
    };
  }

  async getPost(locale: Locale, slug: string): Promise<Post | null> {
    const post = getPosts(locale).find((p) => p.slug === slug);
    if (!post) return null;

    const related = getPosts(locale)
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
      .map(toPostCard);

    return { ...post, related };
  }

  async getProject(locale: Locale, slug: string): Promise<Project | null> {
    return getProjects(locale).find((p) => p.slug === slug) ?? null;
  }

  async getLegalPage(locale: Locale, slug: string) {
    return getLegalPage(locale, slug);
  }

  async getRoutes() {
    const locales: Locale[] = ["en", "de"];

    return {
      posts: locales.flatMap((locale) =>
        getPosts(locale).map((post) => ({ locale, slug: post.slug })),
      ),
      projects: locales.flatMap((locale) =>
        getProjects(locale).map((project) => ({ locale, slug: project.slug })),
      ),
      categories: locales.flatMap((locale) =>
        getCategories(locale).map((category) => ({
          locale,
          slug: category.slug,
        })),
      ),
      legalPages: locales.flatMap((locale) =>
        getLegalPageSlugs(locale).map((slug) => ({ locale, slug })),
      ),
    };
  }
}

export { toProjectCard, toPostCard };
