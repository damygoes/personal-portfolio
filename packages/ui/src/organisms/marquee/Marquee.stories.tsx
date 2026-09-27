import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Marquee } from "./Marquee";

const meta = {
  title: "Organisms/Marquee",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Loops in 48s; stops with reduced motion. */
export const Default: Story = {
  render: withData((d) => <Marquee items={d.site.marqueeItems} />),
};
