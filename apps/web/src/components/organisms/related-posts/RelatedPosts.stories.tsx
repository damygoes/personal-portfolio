import type { Meta, StoryObj } from "@storybook/react-vite";
import { RelatedPosts } from "./RelatedPosts";

const meta: Meta<typeof RelatedPosts> = {
  title: "Organisms/RelatedPosts",
  component: RelatedPosts,
  tags: ["autodocs"],
  args: {
    locale: "en",
    readingTimeLabel: (minutes: number) => `${minutes} min read`,
    posts: [
      {
        id: "post-2",
        slug: "a-walk-through-berlin",
        href: "/en/blog/a-walk-through-berlin",
        title: "A walk through Berlin",
        excerpt: "A handful of frames from a quiet evening walk.",
        cover: {
          src: "https://picsum.photos/seed/related-1/400/400",
          width: 400,
          height: 400,
          alt: "Berlin",
        },
        categories: [
          {
            slug: "photography",
            title: "Photography",
            href: "/en/blog/category/photography",
          },
        ],
        publishedAt: "2025-09-20T09:00:00.000Z",
        readingTimeMinutes: 3,
        layout: "photoEssay",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof RelatedPosts>;

export const Default: Story = {};

export const Empty: Story = {
  args: { posts: [] },
};
