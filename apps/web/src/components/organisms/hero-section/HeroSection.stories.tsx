import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  args: {
    facts: ["Based in Germany", "Fullstack developer", "4+ yrs experience"],
    hero: {
      name: "Damilola Bada",
      facts: {
        location: "Germany",
        role: "Fullstack developer",
        yearsOfExperience: 4,
      },
      intro:
        "I build thoughtful, performant web experiences — from design system to production.",
      primaryCta: {
        label: "Get in touch",
        href: "/en#contact",
        external: false,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const WithCv: Story = {
  args: {
    cv: { href: "/cv/damilola-bada-en.pdf", fileName: "damilola-bada-en.pdf" },
  },
};
