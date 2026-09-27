import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Molecules/Badge",
  component: Badge,
  args: {
    text: "FULLSTACK DEVELOPER ✦ WEB & MOBILE ✦ ",
    href: "#work",
    label: "Jump to selected work",
    size: "lg",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 176px on desktop, 120px on tablet. The ring rotates in 28s (off with reduced motion). */
export const Large: Story = {};
export const Small: Story = {
  args: { size: "sm", text: "FULLSTACK ✦ WEB & MOBILE ✦ " },
};
