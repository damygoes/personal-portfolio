import type { Meta, StoryObj } from "@storybook/react-vite";
import { TranslationNotice } from "./TranslationNotice";

const meta: Meta<typeof TranslationNotice> = {
  title: "Molecules/TranslationNotice",
  component: TranslationNotice,
  tags: ["autodocs"],
  args: {
    targetLocale: "de",
    message:
      "This post isn't available in German yet — showing the English version.",
  },
};

export default meta;
type Story = StoryObj<typeof TranslationNotice>;

export const Default: Story = {};
