"use client";

import type { GalleryBlock } from "@portfolio/contracts";
import { Img } from "@portfolio/ui";
import { cn } from "@portfolio/utils";
import { useState } from "react";
import { Lightbox } from "../../organisms/lightbox/Lightbox";

export interface GalleryProps {
  block: GalleryBlock;
}

function GalleryThumbnail({
  index,
  block,
  onOpen,
}: {
  index: number;
  block: GalleryBlock;
  onOpen: (index: number) => void;
}) {
  const photo = block.images[index]!;

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="relative aspect-square w-full overflow-hidden bg-secondary"
    >
      <Img
        src={photo.src}
        alt={photo.alt}
        blurDataURL={photo.lqip}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
      />
    </button>
  );
}

function GalleryGrid({
  block,
  onOpen,
}: {
  block: GalleryBlock;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {block.images.map((_, index) => (
        <GalleryThumbnail
          key={index}
          index={index}
          block={block}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

function GalleryMasonry({
  block,
  onOpen,
}: {
  block: GalleryBlock;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="columns-2 gap-2 sm:columns-3 [&>*]:mb-2">
      {block.images.map((photo, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onOpen(index)}
          className="relative block w-full overflow-hidden bg-secondary"
        >
          <Img
            src={photo.src}
            alt={photo.alt}
            blurDataURL={photo.lqip}
            width={photo.width}
            height={photo.height}
            className="w-full"
          />
        </button>
      ))}
    </div>
  );
}

function GalleryCarousel({
  block,
  onOpen,
}: {
  block: GalleryBlock;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto no-scrollbar">
      {block.images.map((_, index) => (
        <div
          key={index}
          className="w-3/4 shrink-0 snap-start sm:w-1/2 lg:w-1/3"
        >
          <GalleryThumbnail index={index} block={block} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
}

const layoutComponent: Record<GalleryBlock["layout"], typeof GalleryGrid> = {
  grid: GalleryGrid,
  masonry: GalleryMasonry,
  carousel: GalleryCarousel,
};

function Gallery({ block }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const LayoutComponent = layoutComponent[block.layout];

  return (
    <figure data-slot="gallery" className={cn("mx-auto max-w-wide")}>
      <LayoutComponent block={block} onOpen={setOpenIndex} />
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}

      <Lightbox
        photos={block.images}
        startIndex={openIndex ?? 0}
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      />
    </figure>
  );
}

export { Gallery };
