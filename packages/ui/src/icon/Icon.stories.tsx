import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { iconNames } from "./icon-map";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "arrow-right",
    size: "md",
  },
  argTypes: {
    name: { control: "select", options: iconNames },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon name={name} size="md" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6">
      {(
        ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const
      ).map((size) => (
        <div key={size} className="flex flex-col items-center gap-1">
          <Icon name="arrow-right" size={size} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  ),
};
