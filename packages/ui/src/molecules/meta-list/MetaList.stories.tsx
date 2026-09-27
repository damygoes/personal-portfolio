import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetaList } from "./MetaList";

const meta = {
  title: "Molecules/MetaList",
  component: MetaList,
  args: {
    items: ["Based in Germany", "Fullstack Developer", "4+ yrs experience"],
  },
} satisfies Meta<typeof MetaList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Stacks on mobile (separators hidden). */
export const Default: Story = {};
