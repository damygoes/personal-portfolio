import type { PostCardDTO, Tone } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Anchor } from "../../lib/adapters";

export const toneClass: Record<Tone, string> = {
  lagoon: "tone-lagoon",
  warm: "tone-warm",
  stone: "tone-stone",
  ink: "tone-ink",
  card: "tone-card",
};

/** "PROGRAMMING · Aug 30, 2026 · 7 min" — category in primary. */
function PostMeta({
  post,
  minutesLabel,
  leading,
  className,
}: {
  post: PostCardDTO;
  minutesLabel: string;
  leading?: ReactNode;
  className?: string;
}) {
  return (
    <p
      data-slot="post-meta"
      className={cn(
        "label-2xs flex flex-wrap items-center gap-2.5 text-muted",
        className,
      )}
    >
      {leading}
      <span className="text-primary">{post.category.title}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.date}>{post.dateLabel}</time>
      <span aria-hidden="true">·</span>
      <span>{minutesLabel}</span>
    </p>
  );
}

export interface PostCardProps {
  post: PostCardDTO;
  /** "7 min" — already formatted. */
  minutesLabel: string;
  /** `row`: horizontal 5/7 layout on tablet (home, related). `grid`: blog index grid. */
  variant?: "row" | "grid";
  className?: string;
}

/** Post card with a tone cover and ghost word; the title link covers the card. */
function PostCard({
  post,
  minutesLabel,
  variant = "grid",
  className,
}: PostCardProps) {
  const row = variant === "row";
  return (
    <article
      data-slot="post-card"
      {...post.editAttrs}
      className={cn(
        "group relative flex flex-col gap-5",
        row &&
          "gap-4 sm:grid sm:grid-cols-12 sm:items-center sm:gap-6 lg:flex lg:flex-col lg:items-stretch lg:gap-5",
        className,
      )}
    >
      <ImageFrame
        image={post.cover}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={cn(
          "h-[220px] rounded-2xl lg:h-[300px]",
          row ? "sm:col-span-5" : "sm:h-[260px]",
          toneClass[post.tone],
        )}
        zoom="flex items-center justify-center"
        fallback={
          <Ghost className="bottom-[-36px] left-5 text-[140px] lg:text-[180px]">
            {post.ghost}
          </Ghost>
        }
      />
      <div className={cn("flex flex-col gap-3", row && "sm:col-span-7")}>
        <PostMeta post={post} minutesLabel={minutesLabel} />
        <h3 className="t-post font-display transition-colors duration-150 group-hover:text-primary">
          <Anchor href={post.href} className="card-link">
            {post.title}
          </Anchor>
        </h3>
        <p className="t-body">{post.excerpt}</p>
      </div>
    </article>
  );
}

export { PostCard, PostMeta };
