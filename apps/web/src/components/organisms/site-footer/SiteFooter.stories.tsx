import type { Meta, StoryObj } from "@storybook/react-vite";
import { SiteFooter } from "./SiteFooter";

const meta: Meta<typeof SiteFooter> = {
  title: "Organisms/SiteFooter",
  component: SiteFooter,
  tags: ["autodocs"],
  args: {
    site: {
      locale: "en",
      siteName: "Damilola Bada",
      siteUrl: "https://damilolabada.com",
      defaultDescription: "Fullstack developer.",
      owner: { name: "Damilola Bada", email: "badadamilola@gmail.com" },
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
      nav: [],
      footer: {
        tagline: "Built from scratch, deployed with care.",
        copyrightYear: 2026,
      },
      legalLinks: [
        { title: "Impressum", href: "/en/impressum" },
        { title: "Privacy policy", href: "/en/datenschutz" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
