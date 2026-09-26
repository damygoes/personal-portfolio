import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialLinks } from "./SocialLinks";

const meta: Meta<typeof SocialLinks> = {
  title: "Molecules/SocialLinks",
  component: SocialLinks,
  tags: ["autodocs"],
  args: {
    links: [
      {
        platform: "github",
        label: "GitHub",
        href: "https://github.com/damilolabada",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/in/damilolabada",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {};
