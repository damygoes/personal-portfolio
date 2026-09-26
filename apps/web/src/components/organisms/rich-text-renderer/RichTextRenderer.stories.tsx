import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RichText } from "@portfolio/contracts";
import { RichTextRenderer } from "./RichTextRenderer";

const value: RichText = [
  {
    _type: "block",
    _key: "intro",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "intro-span",
        text: "A short introduction paragraph.",
      },
    ],
  },
  {
    _type: "block",
    _key: "h2-1",
    style: "h2",
    markDefs: [],
    children: [
      { _type: "span", _key: "h2-1-span", text: "Splitting into packages" },
    ],
  },
  {
    _type: "block",
    _key: "li-1",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      { _type: "span", _key: "li-1-span", text: "packages/ui for primitives" },
    ],
  },
  {
    _type: "block",
    _key: "li-2",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "li-2-span",
        text: "apps/web for everything else",
      },
    ],
  },
  {
    _type: "callout",
    _key: "callout-1",
    tone: "tip",
    body: [
      {
        _type: "block",
        _key: "callout-1-body",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "callout-1-body-span",
            text: "You can mix and match blocks freely.",
          },
        ],
      },
    ],
  },
  {
    _type: "figure",
    _key: "figure-1",
    size: "wide",
    showExif: false,
    image: {
      src: "https://picsum.photos/seed/richtext/1200/800",
      width: 1200,
      height: 800,
      alt: "A laptop on a desk",
    },
  },
];

const meta: Meta<typeof RichTextRenderer> = {
  title: "Organisms/RichTextRenderer",
  component: RichTextRenderer,
  tags: ["autodocs"],
  args: { value },
  decorators: [
    (Story) => (
      <div className="max-w-prose">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RichTextRenderer>;

export const Article: Story = {};

export const Compact: Story = {
  args: { variant: "compact" },
};
