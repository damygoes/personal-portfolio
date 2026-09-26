import type { Post } from "@portfolio/contracts";
import { Container, Heading, Img, Stack } from "@portfolio/ui";
import { PostMeta } from "../../molecules/post-meta/PostMeta";

export interface PostHeaderProps {
  post: Post;
  locale: string;
  readingTimeLabel: string;
  updatedLabel?: string;
}

function PostHeader({
  post,
  locale,
  readingTimeLabel,
  updatedLabel,
}: PostHeaderProps) {
  return (
    <header data-slot="post-header" className="py-16">
      <Container size="prose">
        <Stack gap={4}>
          <Heading level={1} size="2xl">
            {post.title}
          </Heading>
          <PostMeta
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
            readingTimeMinutes={post.readingTimeMinutes}
            categories={post.categories}
            locale={locale}
            readingTimeLabel={readingTimeLabel}
            updatedLabel={updatedLabel}
          />
        </Stack>
      </Container>
      <Container size="wide" className="mt-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-secondary">
          <Img
            src={post.cover.src}
            alt={post.cover.alt}
            blurDataURL={post.cover.lqip}
            fill
            priority
            sizes="100vw"
          />
        </div>
      </Container>
    </header>
  );
}

export { PostHeader };
