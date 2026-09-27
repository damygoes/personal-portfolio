import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Molecules/ProjectCard",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: withData((data) => (
    <div className="max-w-[440px]">
      <ProjectCard
        project={data.work.others[0]!}
        labels={{
          readCaseStudy: data.dict.common.readCaseStudy,
          viewOnGithub: data.dict.common.viewOnGithub,
        }}
      />
    </div>
  )),
};
