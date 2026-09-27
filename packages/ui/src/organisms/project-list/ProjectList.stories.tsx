import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { FeaturedProjects, MoreRow, ProjectGrid } from "./ProjectList";

const meta = {
  title: "Organisms/ProjectList",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <FeaturedProjects projects={d.work.featured} dict={d.dict} />
    </div>
  )),
};
export const MoreAndGrid: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <MoreRow
        left={
          <p className="label">
            <span className="num">{d.dict.work.moreLabel}</span> ·{" "}
            {d.dict.work.more}
          </p>
        }
        right={
          <SweepLink href="https://github.com/damygoes" arrow="up-right" soft>
            {d.dict.work.allOnGithub}
          </SweepLink>
        }
      />
      <ProjectGrid projects={d.work.others} dict={d.dict} />
    </div>
  )),
};
