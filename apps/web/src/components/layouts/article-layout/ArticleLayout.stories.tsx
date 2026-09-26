import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Post } from "@portfolio/contracts";
import { ArticleLayout } from "./ArticleLayout";

const post: Post = {
  id: "post-1",
  slug: "organizing-a-frontend-monorepo",
  href: "/en/blog/organizing-a-frontend-monorepo",
  title: "Organizing a frontend monorepo",
  excerpt: "How I split packages and apps in this portfolio project.",
  cover: {
    src: "https://picsum.photos/seed/article/1600/900",
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
  body: [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "intro-span",
          text: "A short introduction paragraph.",
        },
      ],
    },
    {
      _type: "block",
      _key: "h2-packages",
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "h2-packages-span",
          text: "Splitting into packages",
        },
      ],
    },
  ],
  toc: [{ id: "h2-packages", text: "Splitting into packages", level: 2 }],
  seo: {
    title: "Organizing a frontend monorepo",
    description: "",
    canonicalUrl:
      "https://damilolabada.com/en/blog/organizing-a-frontend-monorepo",
    noIndex: false,
    alternates: [],
  },
  related: [
    {
      id: "post-2",
      slug: "a-walk-through-berlin",
      href: "/en/blog/a-walk-through-berlin",
      title: "A walk through Berlin",
      excerpt: "A handful of frames from a quiet evening walk.",
      cover: {
        src: "https://picsum.photos/seed/article-related/400/400",
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
};

const meta: Meta<typeof ArticleLayout> = {
  title: "Layouts/ArticleLayout",
  component: ArticleLayout,
  tags: ["autodocs"],
  args: {
    post,
    locale: "en",
    readingTimeLabel: "6 min read",
    relatedReadingTimeLabel: (minutes: number) => `${minutes} min read`,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleLayout>;

export const Default: Story = {};
