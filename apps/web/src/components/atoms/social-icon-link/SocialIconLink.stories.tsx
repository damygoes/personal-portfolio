import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialIconLink } from "./SocialIconLink";

const meta: Meta<typeof SocialIconLink> = {
  title: "Atoms/SocialIconLink",
  component: SocialIconLink,
  tags: ["autodocs"],
  args: {
    link: {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/damilolabada",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialIconLink>;

export const Default: Story = {};

export const LinkedIn: Story = {
  args: {
    link: {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/damilolabada",
    },
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex gap-2">
      <SocialIconLink
        link={{ platform: "github", label: "GitHub", href: "#" }}
      />
      <SocialIconLink
        link={{ platform: "linkedin", label: "LinkedIn", href: "#" }}
      />
      <SocialIconLink
        link={{ platform: "other", label: "Website", href: "#" }}
      />
    </div>
  ),
};
