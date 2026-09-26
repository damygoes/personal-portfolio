import type { Meta, StoryObj } from "@storybook/react-vite";
import { PostCard } from "./PostCard";

const meta: Meta<typeof PostCard> = {
  title: "Molecules/PostCard",
  component: PostCard,
  tags: ["autodocs"],
  args: {
    locale: "en",
    readingTimeLabel: "6 min read",
    post: {
      id: "post-1",
      slug: "organizing-a-frontend-monorepo",
      href: "/en/blog/organizing-a-frontend-monorepo",
      title: "Organizing a frontend monorepo",
      excerpt: "How I split packages and apps in this portfolio project.",
      cover: {
        src: "https://picsum.photos/seed/monorepo/800/600",
        width: 800,
        height: 600,
        alt: "A laptop showing a code editor on a desk",
      },
      categories: [
        {
          slug: "engineering",
          title: "Engineering",
          href: "/en/blog/category/engineering",
        },
      ],
      publishedAt: "2026-01-15T09:00:00.000Z",
      readingTimeMinutes: 6,
      layout: "standard",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {};

export const Featured: Story = {
  args: { variant: "featured" },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: { variant: "compact" },
};
