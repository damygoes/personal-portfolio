import type { Meta, StoryObj } from "@storybook/react-vite";
import { PostGrid } from "./PostGrid";

const posts = [
  {
    id: "post-1",
    slug: "organizing-a-frontend-monorepo",
    href: "/en/blog/organizing-a-frontend-monorepo",
    title: "Organizing a frontend monorepo",
    excerpt: "How I split packages and apps in this portfolio project.",
    cover: {
      src: "https://picsum.photos/seed/grid-1/800/600",
      width: 800,
      height: 600,
      alt: "Monorepo",
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
    layout: "standard" as const,
  },
  {
    id: "post-2",
    slug: "a-walk-through-berlin",
    href: "/en/blog/a-walk-through-berlin",
    title: "A walk through Berlin",
    excerpt: "A handful of frames from a quiet evening walk.",
    cover: {
      src: "https://picsum.photos/seed/grid-2/800/600",
      width: 800,
      height: 600,
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
    layout: "photoEssay" as const,
  },
];

const meta: Meta<typeof PostGrid> = {
  title: "Organisms/PostGrid",
  component: PostGrid,
  tags: ["autodocs"],
  args: {
    posts,
    locale: "en",
    readingTimeLabel: (minutes: number) => `${minutes} min read`,
  },
};

export default meta;
type Story = StoryObj<typeof PostGrid>;

export const Default: Story = {};

export const Empty: Story = {
  args: { posts: [] },
};
