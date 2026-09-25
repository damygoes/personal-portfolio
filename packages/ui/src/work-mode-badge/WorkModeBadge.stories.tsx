import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkModeBadge } from "./WorkModeBadge";

const meta: Meta<typeof WorkModeBadge> = {
  title: "Components/WorkModeBadge",
  component: WorkModeBadge,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["onsite", "hybrid", "remote"],
    },
  },
  args: {
    mode: "remote",
    label: "Remote",
  },
};

export default meta;
type Story = StoryObj<typeof WorkModeBadge>;

export const Default: Story = {};

export const AllModes: Story = {
  render: () => (
    <div className="flex gap-2">
      <WorkModeBadge mode="onsite" label="On-site" />
      <WorkModeBadge mode="hybrid" label="Hybrid" />
      <WorkModeBadge mode="remote" label="Remote" />
    </div>
  ),
};
