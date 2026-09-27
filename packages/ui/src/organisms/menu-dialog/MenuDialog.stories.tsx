import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { MenuDialog } from "./MenuDialog";

const meta = {
  title: "Organisms/MenuDialog",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Focus trap, Escape to close, scroll lock, focus returns to the Menu button. */
export const Closed: Story = {
  globals: { viewport: { value: "tablet" } },
  render: withData((d) => (
    <div className="p-6">
      <MenuDialog {...d.chrome("")} active={null} />
    </div>
  )),
};
export const Open: Story = {
  globals: { viewport: { value: "mobile" } },
  render: withData((d) => (
    <MenuDialog {...d.chrome("/work")} active="work" defaultOpen />
  )),
};
