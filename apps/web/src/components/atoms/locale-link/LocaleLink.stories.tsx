import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocaleLink } from "./LocaleLink";

const meta: Meta<typeof LocaleLink> = {
  title: "Atoms/LocaleLink",
  component: LocaleLink,
  tags: ["autodocs"],
  args: {
    locale: "en",
    href: "/en",
    label: "EN",
    active: true,
  },
};

export default meta;
type Story = StoryObj<typeof LocaleLink>;

export const Active: Story = {};

export const Inactive: Story = {
  args: { active: false },
};

export const Group: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <LocaleLink locale="en" href="/en" label="EN" active />
      <span aria-hidden="true" className="text-muted-foreground">
        /
      </span>
      <LocaleLink locale="de" href="/de" label="DE" active={false} />
    </div>
  ),
};
