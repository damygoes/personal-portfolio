import type { Meta, StoryObj } from "@storybook/react-vite";
import { PostMeta } from "./PostMeta";

const meta: Meta<typeof PostMeta> = {
  title: "Molecules/PostMeta",
  component: PostMeta,
  tags: ["autodocs"],
  args: {
    locale: "en",
    readingTimeLabel: "6 min read",
    publishedAt: "2026-01-15T09:00:00.000Z",
    readingTimeMinutes: 6,
    categories: [
      {
        slug: "engineering",
        title: "Engineering",
        href: "/en/blog/category/engineering",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof PostMeta>;

export const Default: Story = {};

export const Updated: Story = {
  args: { updatedAt: "2026-02-01T09:00:00.000Z" },
};
