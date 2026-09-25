import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "label", "strong", "em", "small"],
    },
    size: {
      control: "select",
      options: [
        "2xs",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
    },
    tone: {
      control: "select",
      options: ["default", "muted"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Muted: Story = {
  args: { tone: "muted" },
};

export const Bold: Story = {
  args: { weight: "bold" },
};

export const AsSpan: Story = {
  args: { as: "span" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(
        [
          "2xs",
          "xs",
          "sm",
          "base",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
        ] as const
      ).map((size) => (
        <Text key={size} size={size}>
          Size {size} — the quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["normal", "medium", "semibold", "bold"] as const).map((weight) => (
        <Text key={weight} weight={weight}>
          Weight {weight} — the quick brown fox
        </Text>
      ))}
    </div>
  ),
};
