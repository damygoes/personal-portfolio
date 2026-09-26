import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrevNextNav } from "./PrevNextNav";

const meta: Meta<typeof PrevNextNav> = {
  title: "Molecules/PrevNextNav",
  component: PrevNextNav,
  tags: ["autodocs"],
  args: {
    previous: {
      title: "A walk through Berlin",
      href: "/en/blog/a-walk-through-berlin",
    },
    next: { title: "Another post title", href: "/en/blog/another-post" },
  },
};

export default meta;
type Story = StoryObj<typeof PrevNextNav>;

export const Default: Story = {};

export const NextOnly: Story = {
  args: { previous: undefined },
};
