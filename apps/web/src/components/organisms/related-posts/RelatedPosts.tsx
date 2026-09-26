import type { PostCard as PostCardData } from "@portfolio/contracts";
import { Grid, Heading, Stack } from "@portfolio/ui";
import { PostCard } from "../../molecules/post-card/PostCard";

export interface RelatedPostsProps {
  posts: PostCardData[];
  locale: string;
  readingTimeLabel: (minutes: number) => string;
  heading?: string;
}

function RelatedPosts({
  posts,
  locale,
  readingTimeLabel,
  heading = "Related posts",
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <Stack gap={6} data-slot="related-posts">
      <Heading level={2} size="lg">
        {heading}
      </Heading>
      <Grid cols={{ base: 1, sm: 3 }} gap={6}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            locale={locale}
            readingTimeLabel={readingTimeLabel(post.readingTimeMinutes)}
            variant="compact"
          />
        ))}
      </Grid>
    </Stack>
  );
}

export { RelatedPosts };
