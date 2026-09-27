import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { FeaturedPost, PostGrid } from "./PostList";

const meta = {
  title: "Organisms/PostList",
  parameters: { layout: "fullscreen" },
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <FeaturedPost post={d.blog.featured!} dict={d.dict} />
    </div>
  )),
};
export const HomeGrid: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <PostGrid posts={d.home.latestPosts} dict={d.dict} variant="home" />
    </div>
  )),
};
export const BlogGrid: Story = {
  render: withData((d) => (
    <div className="wrap py-12">
      <PostGrid posts={d.blog.posts} dict={d.dict} variant="grid" />
    </div>
  )),
};
