import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { storyData } from "../../stories/story-data";
import {
  AboutPage,
  BlogPage,
  BlogPostPage,
  CaseStudyPage,
  HomePage,
  NotFoundPage,
  WorkPage,
} from "./Pages";

describe.each(["en", "de"] as const)("pages (%s)", (locale) => {
  it("render from the handoff content with one h1, #contact and no placeholders", async () => {
    const d = await storyData(locale);
    const pages = [
      <HomePage key="home" {...d.chrome("")} home={d.home} />,
      <WorkPage key="work" {...d.chrome("/work")} work={d.work} />,
      <CaseStudyPage
        key="passe"
        {...d.chrome("/work/passe")}
        study={d.passe}
      />,
      <CaseStudyPage
        key="ellies"
        {...d.chrome("/work/elliesnote")}
        study={d.ellies}
      />,
      <AboutPage key="about" {...d.chrome("/about")} page={d.about} />,
      <BlogPage key="blog" {...d.chrome("/blog")} blog={d.blog} />,
      <BlogPostPage key="post" {...d.chrome("/blog/x")} post={d.post} />,
    ];
    for (const page of pages) {
      const { container, unmount } = render(page);
      expect(container.querySelectorAll("h1")).toHaveLength(1);
      expect(container.querySelector("#contact")).not.toBeNull();
      expect(container.querySelector("#content")).not.toBeNull();
      expect(container.textContent).not.toMatch(
        /\[[A-Za-z][^\]]*\]|To write|Prompts/,
      );
      unmount();
    }
  });

  it("uses the dictionary for UI strings", async () => {
    const d = await storyData(locale);
    render(<WorkPage {...d.chrome("/work")} work={d.work} />);
    expect(screen.getByText(d.dict.work.lede)).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: d.dict.nav.letsTalk })[0],
    ).toHaveAttribute("href", "#contact");
  });

  it("renders the 404 in the site chrome with a link home", async () => {
    const d = await storyData(locale);
    const { container } = render(<NotFoundPage {...d.chrome("")} />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(
      screen.getByRole("link", { name: d.dict.notFound.home }),
    ).toHaveAttribute("href", `/${locale}`);
  });

  it("marks fallback-language content with its own lang", async () => {
    const d = await storyData(locale);
    const other = locale === "en" ? "de" : "en";
    const { container } = render(
      <BlogPostPage
        {...d.chrome("/blog/x")}
        post={{ ...d.post, contentLocale: other }}
      />,
    );
    expect(container.querySelector(`[lang="${other}"]`)).not.toBeNull();
  });
});
