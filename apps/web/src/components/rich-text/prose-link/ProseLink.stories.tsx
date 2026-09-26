import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProseLink } from "./ProseLink";

const meta: Meta<typeof ProseLink> = {
  title: "RichText/ProseLink",
  component: ProseLink,
  tags: ["autodocs"],
  args: {
    href: "https://example.com",
    external: true,
    children: "an external link",
  },
  decorators: [
    (Story) => (
      <p>
        Some paragraph text with <Story /> inline.
      </p>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProseLink>;

export const External: Story = {};

export const Internal: Story = {
  args: { href: "/en/blog", external: false, children: "the blog index" },
};
