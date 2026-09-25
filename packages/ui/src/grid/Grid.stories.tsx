import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./Grid";

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-secondary px-4 py-6 text-center text-secondary-foreground">
      {children}
    </div>
  );
}

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  args: {
    cols: 3,
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
    ),
  },
  argTypes: {
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};

export const TwoColumns: Story = {
  args: { cols: 2 },
};

export const Responsive: Story = {
  args: { cols: { base: 1, md: 2, lg: 3 } },
};

export const LargeGap: Story = {
  args: { gap: 8 },
};
