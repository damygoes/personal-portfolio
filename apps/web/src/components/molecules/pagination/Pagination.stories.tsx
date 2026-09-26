import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    pagination: {
      page: 2,
      totalPages: 5,
      previousHref: "?page=1",
      nextHref: "?page=3",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const FirstPage: Story = {
  args: { pagination: { page: 1, totalPages: 5, nextHref: "?page=2" } },
};

export const LastPage: Story = {
  args: { pagination: { page: 5, totalPages: 5, previousHref: "?page=4" } },
};
