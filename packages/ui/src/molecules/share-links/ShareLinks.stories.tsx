import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShareLinks } from "./ShareLinks";

const meta = {
  title: "Molecules/ShareLinks",
  component: ShareLinks,
  args: {
    url: "https://www.damilolabada.com/en/blog/code-review-team-of-three",
    labels: {
      share: "Share",
      copyLink: "Copy link",
      linkCopied: "Link copied",
    },
    className: "flex-col items-start gap-2",
  },
} satisfies Meta<typeof ShareLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

/** "Copy link" swaps to "Link copied" for 2s and is announced politely. */
export const Default: Story = {};
