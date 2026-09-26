import type { Locale } from "./common";
import type { Site } from "./site";
import type { Homepage } from "./home";
import type { BlogIndex, Post } from "./blog";
import type { Project } from "./project";
import type { LegalPage } from "./page";

/**
 * The only thing the frontend calls. Two implementations:
 *  - @portfolio/content  → Sanity (production, preview)
 *  - @portfolio/fixtures → static mocks (FE development, Storybook, tests)
 * Returning `null` means "not found" → notFound() in Next.js.
 *
 * A service instance is created per request with `preview` resolved from Next's draftMode().
 * In preview, string fields may contain invisible stega characters (for Visual Editing) and
 * objects carry `editTarget`. Treat all display strings as opaque: render them, never compare them.
 * Invalid draft content throws `ContentValidationError` (from @portfolio/content) instead of rendering.
 */
export interface ContentService {
  getSite(locale: Locale): Promise<Site>;
  getHomepage(locale: Locale): Promise<Homepage>;

  getBlogIndex(
    locale: Locale,
    opts?: { category?: string; page?: number },
  ): Promise<BlogIndex | null>;
  getPost(locale: Locale, slug: string): Promise<Post | null>;
  getProject(locale: Locale, slug: string): Promise<Project | null>;
  getLegalPage(locale: Locale, slug: string): Promise<LegalPage | null>;

  /** For generateStaticParams + sitemap. */
  getRoutes(): Promise<{
    posts: { locale: Locale; slug: string }[];
    projects: { locale: Locale; slug: string }[];
    categories: { locale: Locale; slug: string }[];
    legalPages: { locale: Locale; slug: string }[];
  }>;
}
