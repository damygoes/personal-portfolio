import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { ExperienceList, SkillsBand } from "./Experience";

const meta = {
  title: "Organisms/Experience",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  render: withData((d) => (
    <ExperienceList
      items={d.about.experience}
      since={d.about.experienceSince}
      number="01"
      dict={d.dict}
    />
  )),
};
export const Skills: Story = {
  render: withData((d) => (
    <SkillsBand
      groups={d.about.skills}
      intro={d.about.skillsIntro}
      number="02"
      dict={d.dict}
    />
  )),
};
