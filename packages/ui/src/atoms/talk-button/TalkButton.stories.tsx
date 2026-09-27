import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkipLink, TalkButton } from "./TalkButton";

const meta = {
  title: "Atoms/TalkButton",
  component: TalkButton,
  args: { children: "Let's talk" },
} satisfies Meta<typeof TalkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
/** Press Tab: the skip link appears top-left. */
export const Skip: Story = {
  render: () => <SkipLink>Skip to content</SkipLink>,
};
