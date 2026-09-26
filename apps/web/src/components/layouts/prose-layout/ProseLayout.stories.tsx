import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProseLayout } from "./ProseLayout";

const meta: Meta<typeof ProseLayout> = {
  title: "Layouts/ProseLayout",
  component: ProseLayout,
  tags: ["autodocs"],
  args: {
    locale: "en",
    page: {
      title: "Impressum",
      updatedAt: "2026-01-01T00:00:00.000Z",
      body: [
        {
          _type: "block",
          _key: "body-1",
          style: "normal",
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: "body-1-span",
              text: "Legal notice content goes here.",
            },
          ],
        },
      ],
      seo: {
        title: "Impressum",
        description: "Legal notice.",
        canonicalUrl: "https://damilolabada.com/en/impressum",
        noIndex: true,
        alternates: [],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProseLayout>;

export const Default: Story = {};
