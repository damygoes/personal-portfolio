import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dot, OutlineText } from "./OutlineText";

const meta = {
  title: "Atoms/OutlineText",
  component: OutlineText,
  args: { children: "Bada" },
  decorators: [
    (Story) => (
      <div className="type-display t-hero">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OutlineText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Paint-order outline: no inner contour lines from the variable font. */
export const OnPage: Story = {
  render: (args) => (
    <>
      <OutlineText {...args} />
      <Dot />
    </>
  ),
};
export const OnBand: Story = {
  decorators: [
    (Story) => (
      <div className="band p-8">
        <Story />
      </div>
    ),
  ],
};
export const Thin: Story = {
  args: { weight: "thin", children: "React Native" },
};
