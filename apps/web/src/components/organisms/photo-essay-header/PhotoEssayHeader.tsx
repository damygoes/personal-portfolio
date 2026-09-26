import type { Post } from "@portfolio/contracts";
import { Container, FormattedDate, Heading, Img, Stack } from "@portfolio/ui";
import { PhotoSummary } from "../../molecules/photo-summary/PhotoSummary";

export interface PhotoEssayHeaderProps {
  post: Post;
  locale: string;
  photoCountLabel: string;
}

function PhotoEssayHeader({
  post,
  locale,
  photoCountLabel,
}: PhotoEssayHeaderProps) {
  return (
    <header
      data-slot="photo-essay-header"
      className="relative flex h-[80vh] min-h-[480px] items-end"
    >
      <div className="absolute inset-0">
        <Img
          src={post.cover.src}
          alt={post.cover.alt}
          blurDataURL={post.cover.lqip}
          fill
          priority
          sizes="100vw"
          className="brightness-75"
        />
      </div>

      <Container size="wide" className="relative pb-12 text-white">
        <Stack gap={3}>
          <FormattedDate date={post.publishedAt} locale={locale} />
          <Heading level={1} size="2xl">
            {post.title}
          </Heading>
          {post.photoSummary && (
            <PhotoSummary
              summary={post.photoSummary}
              photoCountLabel={photoCountLabel}
            />
          )}
        </Stack>
      </Container>
    </header>
  );
}

export { PhotoEssayHeader };
