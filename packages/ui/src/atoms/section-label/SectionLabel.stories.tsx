import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionLabel } from "./SectionLabel";

const meta = {
  title: "Atoms/SectionLabel",
  component: SectionLabel,
  args: { number: "01", children: "Selected work" },
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Numbered: Story = {};
export const Plain: Story = {
  args: {
    number: undefined,
    children: "More from the blog",
    className: "text-muted",
  },
};
export const OnBand: Story = {
  args: { number: "02", children: "Skills" },
  decorators: [
    (Story) => (
      <div className="band p-8">
        <Story />
      </div>
    ),
  ],
};
