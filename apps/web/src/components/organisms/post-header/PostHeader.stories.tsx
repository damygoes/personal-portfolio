import type { Meta, StoryObj } from "@storybook/react-vite";
import { PostHeader } from "./PostHeader";

const meta: Meta<typeof PostHeader> = {
  title: "Organisms/PostHeader",
  component: PostHeader,
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
        src: "https://picsum.photos/seed/post-header/1600/900",
        width: 1600,
        height: 900,
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
      layout: "standard",
      body: [],
      toc: [],
      seo: {
        title: "Organizing a frontend monorepo",
        description: "",
        canonicalUrl:
          "https://damilolabada.com/en/blog/organizing-a-frontend-monorepo",
        noIndex: false,
        alternates: [],
      },
      related: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostHeader>;

export const Default: Story = {};
