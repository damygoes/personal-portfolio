import type { PostDTO, SiteSettingsDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn, formatMessage } from "@portfolio/utils";
import { ChipList } from "../../atoms/chip/ChipList";
import { Avatar } from "../../atoms/brand/Brand";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Crumbs } from "../../molecules/crumbs/Crumbs";
import { PostMeta, toneClass } from "../../molecules/post-card/PostCard";
import { SectionHead } from "../../molecules/section-head/SectionHead";
import { ShareLinks } from "../../molecules/share-links/ShareLinks";
import { Toc } from "../../molecules/toc/Toc";
import { PostGrid } from "../post-list/PostList";
import { Prose } from "./Prose";

interface PostProps {
  post: PostDTO;
  dict: Dictionary;
}

/** Crumbs, meta, the title with a spark dot, lede and author. */
function PostHeader({
  post,
  dict,
  blogHref,
}: PostProps & { blogHref: string }) {
  return (
    <section
      data-slot="post-header"
      {...post.editAttrs}
      aria-labelledby="post-title"
      className="wrap flex flex-col gap-7 pt-6 pb-10 sm:gap-10 sm:pt-10 sm:pb-16"
    >
      <Crumbs
        label={dict.nav.breadcrumb}
        items={[
          { label: dict.blog.allWriting, href: blogHref },
          { label: post.category.title },
        ]}
      />
      <PostMeta
        post={post}
        minutesLabel={formatMessage(dict.common.minRead, {
          n: post.readingMinutes,
        })}
      />
      <h1 id="post-title" className="ph-title max-w-[1180px] font-display">
        {post.title}
        <Dot />
      </h1>
      <div className="g12 items-end gap-y-8">
        <p className="col-span-12 text-[19px] leading-[1.45] text-pretty text-fg-soft sm:text-[22px] lg:col-span-7 lg:text-2xl">
          {post.excerpt}
        </p>
        <div className="col-span-12 flex items-center justify-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
          <Avatar initials={post.author.initials} />
          <div>
            <p className="text-[16px] font-semibold">{post.author.name}</p>
            <p className="label-2xs text-muted">{post.author.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Full-bleed tone cover with the ghost word (680 / 460 / 280). */
function PostCover({ post }: { post: PostDTO }) {
  return (
    <ImageFrame
      image={post.cover}
      priority
      sizes="100vw"
      className={cn(
        "flex h-[280px] items-center justify-center sm:h-[460px] lg:h-[680px]",
        toneClass[post.tone],
      )}
      fallback={
        <Ghost className="bottom-[-40px] left-3 text-[200px] sm:bottom-[-70px] sm:left-8 sm:text-[340px] lg:bottom-[-110px] lg:left-12 lg:text-[520px]">
          {post.ghost}
        </Ghost>
      }
    />
  );
}

/**
 * Desktop: sticky TOC (1–3) · prose (4–9) · sticky share (11–12). Tablet/mobile: no TOC,
 * centred prose, share below. Then the categories and the author bio.
 */
function ArticleLayout({
  post,
  dict,
  site,
  aboutHref,
  shareUrl,
}: PostProps & {
  site: SiteSettingsDTO;
  aboutHref: string;
  shareUrl?: string;
}) {
  const gitHub = site.socials.find((s) => s.label === "GitHub");
  return (
    <div className="g12 wrap items-start pt-12 pb-20 sm:pt-[72px] sm:pb-24 lg:pt-24 lg:pb-32">
      <Toc
        entries={post.toc}
        label={dict.blog.onThisPage}
        className="sticky top-6 hidden lg:col-span-3 lg:flex"
      />
      <Prose
        blocks={post.body}
        figLabel={dict.blog.fig}
        className="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-4"
      />
      <ShareLinks
        url={shareUrl}
        labels={dict.blog}
        className="col-span-12 mt-12 flex-row flex-wrap items-start gap-6 border-t border-divider pt-4 sm:col-span-10 sm:col-start-2 lg:sticky lg:top-6 lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start lg:gap-2 lg:border-t-0 lg:pt-0"
      />
      <div className="col-span-12 mt-16 flex flex-col gap-10 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-4">
        <ChipList items={post.categories.map((c) => c.title)} />
        <div className="flex items-start gap-5 border-t border-fg pt-8">
          <Avatar initials={post.author.initials} />
          <div className="flex flex-col gap-2">
            <p className="label-2xs text-muted">{dict.blog.writtenBy}</p>
            <p className="font-display text-2xl leading-[1.2] font-bold">
              {post.author.name}
            </p>
            {post.author.bio && <p className="t-body">{post.author.bio}</p>}
            <div className="flex flex-wrap gap-8">
              <SweepLink href={aboutHref} arrow="right">
                {dict.blog.aboutMe}
              </SweepLink>
              {gitHub && (
                <SweepLink href={gitHub.href} arrow="up-right" soft>
                  {gitHub.label}
                </SweepLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "More from the blog — KEEP / READING." + 3 posts. */
function RelatedPosts({
  post,
  dict,
  blogHref,
}: PostProps & { blogHref: string }) {
  if (!post.related.length) return null;
  const [first, second] = dict.blog.keepReading;
  return (
    <section
      data-slot="related-posts"
      aria-labelledby="related-title"
      className="wrap border-t border-divider py-20 sm:py-24 lg:py-32"
    >
      <SectionHead
        label={<p className="label text-muted">{dict.blog.moreFromBlog}</p>}
        titleId="related-title"
        title={
          <>
            {first}
            <br />
            <OutlineText>{second}</OutlineText>
            <Dot />
          </>
        }
        aside={
          <SweepLink href={blogHref} arrow="right">
            {dict.common.allPosts}
          </SweepLink>
        }
      />
      <PostGrid posts={post.related} dict={dict} variant="home" />
    </section>
  );
}

export { ArticleLayout, PostCover, PostHeader, RelatedPosts };
