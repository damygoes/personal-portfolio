import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Toc } from "./Toc";

const meta = {
  title: "Molecules/Toc",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Follows the heading in view on the post page. */
export const Default: Story = {
  render: withData((data) => (
    <Toc
      entries={data.post.toc}
      label={data.dict.blog.onThisPage}
      className="max-w-[320px]"
    />
  )),
};
