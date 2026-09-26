import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkillGroup } from "./SkillGroup";

const meta: Meta<typeof SkillGroup> = {
  title: "Molecules/SkillGroup",
  component: SkillGroup,
  tags: ["autodocs"],
  args: {
    group: {
      title: "Frontend",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillGroup>;

export const Default: Story = {};
