import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge } from "./StatusBadge";

const meta: Meta<typeof StatusBadge> = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  args: {
    status: "live",
    label: "Live",
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Live: Story = {};

export const InDevelopment: Story = {
  args: { status: "in-development", label: "In development" },
};

export const Archived: Story = {
  args: { status: "archived", label: "Archived" },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex gap-2">
      <StatusBadge status="live" label="Live" />
      <StatusBadge status="in-development" label="In development" />
      <StatusBadge status="archived" label="Archived" />
    </div>
  ),
};
