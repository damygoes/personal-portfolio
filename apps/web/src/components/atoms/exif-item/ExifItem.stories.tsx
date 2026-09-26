import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExifItem } from "./ExifItem";

const meta: Meta<typeof ExifItem> = {
  title: "Atoms/ExifItem",
  component: ExifItem,
  tags: ["autodocs"],
  args: {
    label: "Aperture",
    value: "f/2.8",
  },
};

export default meta;
type Story = StoryObj<typeof ExifItem>;

export const Default: Story = {};

export const Group: Story = {
  render: () => (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <ExifItem label="Camera" value="Fujifilm X100V" />
      <ExifItem label="Lens" value="23mm f/2" />
      <ExifItem label="Aperture" value="f/2.8" />
      <ExifItem label="Shutter speed" value="1/125s" />
    </dl>
  ),
};
