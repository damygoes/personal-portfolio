import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { ContactCTA, ContactSection } from "./Contact";

const meta = {
  title: "Organisms/Contact",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeSection: Story = {
  render: withData((d) => (
    <ContactSection site={d.site} dict={d.dict} number="04" />
  )),
};
export const CtaBand: Story = {
  render: withData((d) => <ContactCTA site={d.site} dict={d.dict} />),
};
