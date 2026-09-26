import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhotoSummary } from "./PhotoSummary";

const meta: Meta<typeof PhotoSummary> = {
  title: "Molecules/PhotoSummary",
  component: PhotoSummary,
  tags: ["autodocs"],
  args: {
    photoCountLabel: "12 photos",
    summary: {
      photoCount: 12,
      cameras: ["Fujifilm X100V"],
      lenses: ["23mm f/2"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhotoSummary>;

export const Default: Story = {};
