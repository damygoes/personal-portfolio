import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import {
  AboutPage,
  BlogPage,
  BlogPostPage,
  CaseStudyPage,
  HomePage,
  NotFoundPage,
  WorkPage,
} from "./Pages";

/**
 * Full pages built from the handoff content (packages/fixtures). Compare against
 * damilolabada-redesign-handoff/design/screenshots at 390 / 768 / 1440 (viewport
 * toolbar), light and dark (theme toolbar), EN and DE (locale toolbar).
 * Blog posts are the design's layout samples — Storybook only.
 */
const meta = {
  title: "Pages",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: withData((data) => (
    <HomePage {...data.chrome("")} home={data.home} />
  )),
};

export const HomeDark: Story = {
  ...Home,
  name: "Home (dark)",
  globals: { theme: "dark" },
};

export const HomeMenuOpen: Story = {
  name: "Home (menu open)",
  globals: { viewport: { value: "tablet" } },
  render: withData((data) => (
    <HomePage {...data.chrome("")} home={data.home} menuOpen />
  )),
};

export const Work: Story = {
  render: withData((data) => (
    <WorkPage {...data.chrome("/work")} work={data.work} />
  )),
};

export const CaseStudyPasse: Story = {
  name: "Case study — Passe.",
  render: withData((data) => (
    <CaseStudyPage {...data.chrome("/work/passe")} study={data.passe} />
  )),
};

export const CaseStudyElliesNote: Story = {
  name: "Case study — ElliesNote",
  render: withData((data) => (
    <CaseStudyPage {...data.chrome("/work/elliesnote")} study={data.ellies} />
  )),
};

export const About: Story = {
  render: withData((data) => (
    <AboutPage {...data.chrome("/about")} page={data.about} />
  )),
};

export const Blog: Story = {
  render: withData((data) => (
    <BlogPage {...data.chrome("/blog")} blog={data.blog} />
  )),
};

export const BlogFiltered: Story = {
  name: "Blog — filtered (cycling)",
  render: withData((data) => (
    <BlogPage {...data.chrome("/blog")} blog={data.blogCycling} />
  )),
};

export const BlogPost: Story = {
  render: withData((data) => (
    <BlogPostPage
      {...data.chrome(`/blog/${data.post.slug}`)}
      post={data.post}
      shareUrl={`https://www.damilolabada.com/${data.locale}/blog/${data.post.slug}`}
    />
  )),
};

const de = { globals: { locale: "de" } } as const;
export const HomeDE: Story = { ...Home, ...de, name: "Home (DE)" };
export const WorkDE: Story = { ...Work, ...de, name: "Work (DE)" };
export const CaseStudyPasseDE: Story = {
  ...CaseStudyPasse,
  ...de,
  name: "Case study — Passe. (DE)",
};
export const AboutDE: Story = { ...About, ...de, name: "About (DE)" };
export const BlogDE: Story = { ...Blog, ...de, name: "Blog (DE)" };
export const BlogPostDE: Story = { ...BlogPost, ...de, name: "Blog post (DE)" };

export const NotFound: Story = {
  name: "Not found",
  render: withData((data) => <NotFoundPage {...data.chrome("/missing")} />),
};
