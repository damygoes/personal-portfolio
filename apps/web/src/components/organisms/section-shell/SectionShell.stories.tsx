import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@portfolio/ui";
import { SectionShell } from "./SectionShell";

const meta: Meta<typeof SectionShell> = {
  title: "Organisms/SectionShell",
  component: SectionShell,
  tags: ["autodocs"],
  args: {
    id: "about",
    index: "01",
    heading: "About",
    children: <Text>Section content goes here.</Text>,
  },
};

export default meta;
type Story = StoryObj<typeof SectionShell>;

export const Default: Story = {};
