import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhotoEssayHeader } from "./PhotoEssayHeader";

const meta: Meta<typeof PhotoEssayHeader> = {
  title: "Organisms/PhotoEssayHeader",
  component: PhotoEssayHeader,
  tags: ["autodocs"],
  args: {
    locale: "en",
    photoCountLabel: "12 photos",
    post: {
      id: "post-2",
      slug: "a-walk-through-berlin",
      href: "/en/blog/a-walk-through-berlin",
      title: "A walk through Berlin",
      excerpt: "A handful of frames from a quiet evening walk.",
      cover: {
        src: "https://picsum.photos/seed/photo-essay/1600/1000",
        width: 1600,
        height: 1000,
        alt: "Berlin street",
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
      body: [],
      toc: [],
      seo: {
        title: "A walk through Berlin",
        description: "",
        canonicalUrl: "https://damilolabada.com/en/blog/a-walk-through-berlin",
        noIndex: false,
        alternates: [],
      },
      photoSummary: {
        photoCount: 12,
        cameras: ["Fujifilm X100V"],
        lenses: ["23mm f/2"],
      },
      related: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhotoEssayHeader>;

export const Default: Story = {};
