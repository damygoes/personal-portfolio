import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkillsSection } from "./SkillsSection";

const meta: Meta<typeof SkillsSection> = {
  title: "Organisms/SkillsSection",
  component: SkillsSection,
  tags: ["autodocs"],
  args: {
    section: {
      id: "skills",
      index: "04",
      heading: "Skills",
      marqueeRows: [
        ["TypeScript", "React", "Next.js"],
        ["Node.js", "PostgreSQL", "Tailwind CSS"],
      ],
      groups: [
        {
          title: "Frontend",
          skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        { title: "Backend", skills: ["Node.js", "PostgreSQL"] },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {};
