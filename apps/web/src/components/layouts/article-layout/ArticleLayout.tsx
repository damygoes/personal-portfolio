import type { Post } from "@portfolio/contracts";
import { Container, Divider, Grid, Stack } from "@portfolio/ui";
import { PrevNextNav } from "../../molecules/prev-next-nav/PrevNextNav";
import { TableOfContents } from "../../molecules/table-of-contents/TableOfContents";
import { PostHeader } from "../../organisms/post-header/PostHeader";
import { RelatedPosts } from "../../organisms/related-posts/RelatedPosts";
import {
  RichTextRenderer,
  type RichTextLabels,
} from "../../organisms/rich-text-renderer/RichTextRenderer";

export interface ArticleLayoutProps {
  post: Post;
  locale: string;
  readingTimeLabel: string;
  relatedReadingTimeLabel: (minutes: number) => string;
  updatedLabel?: string;
  tocHeading?: string;
  previousLabel?: string;
  nextLabel?: string;
  relatedHeading?: string;
  codeHtml?: Record<string, string>;
  richTextLabels?: RichTextLabels;
}

function ArticleLayout({
  post,
  locale,
  readingTimeLabel,
  relatedReadingTimeLabel,
  updatedLabel,
  tocHeading,
  previousLabel,
  nextLabel,
  relatedHeading,
  codeHtml,
  richTextLabels,
}: ArticleLayoutProps) {
  return (
    <article data-slot="article-layout">
      <PostHeader
        post={post}
        locale={locale}
        readingTimeLabel={readingTimeLabel}
        updatedLabel={updatedLabel}
      />

      <Container size="wide" className="py-12">
        <Stack gap={12}>
          <Grid cols={{ base: 1, lg: 4 }} gap={12}>
            <div className="max-w-prose lg:col-span-3">
              <RichTextRenderer
                value={post.body}
                variant="article"
                codeHtml={codeHtml}
                labels={richTextLabels}
              />
            </div>
            {post.toc.length > 0 && (
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <TableOfContents entries={post.toc} heading={tocHeading} />
                </div>
              </aside>
            )}
          </Grid>

          <div className="max-w-prose">
            <Divider spacing="none" />
            <div className="pt-16">
              <PrevNextNav
                previous={post.previous}
                next={post.next}
                previousLabel={previousLabel}
                nextLabel={nextLabel}
              />
            </div>
          </div>

          <RelatedPosts
            posts={post.related}
            locale={locale}
            readingTimeLabel={relatedReadingTimeLabel}
            heading={relatedHeading}
          />
        </Stack>
      </Container>
    </article>
  );
}

export { ArticleLayout };
