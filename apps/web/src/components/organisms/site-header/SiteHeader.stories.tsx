import type { Meta, StoryObj } from "@storybook/react-vite";
import { SiteHeader } from "./SiteHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Organisms/SiteHeader",
  component: SiteHeader,
  tags: ["autodocs"],
  args: {
    logoHref: "/en",
    locale: "en",
    alternates: [
      { locale: "en", href: "/en" },
      { locale: "de", href: "/de" },
    ],
    nav: [
      { key: "about", href: "/en#about", index: "01", label: "About" },
      {
        key: "experience",
        href: "/en#experience",
        index: "02",
        label: "Experience",
      },
      { key: "work", href: "/en#work", index: "03", label: "Work" },
      { key: "blog", href: "/en/blog", label: "Blog" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};
