import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { AboutFull, AboutTeaser } from "./About";

const meta = {
  title: "Organisms/About",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Teaser: Story = {
  render: withData((d) => (
    <AboutTeaser
      about={d.home.about}
      site={d.site}
      dict={d.dict}
      number="02"
      aboutHref="/en/about"
    />
  )),
};
export const Full: Story = {
  render: withData((d) => (
    <AboutFull about={d.about.about} site={d.site} dict={d.dict} />
  )),
};
