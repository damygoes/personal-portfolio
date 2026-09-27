import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocalClock } from "./LocalClock";

const meta = {
  title: "Atoms/LocalClock",
  component: LocalClock,
  args: {
    timeZone: "Europe/Berlin",
    prefix: "Local time ",
    className: "label text-muted",
  },
} satisfies Meta<typeof LocalClock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Suffix: Story = { args: { prefix: "", suffix: " local" } };
