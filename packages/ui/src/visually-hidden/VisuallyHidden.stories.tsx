import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  args: {
    children: "This text is only announced to screen readers",
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: (args) => (
    <div>
      <p>Visible content around it —</p>
      <VisuallyHidden {...args} />
      <p>— nothing renders in between.</p>
    </div>
  ),
};
