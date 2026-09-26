import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectLinks } from "./ProjectLinks";

const meta: Meta<typeof ProjectLinks> = {
  title: "Molecules/ProjectLinks",
  component: ProjectLinks,
  tags: ["autodocs"],
  args: {
    links: [
      { kind: "live", href: "https://elliesnote.app" },
      { kind: "appStore", href: "https://apps.apple.com/app/elliesnote" },
      {
        kind: "repository",
        href: "https://github.com/damilolabada/elliesnote",
      },
    ],
    labels: {
      live: "Live site",
      repository: "Source code",
      appStore: "App Store",
      playStore: "Play Store",
      other: "Link",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectLinks>;

export const Default: Story = {};
