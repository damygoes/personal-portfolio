import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormattedDate } from "./FormattedDate";

const meta: Meta<typeof FormattedDate> = {
  title: "Components/FormattedDate",
  component: FormattedDate,
  tags: ["autodocs"],
  args: {
    date: "2024-03-15",
    locale: "en",
  },
};

export default meta;
type Story = StoryObj<typeof FormattedDate>;

export const Default: Story = {};

export const German: Story = {
  args: { locale: "de" },
};

export const ShortMonthYear: Story = {
  args: { options: { month: "short", year: "numeric" } },
};
