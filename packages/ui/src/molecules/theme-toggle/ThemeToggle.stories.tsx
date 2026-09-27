import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeToggle } from "./ThemeToggle";

const meta = {
  title: "Molecules/ThemeToggle",
  component: ThemeToggle,
  args: { labels: { dark: "Dark mode", light: "Light mode" } },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Toggles `.dark` on <html>. The label is hidden below 1024 (44px circle). */
export const Default: Story = {};
