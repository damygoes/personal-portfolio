import type { PostCard as PostCardData } from "@portfolio/contracts";
import { Grid, Text } from "@portfolio/ui";
import { PostCard } from "../../molecules/post-card/PostCard";

export interface PostGridProps {
  posts: PostCardData[];
  locale: string;
  readingTimeLabel: (minutes: number) => string;
  emptyLabel?: string;
}

function PostGrid({
  posts,
  locale,
  readingTimeLabel,
  emptyLabel = "No posts yet.",
}: PostGridProps) {
  if (posts.length === 0) {
    return (
      <Text size="base" tone="muted">
        {emptyLabel}
      </Text>
    );
  }

  return (
    <Grid data-slot="post-grid" cols={{ base: 1, sm: 2, lg: 3 }} gap={8}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          locale={locale}
          readingTimeLabel={readingTimeLabel(post.readingTimeMinutes)}
        />
      ))}
    </Grid>
  );
}

export { PostGrid };
