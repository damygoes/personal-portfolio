import type { PostCard as PostCardData } from "@portfolio/contracts";
import {
  Chip,
  FormattedDate,
  Heading,
  Img,
  Link,
  ReadingTime,
  Stack,
  Text,
} from "@portfolio/ui";
import { cn } from "@portfolio/utils";

export interface PostCardProps {
  post: PostCardData;
  locale: string;
  readingTimeLabel: string;
  variant?: "default" | "featured" | "compact";
}

function PostCard({
  post,
  locale,
  readingTimeLabel,
  variant = "default",
}: PostCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  return (
    <Link
      href={post.href}
      underline="none"
      data-slot="post-card"
      data-sanity={post.editTarget}
      className={cn(
        "group flex gap-4",
        isCompact ? "flex-row items-center" : "flex-col",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-secondary",
          isCompact
            ? "aspect-square w-20 shrink-0"
            : isFeatured
              ? "aspect-[16/9]"
              : "aspect-[4/3]",
        )}
      >
        <Img
          src={post.cover.src}
          alt={post.cover.alt}
          blurDataURL={post.cover.lqip}
          fill
          sizes={isCompact ? "80px" : "(min-width: 1024px) 33vw, 100vw"}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <Stack gap={isCompact ? 1 : 2}>
        <div className="flex flex-wrap gap-1.5">
          {post.categories.map((category) => (
            <Chip key={category.slug} label={category.title} size="sm" />
          ))}
        </div>
        <Heading level={3} size={isCompact ? "sm" : isFeatured ? "lg" : "md"}>
          {post.title}
        </Heading>
        {!isCompact && (
          <Text size="base" tone="muted">
            {post.excerpt}
          </Text>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FormattedDate date={post.publishedAt} locale={locale} />
          <span aria-hidden="true">·</span>
          <ReadingTime
            minutes={post.readingTimeMinutes}
            label={readingTimeLabel}
          />
        </div>
      </Stack>
    </Link>
  );
}

export { PostCard };
