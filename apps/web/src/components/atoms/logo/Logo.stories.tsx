import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  args: {
    href: "/en",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
