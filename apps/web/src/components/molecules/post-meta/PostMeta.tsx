import type { Category } from "@portfolio/contracts";
import { Chip, FormattedDate, ReadingTime, Text } from "@portfolio/ui";

export interface PostMetaProps {
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  categories: Category[];
  locale: string;
  readingTimeLabel: string;
  updatedLabel?: string;
}

function PostMeta({
  publishedAt,
  updatedAt,
  readingTimeMinutes,
  categories,
  locale,
  readingTimeLabel,
  updatedLabel = "Updated",
}: PostMetaProps) {
  return (
    <div
      data-slot="post-meta"
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
    >
      <FormattedDate date={publishedAt} locale={locale} />
      {updatedAt && (
        <Text as="span" size="sm" tone="muted">
          {updatedLabel} <FormattedDate date={updatedAt} locale={locale} />
        </Text>
      )}
      <span aria-hidden="true">·</span>
      <ReadingTime minutes={readingTimeMinutes} label={readingTimeLabel} />
      <span aria-hidden="true">·</span>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <Chip
            key={category.slug}
            label={category.title}
            href={category.href}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}

export { PostMeta };
