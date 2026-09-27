import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipList } from "./ChipList";

const meta = {
  title: "Atoms/ChipList",
  component: ChipList,
  args: {
    items: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js (API)",
      "NeonDB (PostgreSQL)",
    ],
  },
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
