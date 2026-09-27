import type { Meta, StoryObj } from "@storybook/react-vite";
import { loadStoryData, withData } from "../../stories/story-data";
import { PostCard } from "./PostCard";

const meta = {
  title: "Molecules/PostCard",
  loaders: [loadStoryData],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const minutes = (n: number) => `${n} min`;

export const Grid: Story = {
  render: withData((data) => {
    const post = data.blog.posts[0]!;
    return (
      <PostCard
        post={post}
        minutesLabel={minutes(post.readingMinutes)}
        className="max-w-[420px]"
      />
    );
  }),
};
/** Horizontal 5/7 layout on tablet (home, related posts). */
export const Row: Story = {
  render: withData((data) => {
    const post = data.blog.posts[1]!;
    return (
      <PostCard
        post={post}
        variant="row"
        minutesLabel={minutes(post.readingMinutes)}
      />
    );
  }),
};
export const AllTones: Story = {
  render: withData((data) => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {[data.blog.featured!, ...data.blog.posts.slice(0, 3)].map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          minutesLabel={minutes(post.readingMinutes)}
        />
      ))}
    </div>
  )),
};
