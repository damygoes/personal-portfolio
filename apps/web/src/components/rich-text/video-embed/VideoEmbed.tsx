"use client";

import type { VideoEmbedBlock } from "@portfolio/contracts";
import { VisuallyHidden } from "@portfolio/ui";
import { useState } from "react";

export interface VideoEmbedProps {
  block: VideoEmbedBlock;
  playLabel?: string;
}

const embedUrl: Record<VideoEmbedBlock["provider"], (id: string) => string> = {
  youtube: (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
  vimeo: (id) => `https://player.vimeo.com/video/${id}?autoplay=1`,
};

const thumbnailUrl: Record<
  VideoEmbedBlock["provider"],
  (id: string) => string
> = {
  youtube: (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  vimeo: () => "",
};

function VideoEmbed({ block, playLabel = "Play video" }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div
        data-slot="video-embed"
        className="relative aspect-video w-full overflow-hidden rounded-lg bg-black"
      >
        <iframe
          src={embedUrl[block.provider](block.videoId)}
          title={block.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  const thumbnail = thumbnailUrl[block.provider](block.videoId);

  return (
    <button
      type="button"
      data-slot="video-embed"
      onClick={() => setLoaded(true)}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-secondary bg-cover bg-center"
      style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-background/90 transition-transform group-hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 size-6"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <VisuallyHidden>
        {playLabel}: {block.title}
      </VisuallyHidden>
    </button>
  );
}

export { VideoEmbed };
