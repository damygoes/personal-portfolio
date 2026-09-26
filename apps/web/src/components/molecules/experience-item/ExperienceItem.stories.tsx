import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExperienceItem } from "./ExperienceItem";

const meta: Meta<typeof ExperienceItem> = {
  title: "Molecules/ExperienceItem",
  component: ExperienceItem,
  tags: ["autodocs"],
  args: {
    locale: "en",
    workModeLabel: "Hybrid",
    item: {
      id: "exp-1",
      role: "Fullstack developer",
      company: { name: "Acme Corp", url: "https://acme.example.com" },
      location: "Berlin, Germany",
      workMode: "hybrid",
      period: { start: "2023-03-01", end: null, isCurrent: true },
      summary: "Responsible for the frontend of a B2B SaaS product.",
      highlights: [
        "Built the design system from scratch",
        "Reduced load times by 40%",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-prose">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExperienceItem>;

export const Current: Story = {};

export const Past: Story = {
  args: {
    workModeLabel: "Remote",
    item: {
      id: "exp-2",
      role: "Junior developer",
      company: { name: "Startup Inc" },
      location: "Remote",
      workMode: "remote",
      period: { start: "2021-01-01", end: "2023-02-01", isCurrent: false },
      summary: "Worked on internal tooling and dashboards.",
      highlights: ["Shipped the internal analytics tool"],
    },
  },
};
