import type { Meta, StoryObj } from "@storybook/react-vite";
import { Figure, PullQuote } from "./Figure";

const meta = {
  title: "Molecules/Figure",
  component: PullQuote,
  args: {
    text: "A good review leaves both people knowing more than they did before.",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[680px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PullQuote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quote: Story = {};
export const QuoteWithAttribution: Story = {
  args: { attribution: "Name, context" },
};
export const Image: Story = {
  render: () => (
    <Figure
      numberLabel="Fig. 01"
      caption="Damilola Bada"
      image={{
        src: "https://www.damilolabada.com/avatar.jpg",
        alt: "Damilola Bada",
        width: 1099,
        height: 1211,
      }}
    />
  ),
};
