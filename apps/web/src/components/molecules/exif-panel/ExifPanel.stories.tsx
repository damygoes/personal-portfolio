import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExifPanel } from "./ExifPanel";

const meta: Meta<typeof ExifPanel> = {
  title: "Molecules/ExifPanel",
  component: ExifPanel,
  tags: ["autodocs"],
  args: {
    exif: {
      camera: "Fujifilm X100V",
      lens: "23mm f/2",
      focalLength: "23mm",
      aperture: "f/2.8",
      shutterSpeed: "1/125s",
      iso: 400,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExifPanel>;

export const Inline: Story = {};

export const Overlay: Story = {
  args: { variant: "overlay" },
  decorators: [
    (Story) => (
      <div className="relative h-40 w-full max-w-md bg-secondary">
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: { exif: {} },
};
