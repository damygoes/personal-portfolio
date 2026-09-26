import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseStudyHeader } from "./CaseStudyHeader";

const meta: Meta<typeof CaseStudyHeader> = {
  title: "Organisms/CaseStudyHeader",
  component: CaseStudyHeader,
  tags: ["autodocs"],
  args: {
    locale: "en",
    statusLabel: "Live",
    linkLabels: {
      live: "Live site",
      repository: "Source code",
      appStore: "App Store",
      playStore: "Play Store",
      other: "Link",
    },
    project: {
      id: "proj-elliesnote",
      title: "Ellie's Note",
      summary:
        "A journalling app for new parents to track feeds, sleep and milestones.",
      cover: {
        src: "https://picsum.photos/seed/case-study/1600/900",
        width: 1600,
        height: 900,
        alt: "Ellie's Note",
      },
      tech: ["TypeScript", "React Native", "Node.js"],
      href: "/en/work/elliesnote",
      slug: "elliesnote",
      role: "Fullstack developer",
      period: { start: "2023-02-01", end: null, isCurrent: true },
      status: "live",
      links: [
        { kind: "live", href: "https://elliesnote.app" },
        { kind: "appStore", href: "https://apps.apple.com/app/elliesnote" },
      ],
      body: [],
      toc: [],
      seo: {
        title: "Ellie's Note — case study",
        description: "",
        canonicalUrl: "https://damilolabada.com/en/work/elliesnote",
        noIndex: false,
        alternates: [],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyHeader>;

export const Default: Story = {};
