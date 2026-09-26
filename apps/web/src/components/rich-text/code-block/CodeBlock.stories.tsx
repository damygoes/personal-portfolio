import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CodeBlock as CodeBlockData } from "@portfolio/contracts";
import { CodeBlock } from "./CodeBlock";

const code = `function add(a: number, b: number) {\n  return a + b;\n}`;

const block: CodeBlockData = {
  _type: "code",
  _key: "code-1",
  language: "typescript",
  code,
  filename: "add.ts",
  highlightedLines: [2],
};

// Pre-rendered Shiki output for the story, since `highlightCode` only runs server-side.
const html = `<pre class="shiki"><code>${code
  .split("\n")
  .map((line) => `<span class="line">${line}</span>`)
  .join("\n")}</code></pre>`;

const meta: Meta<typeof CodeBlock> = {
  title: "RichText/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  args: { block, html },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const WithFilename: Story = {};

export const WithoutFilename: Story = {
  args: { block: { ...block, filename: undefined } },
};
