import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { CategoryFilter } from "../../molecules/category-filter/CategoryFilter";
import { PageHero } from "./PageHero";

const meta = {
  title: "Organisms/PageHero",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Work: Story = {
  render: withData((d) => (
    <PageHero
      crumbsLabel={d.dict.nav.breadcrumb}
      crumbs={[
        { label: d.dict.nav.home, href: "/en" },
        { label: d.dict.nav.work },
      ]}
      title={d.dict.work.title}
      titleId="work-title"
      lede={d.dict.work.lede}
      count="05 projects · 2 case studies"
    />
  )),
};
export const BlogWithFilter: Story = {
  render: withData((d) => (
    <PageHero
      variant="blog"
      crumbsLabel={d.dict.nav.breadcrumb}
      crumbs={[
        { label: d.dict.nav.home, href: "/en" },
        { label: d.dict.nav.blog },
      ]}
      title={d.dict.blog.title}
      titleId="blog-title"
      lede={d.dict.blog.lede}
      count="07 posts · Since 2026"
    >
      <CategoryFilter
        label={d.dict.blog.filterLabel}
        options={[
          { title: d.dict.blog.all, count: d.blog.total, href: "/en/blog" },
        ]}
      />
    </PageHero>
  )),
};
