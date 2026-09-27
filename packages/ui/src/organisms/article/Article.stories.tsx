import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { ArticleLayout, PostCover, PostHeader, RelatedPosts } from "./Article";
import { Prose } from "./Prose";

const meta = {
  title: "Organisms/Article",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  render: withData((d) => (
    <PostHeader post={d.post} dict={d.dict} blogHref="/en/blog" />
  )),
};
export const Cover: Story = {
  render: withData((d) => <PostCover post={d.post} />),
};
/** Desktop: TOC · prose · share. Tablet/mobile: no TOC, share below. */
export const Layout: Story = {
  render: withData((d) => (
    <ArticleLayout
      post={d.post}
      dict={d.dict}
      site={d.site}
      aboutHref="/en/about"
    />
  )),
};
export const ProseOnly: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <Prose
        blocks={d.post.body}
        figLabel={d.dict.blog.fig}
        className="max-w-[680px]"
      />
    </div>
  )),
};
export const Related: Story = {
  render: withData((d) => (
    <RelatedPosts post={d.post} dict={d.dict} blogHref="/en/blog" />
  )),
};
