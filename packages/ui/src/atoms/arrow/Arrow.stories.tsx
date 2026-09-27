import type { Meta, StoryObj } from "@storybook/react-vite";
import { SweepLink } from "../sweep-link/SweepLink";
import { Arrow } from "./Arrow";

const meta = {
  title: "Atoms/Arrow",
  component: Arrow,
  args: { dir: "up-right" },
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Hover each link: the arrow nudges in its direction. */
export const Directions: Story = {
  render: () => (
    <div className="flex gap-8">
      <SweepLink href="#" arrow="up-right">
        Selected work
      </SweepLink>
      <SweepLink href="#" arrow="down" soft>
        Download CV
      </SweepLink>
      <SweepLink href="#" arrow="right">
        All work
      </SweepLink>
      <SweepLink href="#" arrow="up">
        Back to top
      </SweepLink>
    </div>
  ),
};
