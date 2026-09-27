import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { SkillCol } from "./SkillCol";

const meta = {
  title: "Molecules/SkillCol",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnBand: Story = {
  render: withData((data) => (
    <div className="band grid max-w-[720px] grid-cols-2 gap-6 p-10">
      {data.about.skills.slice(0, 2).map((group) => (
        <SkillCol key={group.title} group={group} />
      ))}
    </div>
  )),
};
