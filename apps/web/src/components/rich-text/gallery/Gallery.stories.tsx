import type { Meta, StoryObj } from "@storybook/react-vite";
import type { GalleryBlock } from "@portfolio/contracts";
import { Gallery } from "./Gallery";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/gallery-${i}/800/${600 + (i % 3) * 100}`,
  width: 800,
  height: 600 + (i % 3) * 100,
  alt: `Gallery photo ${i + 1}`,
}));

const block: GalleryBlock = {
  _type: "gallery",
  _key: "gallery-1",
  layout: "grid",
  showExif: false,
  caption: "Frames from an evening walk.",
  images,
};

const meta: Meta<typeof Gallery> = {
  title: "RichText/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  args: { block },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Grid: Story = {};

export const Masonry: Story = {
  args: { block: { ...block, layout: "masonry" } },
};

export const Carousel: Story = {
  args: { block: { ...block, layout: "carousel" } },
};
