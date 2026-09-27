import type { Locale } from "@portfolio/contracts";
import type { ReactElement } from "react";
import { FixtureContentService } from "@portfolio/fixtures";
import { getDictionary } from "@portfolio/i18n";
import type { ChromeProps } from "../lib/types";

const service = new FixtureContentService();

/** Every DTO a story needs, from the handoff content (fixtures) for one locale. */
export async function storyData(locale: Locale = "en") {
  const [site, home, work, about, blog, blogCycling, post, passe, ellies] =
    await Promise.all([
      service.getSiteSettings(locale),
      service.getHome(locale),
      service.getWorkPage(locale),
      service.getAbout(locale),
      service.getBlogIndex(locale),
      service.getBlogIndex(locale, { category: "cycling" }),
      service.getPost("code-review-team-of-three", locale),
      service.getCaseStudy("passe", locale),
      service.getCaseStudy("elliesnote", locale),
    ]);
  if (!post || !passe || !ellies) throw new Error("Fixture content is missing");
  const dict = getDictionary(locale);
  const chrome = (path: string): ChromeProps & { year: number } => ({
    site,
    dict,
    locale,
    alternates: { en: `/en${path}`, de: `/de${path}` },
    year: 2026,
  });
  return {
    site,
    dict,
    locale,
    chrome,
    home,
    work,
    about,
    blog,
    blogCycling,
    post,
    passe,
    ellies,
  };
}

export type StoryData = Awaited<ReturnType<typeof storyData>>;

/** Storybook loader: reads the locale toolbar. */
export const loadStoryData = async ({
  globals,
}: {
  globals: { locale?: string };
}) => ({
  data: await storyData(globals.locale === "de" ? "de" : "en"),
});

/** Story render that receives the loaded fixture data. */
export const withData =
  (render: (data: StoryData) => ReactElement) =>
  (_args: unknown, context: { loaded: Record<string, unknown> }) =>
    render(context.loaded.data as StoryData);
