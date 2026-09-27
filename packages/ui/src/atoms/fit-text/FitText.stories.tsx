import type { Meta, StoryObj } from "@storybook/react-vite";
import { FitText } from "./FitText";

const meta = {
  title: "Atoms/FitText",
  component: FitText,
  args: {
    as: "h2",
    min: 36,
    className: "type-display t-hero",
    children: "Zusammenarbeiten.",
  },
} satisfies Meta<typeof FitText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Resize the canvas: the headline steps down instead of overflowing. */
export const LongGermanWord: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[600px] resize-x overflow-hidden border border-dashed border-border p-4">
        <Story />
      </div>
    ),
  ],
};
export const FitsAlready: Story = { args: { children: "Selected" } };
