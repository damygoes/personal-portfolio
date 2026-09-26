import type { Post } from "@portfolio/contracts";
import { Container } from "@portfolio/ui";
import { RelatedPosts } from "../../organisms/related-posts/RelatedPosts";
import { PhotoEssayHeader } from "../../organisms/photo-essay-header/PhotoEssayHeader";
import {
  RichTextRenderer,
  type RichTextLabels,
} from "../../organisms/rich-text-renderer/RichTextRenderer";

export interface PhotoEssayLayoutProps {
  post: Post;
  locale: string;
  photoCountLabel: string;
  relatedReadingTimeLabel: (minutes: number) => string;
  relatedHeading?: string;
  richTextLabels?: RichTextLabels;
}

function PhotoEssayLayout({
  post,
  locale,
  photoCountLabel,
  relatedReadingTimeLabel,
  relatedHeading,
  richTextLabels,
}: PhotoEssayLayoutProps) {
  return (
    <article data-slot="photo-essay-layout">
      <PhotoEssayHeader
        post={post}
        locale={locale}
        photoCountLabel={photoCountLabel}
      />

      <div className="py-8">
        <RichTextRenderer
          value={post.body}
          variant="photoEssay"
          labels={richTextLabels}
        />
      </div>

      <Container size="prose" className="pb-16">
        <RelatedPosts
          posts={post.related}
          locale={locale}
          readingTimeLabel={relatedReadingTimeLabel}
          heading={relatedHeading}
        />
      </Container>
    </article>
  );
}

export { PhotoEssayLayout };
