import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";

const meta = {
  title: "Atoms/DeviceFrame",
  component: PhoneFrame,
} satisfies Meta<typeof PhoneFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Phones: Story = {
  render: () => (
    <div className="tone-lagoon flex items-center justify-center gap-12 rounded-3xl p-12">
      <PhoneFrame size="feature" />
      <PhoneFrame size="case" />
    </div>
  ),
};

export const WarmCover: Story = {
  render: () => (
    <div className="cover-warm flex justify-center rounded-3xl p-12">
      <PhoneFrame />
    </div>
  ),
};

export const Browser: Story = {
  render: () => (
    <div className="tone-card flex h-80 w-[420px] items-end justify-center rounded-2xl border border-border">
      <BrowserFrame />
    </div>
  ),
};
