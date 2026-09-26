import type { Meta, StoryObj } from "@storybook/react-vite";
import { CtaGroup } from "./CtaGroup";

const meta: Meta<typeof CtaGroup> = {
  title: "Molecules/CtaGroup",
  component: CtaGroup,
  tags: ["autodocs"],
  args: {
    primary: { label: "Get in touch", href: "/en#contact", external: false },
  },
};

export default meta;
type Story = StoryObj<typeof CtaGroup>;

export const PrimaryOnly: Story = {};

export const WithCv: Story = {
  args: {
    cv: { href: "/cv/damilola-bada-en.pdf", fileName: "damilola-bada-en.pdf" },
  },
};
