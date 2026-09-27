import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { Header } from "./Header";

const meta = {
  title: "Organisms/Header",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: withData((d) => <Header {...d.chrome("")} active={null} />),
};
export const WorkActive: Story = {
  render: withData((d) => <Header {...d.chrome("/work")} active="work" />),
};
