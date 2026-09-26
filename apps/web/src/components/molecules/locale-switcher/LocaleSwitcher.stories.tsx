import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocaleSwitcher } from "./LocaleSwitcher";

const meta: Meta<typeof LocaleSwitcher> = {
  title: "Molecules/LocaleSwitcher",
  component: LocaleSwitcher,
  tags: ["autodocs"],
  args: {
    alternates: [
      { locale: "en", href: "/en" },
      { locale: "de", href: "/de" },
    ],
    current: "en",
  },
};

export default meta;
type Story = StoryObj<typeof LocaleSwitcher>;

export const Default: Story = {};

export const MissingTranslation: Story = {
  args: {
    alternates: [{ locale: "en", href: "/en" }],
  },
};
