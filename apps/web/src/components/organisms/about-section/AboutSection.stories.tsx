import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutSection } from "./AboutSection";

const meta: Meta<typeof AboutSection> = {
  title: "Organisms/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
  args: {
    section: {
      id: "about",
      index: "01",
      heading: "About",
      portrait: {
        src: "https://picsum.photos/seed/portrait/800/1000",
        width: 800,
        height: 1000,
        alt: "Portrait photo",
      },
      body: [
        {
          _type: "block",
          _key: "about-p1",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "about-p1-span",
              text: "A short bio paragraph.",
            },
          ],
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
