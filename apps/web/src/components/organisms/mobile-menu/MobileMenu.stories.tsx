import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NavListItem } from "../../molecules/nav-list/NavList";
import { MobileMenu } from "./MobileMenu";

const items: NavListItem[] = [
  { key: "about", href: "/en#about", index: "01", label: "About" },
  { key: "work", href: "/en#work", index: "03", label: "Work" },
  { key: "blog", href: "/en/blog", label: "Blog" },
];

const meta: Meta<typeof MobileMenu> = {
  title: "Organisms/MobileMenu",
  component: MobileMenu,
  tags: ["autodocs"],
  args: { items },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = {};
