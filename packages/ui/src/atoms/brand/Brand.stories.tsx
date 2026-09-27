import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Brand } from "./Brand";

const meta = {
  title: "Atoms/Brand",
  component: Brand,
  args: { href: "/en", initials: "DB", label: "Damilola Bada, home" },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AvatarCircle: Story = {
  name: "Avatar",
  render: () => <Avatar initials="DB" />,
};
