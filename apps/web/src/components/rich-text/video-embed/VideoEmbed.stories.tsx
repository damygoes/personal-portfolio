import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoEmbed } from "./VideoEmbed";

const meta: Meta<typeof VideoEmbed> = {
  title: "RichText/VideoEmbed",
  component: VideoEmbed,
  tags: ["autodocs"],
  args: {
    block: {
      _type: "videoEmbed",
      _key: "v1",
      provider: "youtube",
      videoId: "dQw4w9WgXcQ",
      title: "A talk about frontend architecture",
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoEmbed>;

export const ClickToLoad: Story = {};
