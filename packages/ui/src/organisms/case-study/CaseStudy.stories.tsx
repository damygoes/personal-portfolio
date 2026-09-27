import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { CaseCover, CaseHero } from "./CaseHero";
import { CaseSections, NextProject } from "./CaseSections";

const meta = {
  title: "Organisms/CaseStudy",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  render: withData((d) => (
    <CaseHero study={d.passe} dict={d.dict} workHref="/en/work" />
  )),
};
/** ElliesNote: solid + outlined title. */
export const HeroSplitTitle: Story = {
  render: withData((d) => (
    <CaseHero study={d.ellies} dict={d.dict} workHref="/en/work" />
  )),
};
export const CoverWarm: Story = {
  render: withData((d) => <CaseCover study={d.passe} dict={d.dict} />),
};
export const CoverLagoon: Story = {
  render: withData((d) => <CaseCover study={d.ellies} dict={d.dict} />),
};
/** All six block types except the quote (no outcome content yet); empty sections are skipped. */
export const Sections: Story = {
  render: withData((d) => <CaseSections study={d.passe} />),
};
export const NextCaseStudy: Story = {
  render: withData((d) => <NextProject study={d.passe} dict={d.dict} />),
};
export const NextAllWork: Story = {
  render: withData((d) => <NextProject study={d.ellies} dict={d.dict} />),
};
