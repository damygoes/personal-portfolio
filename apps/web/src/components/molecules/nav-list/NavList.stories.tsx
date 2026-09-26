import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavList, type NavListItem } from "./NavList";

const items: NavListItem[] = [
  { key: "about", href: "/en#about", index: "01", label: "About" },
  {
    key: "experience",
    href: "/en#experience",
    index: "02",
    label: "Experience",
  },
  { key: "work", href: "/en#work", index: "03", label: "Work" },
  { key: "skills", href: "/en#skills", index: "04", label: "Skills" },
  { key: "contact", href: "/en#contact", index: "05", label: "Contact" },
  { key: "blog", href: "/en/blog", label: "Blog" },
];

const meta: Meta<typeof NavList> = {
  title: "Molecules/NavList",
  component: NavList,
  tags: ["autodocs"],
  args: { items },
};

export default meta;
type Story = StoryObj<typeof NavList>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { orientation: "vertical" },
};
