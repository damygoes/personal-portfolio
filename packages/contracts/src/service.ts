import type { Locale } from "./common";
import type { BlogIndexDTO, PostDTO } from "./blog";
import type { AboutPageDTO, HomeDTO, WorkPageDTO } from "./pages";
import type { CaseStudyDTO } from "./project";
import type { SiteSettingsDTO } from "./site";

/**
 * The only data API the web app uses. Implemented by `@portfolio/fixtures`
 * (static, Storybook/local dev) and `@portfolio/content` (Sanity). Both return
 * the same DTOs; `null` means not found.
 */
export interface ContentService {
  getSiteSettings(locale: Locale): Promise<SiteSettingsDTO>;
  getHome(locale: Locale): Promise<HomeDTO>;
  getWorkPage(locale: Locale): Promise<WorkPageDTO>;
  getCaseStudy(slug: string, locale: Locale): Promise<CaseStudyDTO | null>;
  getAbout(locale: Locale): Promise<AboutPageDTO>;
  getBlogIndex(
    locale: Locale,
    options?: { category?: string },
  ): Promise<BlogIndexDTO>;
  getPost(slug: string, locale: Locale): Promise<PostDTO | null>;
  /** Slugs for static generation. */
  getRoutes(): Promise<{ caseStudies: string[]; posts: string[] }>;
}
