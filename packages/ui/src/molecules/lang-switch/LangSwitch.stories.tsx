import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { LangSwitch, localeOptions } from "./LangSwitch";

const locales = localeOptions({
  en: "/en/work",
  de: "/de/work",
  fr: "/fr/work",
});

const meta = {
  title: "Molecules/LangSwitch",
  component: LangSwitch,
  args: { current: "en", options: locales, label: "Language" },
} satisfies Meta<typeof LangSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};
export const German: Story = { args: { current: "de" } };

/** Up to 2 locales: the designed "EN / DE" toggle. */
export const TwoLocalesToggle: Story = {
  args: { options: locales.slice(0, 2) },
};

/** 3+ locales: the toggle becomes a menu. */
export const ThreeLocalesMenu: Story = {
  args: { options: locales },
  // Right-aligned, as in the header's tools group.
  decorators: [
    (Story) => (
      <div className="flex justify-end">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("EN"));
    await expect(canvas.getByRole("link", { name: /Français/ })).toBeVisible();
  },
};

/** The menu dialog keeps the inline list regardless of count. */
export const ThreeLocalesInline: Story = {
  args: { options: locales, variant: "inline" },
};
