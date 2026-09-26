import type { Meta, StoryObj } from "@storybook/react-vite";
import { Figure } from "./Figure";

const meta: Meta<typeof Figure> = {
  title: "RichText/Figure",
  component: Figure,
  tags: ["autodocs"],
  args: {
    block: {
      _type: "figure",
      _key: "figure-1",
      size: "wide",
      showExif: false,
      image: {
        src: "https://picsum.photos/seed/figure/1200/800",
        width: 1200,
        height: 800,
        alt: "A quiet street in Berlin at dusk",
        caption: "A quiet street in Berlin, September 2025.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const Wide: Story = {};

export const WithExif: Story = {
  args: {
    block: {
      _type: "figure",
      _key: "figure-2",
      size: "fullBleed",
      showExif: true,
      image: {
        src: "https://picsum.photos/seed/figure-exif/1200/800",
        width: 1200,
        height: 800,
        alt: "A quiet street in Berlin at dusk",
        exif: {
          camera: "Fujifilm X100V",
          aperture: "f/2.8",
          shutterSpeed: "1/125s",
          iso: 400,
        },
      },
    },
  },
};
