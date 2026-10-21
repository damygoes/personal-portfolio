import type { PostCardDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn, formatMessage } from "@portfolio/utils";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Pill } from "../../atoms/pill/Pill";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Anchor } from "../../lib/adapters";
import {
  PostCard,
  PostMeta,
  toneClass,
} from "../../molecules/post-card/PostCard";

export interface PostGridProps {
  posts: PostCardDTO[];
  dict: Dictionary;
  /** `home`: 3 → tablet rows → stacked (home, related). `grid`: 3 → 2 → 1 with a top rule. */
  variant: "home" | "grid";
  className?: string;
}

function PostGrid({ posts, dict, variant, className }: PostGridProps) {
  if (!posts.length) return null;
  const home = variant === "home";
  return (
    <div
      data-slot="post-grid"
      className={cn(
        home
          ? "grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:gap-6"
          : "grid grid-cols-1 gap-x-6 gap-y-12 border-t border-divider pt-12 sm:grid-cols-2 sm:gap-y-14 sm:pt-16 lg:grid-cols-3 lg:gap-y-[72px]",
        className,
      )}
    >
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          variant={home ? "row" : "grid"}
          minutesLabel={formatMessage(dict.common.min, {
            n: post.readingMinutes,
          })}
        />
      ))}
    </div>
  );
}

/** The newest post in the current filter: 7-column cover, 5-column text. Stacked below 1024. */
function FeaturedPost({ post, dict }: { post: PostCardDTO; dict: Dictionary }) {
  return (
    <article
      data-slot="featured-post"
      {...post.editAttrs}
      className="group g12 relative mb-16 items-stretch gap-y-8 sm:mb-24"
    >
      <ImageFrame
        image={post.cover}
        priority
        sizes="(min-width: 1024px) 58vw, 100vw"
        zoom="flex items-center justify-center"
        className={cn(
          "col-span-12 h-[300px] rounded-2xl sm:h-[440px] sm:rounded-3xl lg:col-span-7 lg:h-[560px]",
          toneClass[post.tone],
        )}
        fallback={
          <Ghost className="bottom-[-36px] left-5 text-[180px] sm:bottom-[-64px] sm:text-[260px] lg:text-[320px]">
            {post.ghost}
          </Ghost>
        }
      />
      <div className="col-span-12 flex flex-col justify-center gap-4 sm:gap-6 lg:col-span-5 lg:pl-6">
        <PostMeta
          post={post}
          minutesLabel={formatMessage(dict.common.min, {
            n: post.readingMinutes,
          })}
          leading={<Pill>{dict.common.latest}</Pill>}
        />
        <h2 className="font-display text-[30px] leading-[1.05] font-bold tracking-[-0.015em] text-balance transition-colors duration-150 group-hover:text-primary sm:text-[40px] lg:text-5xl">
          <Anchor href={post.href} className="card-link">
            {post.title}
          </Anchor>
        </h2>
        <p className="t-body-lg">{post.excerpt}</p>
        <SweepLink arrow="right" className="self-start">
          {dict.common.readPost}
        </SweepLink>
      </div>
    </article>
  );
}

export { FeaturedPost, PostGrid };
