import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Hero } from "./Hero";

const meta = {
  title: "Organisms/Hero",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: withData((d) => (
    <Hero site={d.site} dict={d.dict} newWork={d.home.newWork} />
  )),
};
