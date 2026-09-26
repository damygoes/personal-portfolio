import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogHeader } from "./BlogHeader";

const meta: Meta<typeof BlogHeader> = {
  title: "Organisms/BlogHeader",
  component: BlogHeader,
  tags: ["autodocs"],
  args: {
    heading: "Blog",
    intro: "Notes on engineering, photography and everything in between.",
  },
};

export default meta;
type Story = StoryObj<typeof BlogHeader>;

export const Default: Story = {};

export const CategoryFiltered: Story = {
  args: {
    heading: "Engineering",
    activeCategory: {
      slug: "engineering",
      title: "Engineering",
      description: "Notes on building software.",
      href: "/en/blog/category/engineering",
    },
  },
};
