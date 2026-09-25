import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    children: "Container content",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["prose", "default", "wide", "full"],
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-muted">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container {...args} className="bg-card py-4 text-center">
      {args.children}
    </Container>
  ),
};

export const Prose: Story = {
  args: { size: "prose" },
  render: (args) => (
    <Container {...args} className="bg-card py-4 text-center">
      {args.children}
    </Container>
  ),
};

export const Wide: Story = {
  args: { size: "wide" },
  render: (args) => (
    <Container {...args} className="bg-card py-4 text-center">
      {args.children}
    </Container>
  ),
};

export const Full: Story = {
  args: { size: "full" },
  render: (args) => (
    <Container {...args} className="bg-card py-4 text-center">
      {args.children}
    </Container>
  ),
};
