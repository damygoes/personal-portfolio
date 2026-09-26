import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Project } from "@portfolio/contracts";
import { CaseStudyLayout } from "./CaseStudyLayout";

const project: Project = {
  id: "proj-elliesnote",
  title: "Ellie's Note",
  summary:
    "A journalling app for new parents to track feeds, sleep and milestones.",
  cover: {
    src: "https://picsum.photos/seed/cs-layout/1600/900",
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
  links: [{ kind: "live", href: "https://elliesnote.app" }],
  body: [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "intro-span",
          text: "How this project came together.",
        },
      ],
    },
  ],
  toc: [],
  seo: {
    title: "Ellie's Note — case study",
    description: "",
    canonicalUrl: "https://damilolabada.com/en/work/elliesnote",
    noIndex: false,
    alternates: [],
  },
};

const meta: Meta<typeof CaseStudyLayout> = {
  title: "Layouts/CaseStudyLayout",
  component: CaseStudyLayout,
  tags: ["autodocs"],
  args: {
    project,
    locale: "en",
    statusLabel: "Live",
    linkLabels: {
      live: "Live site",
      repository: "Source code",
      appStore: "App Store",
      playStore: "Play Store",
      other: "Link",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyLayout>;

export const Default: Story = {};
