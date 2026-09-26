import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "./Marquee";

const meta: Meta<typeof Marquee> = {
  title: "Molecules/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  args: {
    rows: [
      ["TypeScript", "React", "Next.js"],
      ["Node.js", "PostgreSQL", "Tailwind CSS"],
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {};
