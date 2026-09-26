import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Post } from "@portfolio/contracts";
import { PhotoEssayLayout } from "./PhotoEssayLayout";

const post: Post = {
  id: "post-2",
  slug: "a-walk-through-berlin",
  href: "/en/blog/a-walk-through-berlin",
  title: "A walk through Berlin",
  excerpt: "A handful of frames from a quiet evening walk.",
  cover: {
    src: "https://picsum.photos/seed/pe-layout/1600/1000",
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
  body: [
    {
      _type: "figure",
      _key: "figure-1",
      size: "fullBleed",
      showExif: true,
      image: {
        src: "https://picsum.photos/seed/pe-layout-figure/1600/1000",
        width: 1600,
        height: 1000,
        alt: "A quiet street in Berlin",
        exif: { camera: "Fujifilm X100V", aperture: "f/2.8" },
      },
    },
  ],
  toc: [],
  seo: {
    title: "A walk through Berlin",
    description: "",
    canonicalUrl: "https://damilolabada.com/en/blog/a-walk-through-berlin",
    noIndex: false,
    alternates: [],
  },
  photoSummary: {
    photoCount: 1,
    cameras: ["Fujifilm X100V"],
    lenses: ["23mm f/2"],
  },
  related: [],
};

const meta: Meta<typeof PhotoEssayLayout> = {
  title: "Layouts/PhotoEssayLayout",
  component: PhotoEssayLayout,
  tags: ["autodocs"],
  args: {
    post,
    locale: "en",
    photoCountLabel: "1 photo",
    relatedReadingTimeLabel: (minutes: number) => `${minutes} min read`,
  },
};

export default meta;
type Story = StoryObj<typeof PhotoEssayLayout>;

export const Default: Story = {};
