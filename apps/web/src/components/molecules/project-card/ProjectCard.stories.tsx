import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  args: {
    project: {
      id: "proj-1",
      index: "01",
      title: "Ellie's Note",
      summary:
        "A journalling app for new parents to track feeds, sleep and milestones.",
      cover: {
        src: "https://picsum.photos/seed/elliesnote/800/600",
        width: 800,
        height: 600,
        alt: "Screenshot of the Ellie's Note app dashboard",
      },
      tech: ["TypeScript", "React Native", "Node.js"],
      href: "/en/work/elliesnote",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {};
