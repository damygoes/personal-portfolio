import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReadingTime } from "./ReadingTime";

const meta: Meta<typeof ReadingTime> = {
  title: "Components/ReadingTime",
  component: ReadingTime,
  tags: ["autodocs"],
  args: {
    minutes: 5,
    label: "5 min read",
  },
};

export default meta;
type Story = StoryObj<typeof ReadingTime>;

export const Default: Story = {};

export const Singular: Story = {
  args: { minutes: 1, label: "1 min read" },
};
