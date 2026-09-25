import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
  args: {
    label: "TypeScript",
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Plain: Story = {};

export const Linked: Story = {
  args: { href: "/blog/category/engineering" },
};

export const Active: Story = {
  args: { href: "/blog/category/engineering", active: true },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip label="All" href="/blog" active />
      <Chip label="Engineering" href="/blog/category/engineering" />
      <Chip label="Photography" href="/blog/category/photography" />
    </div>
  ),
};
