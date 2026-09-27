import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { CategoryFilter } from "./CategoryFilter";

const meta = {
  title: "Molecules/CategoryFilter",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (data: Parameters<Parameters<typeof withData>[0]>[0]) => [
  { title: data.dict.blog.all, count: data.blog.total, href: "/en/blog" },
  ...data.blog.categories.map((c) => ({
    slug: c.slug,
    title: c.title,
    count: c.count,
    href: `/en/blog?category=${c.slug}`,
  })),
];

export const All: Story = {
  render: withData((data) => (
    <CategoryFilter
      label={data.dict.blog.filterLabel}
      options={options(data)}
    />
  )),
};
export const Cycling: Story = {
  render: withData((data) => (
    <CategoryFilter
      label={data.dict.blog.filterLabel}
      options={options(data)}
      active="cycling"
    />
  )),
};
