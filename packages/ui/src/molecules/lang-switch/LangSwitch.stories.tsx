import type { Meta, StoryObj } from "@storybook/react-vite";
import { LangSwitch } from "./LangSwitch";

const meta = {
  title: "Molecules/LangSwitch",
  component: LangSwitch,
  args: {
    locale: "en",
    alternates: { en: "/en/work", de: "/de/work" },
    labels: { en: "EN", de: "DE" },
  },
} satisfies Meta<typeof LangSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};
export const German: Story = { args: { locale: "de" } };
