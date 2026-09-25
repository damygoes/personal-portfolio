import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollHint } from "./ScrollHint";

const meta: Meta<typeof ScrollHint> = {
  title: "Components/ScrollHint",
  component: ScrollHint,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollHint>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: { label: "Scroll down" },
};
