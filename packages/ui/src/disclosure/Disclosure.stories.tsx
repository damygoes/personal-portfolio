import type { Meta, StoryObj } from "@storybook/react-vite";
import { Disclosure } from "./Disclosure";

const meta: Meta<typeof Disclosure> = {
  title: "Components/Disclosure",
  component: Disclosure,
  tags: ["autodocs"],
  args: {
    trigger: "What is this?",
    children: "This is the disclosure panel content, hidden until opened.",
  },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {};

export const InitiallyOpen: Story = {
  args: { defaultOpen: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const MultipleItems: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Disclosure trigger="First question">First answer.</Disclosure>
      <Disclosure trigger="Second question">Second answer.</Disclosure>
      <Disclosure trigger="Third question" defaultOpen>
        Third answer, open by default.
      </Disclosure>
    </div>
  ),
};
