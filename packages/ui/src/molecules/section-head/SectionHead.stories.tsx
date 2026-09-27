import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { TitleLines } from "../title-lines/TitleLines";
import { SectionHead } from "./SectionHead";

const meta = {
  title: "Molecules/SectionHead",
  component: SectionHead,
  args: {
    label: <SectionLabel number="01">Selected work</SectionLabel>,
    title: <TitleLines lines={["Selected", "work"]} />,
    aside: (
      <p className="t-body max-w-[360px]">
        Products I&apos;ve designed, built and shipped — most recent first.
      </p>
    ),
  },
} satisfies Meta<typeof SectionHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {};
export const WithLink: Story = {
  args: {
    label: <SectionLabel number="03">Blog</SectionLabel>,
    title: <TitleLines lines={["Latest", "writing"]} />,
    aside: (
      <SweepLink href="/en/blog" arrow="right">
        All posts
      </SweepLink>
    ),
  },
};
