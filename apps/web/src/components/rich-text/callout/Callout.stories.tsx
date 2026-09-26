import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";

const body = (text: string) => [
  {
    _type: "block" as const,
    _key: "body-1",
    style: "normal" as const,
    markDefs: [],
    children: [
      { _type: "span" as const, _key: "body-1-span", text, marks: [] },
    ],
  },
];

const meta: Meta<typeof Callout> = {
  title: "RichText/Callout",
  component: Callout,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    block: {
      _type: "callout",
      _key: "c1",
      tone: "info",
      body: body("Good to know: this applies to both locales."),
    },
  },
};

export const Tip: Story = {
  args: {
    block: {
      _type: "callout",
      _key: "c2",
      tone: "tip",
      body: body("You can skip this step if you already have pnpm installed."),
    },
  },
};

export const Warning: Story = {
  args: {
    block: {
      _type: "callout",
      _key: "c3",
      tone: "warning",
      body: body("This will overwrite your local changes."),
    },
  },
};
