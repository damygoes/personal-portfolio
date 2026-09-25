import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionIndex } from "./SectionIndex";

const meta: Meta<typeof SectionIndex> = {
  title: "Components/SectionIndex",
  component: SectionIndex,
  tags: ["autodocs"],
  args: {
    index: "01",
  },
};

export default meta;
type Story = StoryObj<typeof SectionIndex>;

export const Default: Story = {};

export const NextToHeading: Story = {
  render: (args) => (
    <div className="flex items-baseline gap-3">
      <SectionIndex {...args} />
      <h2 className="text-2xl font-semibold">About</h2>
    </div>
  ),
};
