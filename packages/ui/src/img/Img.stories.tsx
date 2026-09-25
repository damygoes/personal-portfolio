import type { Meta, StoryObj } from "@storybook/react-vite";
import { Img } from "./Img";

const PHOTO = "https://picsum.photos/seed/portfolio/800/600";
const BLUR =
  "data:image/svg+xml;base64," +
  btoa(
    '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6"><rect width="8" height="6" fill="#d5dcdb"/></svg>',
  );

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
  args: {
    src: PHOTO,
    alt: "A placeholder landscape photo",
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {};

export const WithBlurPlaceholder: Story = {
  args: { blurDataURL: BLUR },
};

export const Fill: Story = {
  args: { fill: true, objectPosition: "center top" },
  render: (args) => (
    <div className="relative h-64 w-96 overflow-hidden rounded-lg">
      <Img {...args} />
    </div>
  ),
};

export const Priority: Story = {
  args: { priority: true },
};
