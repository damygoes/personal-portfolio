import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { ExperienceRow } from "./ExperienceRow";

const meta = {
  title: "Molecules/ExperienceRow",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const labels = (data: Parameters<Parameters<typeof withData>[0]>[0]) => ({
  now: data.dict.common.now,
  workMode: data.dict.about.workMode,
});

/** Hover on desktop: the row lifts to --card and a spark arrow slides in. */
export const Current: Story = {
  render: withData((data) => (
    <ol className="border-t border-fg">
      <ExperienceRow item={data.about.experience[0]!} labels={labels(data)} />
    </ol>
  )),
};
export const WithBullets: Story = {
  render: withData((data) => (
    <ol className="border-t border-fg">
      <ExperienceRow item={data.about.experience[1]!} labels={labels(data)} />
    </ol>
  )),
};
