import type { Meta, StoryObj } from "@storybook/react-vite";
import { LiveDot, NowBadge, Pill } from "./Pill";

const meta = {
  title: "Atoms/Pill",
  component: Pill,
  args: { children: "New · Live on the App Store" },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Latest: Story = { args: { children: "Latest" } };
export const Now: Story = { render: () => <NowBadge>Now</NowBadge> };
export const Live: Story = {
  render: () => (
    <p className="label flex items-center gap-2.5 text-muted">
      <LiveDot /> Local time 20:15
    </p>
  ),
};
