import type { Meta, StoryObj } from "@storybook/react-vite";
import { BigLink } from "./BigLink";

const meta = {
  title: "Atoms/BigLink",
  component: BigLink,
  args: { href: "mailto:badadamilola@gmx.de", children: "badadamilola@gmx.de" },
} satisfies Meta<typeof BigLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contact: Story = { args: { size: "contact" } };
export const Cta: Story = { args: { size: "cta" } };
