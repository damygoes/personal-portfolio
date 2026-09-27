import type { Meta, StoryObj } from "@storybook/react-vite";
import { SweepLink } from "./SweepLink";

const meta = {
  title: "Atoms/SweepLink",
  component: SweepLink,
  args: { href: "#", children: "Selected work", arrow: "up-right" },
} satisfies Meta<typeof SweepLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Soft: Story = {
  args: { children: "Download CV", arrow: "down", soft: true },
};
/** Inside a card the title link covers the card, so this renders as a span. */
export const WithoutHref: Story = {
  args: { href: undefined, children: "Read case study", arrow: "right" },
};
