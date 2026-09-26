import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableOfContents } from "./TableOfContents";

const meta: Meta<typeof TableOfContents> = {
  title: "Molecules/TableOfContents",
  component: TableOfContents,
  tags: ["autodocs"],
  args: {
    entries: [
      { id: "intro", text: "Introduction", level: 2 },
      { id: "packages", text: "Splitting into packages", level: 2 },
      { id: "packages-ui", text: "packages/ui", level: 3 },
      { id: "conclusion", text: "Conclusion", level: 2 },
    ],
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {};
