import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ghost, ImageFrame } from "./ImageFrame";

const meta = {
  title: "Atoms/ImageFrame",
  component: ImageFrame,
} satisfies Meta<typeof ImageFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

const tones = [
  "tone-lagoon",
  "tone-warm",
  "tone-stone",
  "tone-ink",
  "cover-warm",
  "tone-card border border-border",
];

/** Without an image, the ghost word/numeral is the decoration. */
export const Tones: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      {tones.map((tone, i) => (
        <ImageFrame
          key={tone}
          className={`h-[300px] rounded-2xl ${tone}`}
          zoom="flex items-center justify-center"
          fallback={
            <Ghost className="bottom-[-36px] left-5 text-[180px]">
              {["Ship", "Ride", "Light", "Code", "01", "03"][i]}
            </Ghost>
          }
        />
      ))}
    </div>
  ),
};

/** With an image the ghost is dropped and the image covers the box. */
export const WithImage: Story = {
  args: {
    className: "h-[520px] w-[400px] rounded-3xl border border-border bg-card",
    image: {
      src: "https://www.damilolabada.com/avatar.jpg",
      alt: "Damilola Bada",
      width: 1099,
      height: 1211,
    },
    fallback: (
      <Ghost className="bottom-[-40px] left-[-12px] text-[280px]">DB</Ghost>
    ),
  },
};
