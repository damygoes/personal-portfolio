import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRange } from "./DateRange";

const meta: Meta<typeof DateRange> = {
  title: "Components/DateRange",
  component: DateRange,
  tags: ["autodocs"],
  args: {
    start: "2020-01-01",
    end: "2022-06-01",
    locale: "en",
  },
};

export default meta;
type Story = StoryObj<typeof DateRange>;

export const Default: Story = {};

export const Ongoing: Story = {
  args: { end: null },
};

export const German: Story = {
  args: { locale: "de", end: null, presentLabel: "Heute" },
};
