import type { Meta, StoryObj } from "@storybook/react-vite";
import { WorkSection } from "./WorkSection";

const meta: Meta<typeof WorkSection> = {
  title: "Organisms/WorkSection",
  component: WorkSection,
  tags: ["autodocs"],
  args: {
    section: {
      id: "work",
      index: "03",
      heading: "Selected work",
      intro: "A few projects I'm proud of.",
      projects: [
        {
          id: "proj-1",
          index: "01",
          title: "Ellie's Note",
          summary: "A journalling app for new parents.",
          cover: {
            src: "https://picsum.photos/seed/work-1/800/600",
            width: 800,
            height: 600,
            alt: "Ellie's Note",
          },
          tech: ["TypeScript", "React Native"],
          href: "/en/work/elliesnote",
        },
        {
          id: "proj-2",
          index: "02",
          title: "damilolabada.com",
          summary: "This site.",
          cover: {
            src: "https://picsum.photos/seed/work-2/800/600",
            width: 800,
            height: 600,
            alt: "Portfolio",
          },
          tech: ["Next.js", "Sanity"],
          href: "/en/work/portfolio",
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkSection>;

export const Default: Story = {};
