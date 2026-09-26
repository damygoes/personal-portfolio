import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProseHeading } from "./ProseHeading";

const meta: Meta<typeof ProseHeading> = {
  title: "RichText/ProseHeading",
  component: ProseHeading,
  tags: ["autodocs"],
  args: {
    block: {
      _type: "block",
      _key: "packages",
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "packages-span",
          text: "Splitting into packages",
          marks: [],
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProseHeading>;

export const H2: Story = {};

export const H3: Story = {
  args: {
    block: {
      _type: "block",
      _key: "packages-ui",
      style: "h3",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "packages-ui-span",
          text: "packages/ui",
          marks: [],
        },
      ],
    },
  },
};
