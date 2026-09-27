import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { SiteShell } from "./SiteShell";

const meta = {
  title: "Templates/SiteShell",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Skip link, header, main and footer around any page content. */
export const Default: Story = {
  render: withData((d) => (
    <SiteShell {...d.chrome("/about")} active="about">
      <div className="wrap sec" />
    </SiteShell>
  )),
};
