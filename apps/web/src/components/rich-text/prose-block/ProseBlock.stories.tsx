import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProseBlock } from "./ProseBlock";

const meta: Meta<typeof ProseBlock> = {
  title: "RichText/ProseBlock",
  component: ProseBlock,
  tags: ["autodocs"],
  args: {
    block: {
      _type: "block",
      _key: "intro",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "intro-span-1",
          text: "A short introduction paragraph with ",
          marks: [],
        },
        {
          _type: "span",
          _key: "intro-span-2",
          text: "bold",
          marks: ["strong"],
        },
        { _type: "span", _key: "intro-span-3", text: " and ", marks: [] },
        { _type: "span", _key: "intro-span-4", text: "italic", marks: ["em"] },
        { _type: "span", _key: "intro-span-5", text: " text.", marks: [] },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProseBlock>;

export const Normal: Story = {};

export const Blockquote: Story = {
  args: {
    block: {
      _type: "block",
      _key: "quote",
      style: "blockquote",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "quote-span",
          text: "A quoted paragraph.",
          marks: [],
        },
      ],
    },
  },
};

export const ListItem: Story = {
  render: () => (
    <ul className="list-disc pl-5">
      <ProseBlock
        block={{
          _type: "block",
          _key: "item-1",
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "item-1-span",
              text: "First item",
              marks: [],
            },
          ],
        }}
      />
      <ProseBlock
        block={{
          _type: "block",
          _key: "item-2",
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "item-2-span",
              text: "Second item",
              marks: [],
            },
          ],
        }}
      />
    </ul>
  ),
};
