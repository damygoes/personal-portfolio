import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground">
      {children}
    </div>
  );
}

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </>
    ),
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {};

export const Row: Story = {
  args: { direction: "row" },
};

export const CenteredRow: Story = {
  args: { direction: "row", align: "center" },
};

export const LargeGap: Story = {
  args: { direction: "row", gap: 8 },
};
