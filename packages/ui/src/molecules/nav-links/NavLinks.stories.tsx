import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavLinks } from "./NavLinks";

const meta = {
  title: "Molecules/NavLinks",
  component: NavLinks,
  args: {
    label: "Main",
    active: "work",
    items: [
      { key: "work", label: "Work", href: "/en/work" },
      { key: "about", label: "About", href: "/en/about" },
      { key: "blog", label: "Blog", href: "/en/blog" },
    ],
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
} satisfies Meta<typeof NavLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Desktop only (hidden below 1024). */
export const Active: Story = {};
export const NoneActive: Story = { args: { active: null } };
