import type { Meta, StoryObj } from "@storybook/react-vite";
import { FactList } from "./FactList";

const meta: Meta<typeof FactList> = {
  title: "Components/FactList",
  component: FactList,
  tags: ["autodocs"],
  args: {
    items: ["Based in Germany", "Fullstack Developer", "4+ yrs"],
  },
};

export default meta;
type Story = StoryObj<typeof FactList>;

export const Default: Story = {};

export const CustomSeparator: Story = {
  args: { separator: "/" },
};

export const SingleItem: Story = {
  args: { items: ["Available for work"] },
};
