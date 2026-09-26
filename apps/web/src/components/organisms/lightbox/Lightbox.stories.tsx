import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@portfolio/ui";
import { Lightbox } from "./Lightbox";

const photos = [
  {
    src: "https://picsum.photos/seed/lightbox-1/1600/1000",
    width: 1600,
    height: 1000,
    alt: "Photo 1",
  },
  {
    src: "https://picsum.photos/seed/lightbox-2/1600/1000",
    width: 1600,
    height: 1000,
    alt: "Photo 2",
    exif: { camera: "Fujifilm X100V", aperture: "f/2.8" },
  },
];

const meta: Meta<typeof Lightbox> = {
  title: "Organisms/Lightbox",
  component: Lightbox,
  tags: ["autodocs"],
  args: { photos, startIndex: 0, open: true, onOpenChange: () => {} },
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

export const Open: Story = {};

export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open lightbox</Button>
          <Lightbox
            photos={photos}
            startIndex={0}
            open={open}
            onOpenChange={setOpen}
          />
        </>
      );
    }
    return <Demo />;
  },
};
