import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { CodeBlock } from "./CodeBlock";

const meta = {
  title: "Molecules/CodeBlock",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Highlighted: Story = {
  render: withData((data) => {
    const block = data.post.body.find((b) => b._type === "code");
    return block?._type === "code" ? (
      <CodeBlock block={block} className="max-w-[680px]" />
    ) : (
      <></>
    );
  }),
};
export const PlainText: Story = {
  render: () => (
    <CodeBlock
      className="max-w-[680px]"
      block={{
        code: "pnpm dev",
        language: "bash",
        languageLabel: "Shell",
        filename: "terminal",
      }}
    />
  ),
};
