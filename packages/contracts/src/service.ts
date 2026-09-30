import type { Locale } from "./common";
import type { BlogIndexDTO, PostDTO } from "./blog";
import type { AboutPageDTO, HomeDTO, WorkPageDTO } from "./pages";
import type { CaseStudyDTO } from "./project";
import type { SiteSettingsDTO } from "./site";

/**
 * The only data API the web app uses. Implemented by `@portfolio/fixtures`
 * (static, Storybook/local dev) and `@portfolio/sanity` (Sanity). Both return
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

/** A web-standard route handler (`Request` in, `Response` out). */
export type RouteHandler = (request: Request) => Response | Promise<Response>;

/**
 * Preview / publishing hooks a CMS adapter provides to the web app, so no CMS
 * SDK is imported outside the app's content module. `TOverlay` is the
 * framework's component type (a React component in apps/web).
 */
export interface PreviewAdapter<TOverlay = unknown> {
  /** Turns draft mode on after validating the CMS's preview secret. */
  enable: RouteHandler;
  disable: RouteHandler;
  /** Handles the CMS publish webhook and revalidates the affected cache tags. */
  revalidate: RouteHandler;
  /** Click-to-edit overlay, rendered only in draft mode. */
  Overlay: TOverlay;
}
