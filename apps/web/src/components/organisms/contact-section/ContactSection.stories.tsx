import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactSection } from "./ContactSection";

const meta: Meta<typeof ContactSection> = {
  title: "Organisms/ContactSection",
  component: ContactSection,
  tags: ["autodocs"],
  args: {
    section: {
      id: "contact",
      index: "05",
      heading: "Contact",
      body: "I'm always happy to chat — just reach out.",
      cta: { label: "Send an email", email: "badadamilola@gmail.com" },
      socials: [
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
  },
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {};
