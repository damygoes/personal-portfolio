import type { Meta, StoryObj } from "@storybook/react-vite";
import { CategoryFilter } from "./CategoryFilter";

const meta: Meta<typeof CategoryFilter> = {
  title: "Molecules/CategoryFilter",
  component: CategoryFilter,
  tags: ["autodocs"],
  args: {
    allHref: "/en/blog",
    items: [
      {
        slug: "engineering",
        title: "Engineering",
        href: "/en/blog/category/engineering",
        postCount: 4,
        active: true,
      },
      {
        slug: "photography",
        title: "Photography",
        href: "/en/blog/category/photography",
        postCount: 2,
        active: false,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CategoryFilter>;

export const Default: Story = {};
