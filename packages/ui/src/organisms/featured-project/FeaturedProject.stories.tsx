import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { FeaturedProject } from "./FeaturedProject";

const meta = {
  title: "Organisms/FeaturedProject",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const WarmCover: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <FeaturedProject project={d.work.featured[0]!} dict={d.dict} />
    </div>
  )),
};
export const Reversed: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <FeaturedProject project={d.work.featured[1]!} dict={d.dict} reverse />
    </div>
  )),
};
