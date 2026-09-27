import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleLines } from "./TitleLines";

const meta = {
  title: "Molecules/TitleLines",
  component: TitleLines,
  args: { lines: ["Selected", "work"] },
  decorators: [
    (Story) => (
      <h2 className="type-display t-xl">
        <Story />
      </h2>
    ),
  ],
} satisfies Meta<typeof TitleLines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedSecondLine: Story = {};
export const OneLine: Story = {
  args: { lines: ["The", "toolkit"], join: "space" },
};
export const Plain: Story = {
  args: { lines: ["Where I've", "built things"], outline: false, dot: false },
};
