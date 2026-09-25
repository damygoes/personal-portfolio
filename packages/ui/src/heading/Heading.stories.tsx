import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    level: 1,
    children: "The quick brown fox",
  },
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4],
    },
    size: {
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "display-sm",
        "display-md",
        "display-lg",
        "display-hero",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Level2: Story = {
  args: { level: 2 },
};

export const Level3: Story = {
  args: { level: 3 },
};

export const Level4: Story = {
  args: { level: 4 },
};

export const DisplaySm: Story = {
  args: { level: 2, size: "display-sm" },
};

export const DisplayMd: Story = {
  args: { level: 2, size: "display-md" },
};

export const DisplayLg: Story = {
  args: { level: 2, size: "display-lg" },
};

export const DisplayHero: Story = {
  args: { level: 1, size: "display-hero" },
};

export const SizeDecoupledFromLevel: Story = {
  name: "Small size on an <h1>",
  args: { level: 1, size: "sm" },
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {([1, 2, 3, 4] as const).map((level) => (
        <Heading key={level} level={level}>
          Heading level {level}
        </Heading>
      ))}
    </div>
  ),
};
