import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Footer } from "./Footer";

const meta = {
  title: "Organisms/Footer",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: withData((d) => (
    <Footer site={d.site} dict={d.dict} locale={d.locale} year={2026} />
  )),
};
