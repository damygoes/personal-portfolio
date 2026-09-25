import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  args: {
    value: "hello@example.com",
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {};

export const CustomLabels: Story = {
  args: { label: "Copy email", copiedLabel: "Email copied" },
};

export const WithCodeSnippet: Story = {
  render: (args) => (
    <div className="flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm">
      <code>npm install @portfolio/ui</code>
      <CopyButton {...args} value="npm install @portfolio/ui" />
    </div>
  ),
};
