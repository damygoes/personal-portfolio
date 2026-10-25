import type { Meta, StoryObj } from "@storybook/react-vite";
import { Runs } from "./Runs";

const meta = {
  title: "Atoms/Runs",
  component: Runs,
  args: {
    runs: [
      {
        text: "That belief in solving real problems simply carries into my own products too — like ",
      },
      { text: "Passe.", strong: true },
      { text: ", a private-by-default travel journal, and " },
      { text: "ElliesNote", href: "/en/work/elliesnote" },
      { text: "." },
    ],
  },
  decorators: [
    (Story) => (
      <p className="t-body-lg max-w-[480px]">
        <Story />
      </p>
    ),
  ],
} satisfies Meta<typeof Runs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Highlight: Story = {
  args: {
    runs: [
      {
        text: "I got into software development because I wanted to build things that ",
      },
      { text: "actually help people", highlight: true },
    ],
  },
};
