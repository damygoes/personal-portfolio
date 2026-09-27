import type { Meta, StoryObj } from "@storybook/react-vite";
import { Crumbs } from "./Crumbs";

const meta = {
  title: "Molecules/Crumbs",
  component: Crumbs,
  args: {
    label: "Breadcrumb",
    items: [{ label: "Home", href: "/en" }, { label: "Work" }],
  },
} satisfies Meta<typeof Crumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CaseStudy: Story = {
  args: {
    items: [
      { label: "← All work", href: "/en/work" },
      { label: "Case study 01" },
    ],
  },
};
