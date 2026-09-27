import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Facts } from "./Facts";

const meta = {
  title: "Molecules/Facts",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  render: withData((data) => (
    <Facts facts={data.home.about.facts} className="max-w-[400px]" />
  )),
};
/** Home teaser: no "Based in", links as plain text. */
export const Teaser: Story = {
  render: withData((data) => (
    <Facts
      facts={data.home.about.facts}
      variant="teaser"
      className="max-w-[400px]"
    />
  )),
};
