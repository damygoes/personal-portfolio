import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { LangSwitch, localeOptions, type LangOption } from "./LangSwitch";

const twoLocales = localeOptions({ en: "/en/work", de: "/de/work" });

/** A hypothetical third locale, to preview the 3+ menu before one ships. */
const threeLocales: LangOption[] = [
  ...twoLocales,
  { code: "fr", label: "FR", name: "Français", href: "/fr/work" },
];

const meta = {
  title: "Molecules/LangSwitch",
  component: LangSwitch,
  args: { current: "en", options: twoLocales, label: "Language" },
} satisfies Meta<typeof LangSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};
export const German: Story = { args: { current: "de" } };

/** 3+ locales: the toggle becomes a menu. Needs a design pass before a third locale ships. */
export const ThreeLocalesMenu: Story = {
  args: { options: threeLocales },
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
  args: { options: threeLocales, variant: "inline" },
};
