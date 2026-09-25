import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    href: "/about",
    children: "Read more",
  },
  argTypes: {
    underline: {
      control: "select",
      options: ["always", "hover", "none"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const AlwaysUnderlined: Story = {
  args: { underline: "always" },
};

export const NoUnderline: Story = {
  args: { underline: "none" },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit example.com",
  },
};
