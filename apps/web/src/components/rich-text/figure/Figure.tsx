import type { FigureBlock } from "@portfolio/contracts";
import { Img } from "@portfolio/ui";
import { cn } from "@portfolio/utils";
import {
  ExifPanel,
  type ExifPanelLabels,
} from "../../molecules/exif-panel/ExifPanel";

export interface FigureProps {
  block: FigureBlock;
  exifLabels?: ExifPanelLabels;
}

const sizeClassName: Record<FigureBlock["size"], string> = {
  inline: "max-w-prose",
  wide: "max-w-wide",
  fullBleed: "max-w-none",
};

function Figure({ block, exifLabels }: FigureProps) {
  const { image } = block;

  return (
    <figure
      data-slot="figure"
      className={cn("relative mx-auto", sizeClassName[block.size])}
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-secondary">
        <Img
          src={image.src}
          alt={image.alt}
          blurDataURL={image.lqip}
          objectPosition={
            image.focalPoint
              ? `${image.focalPoint.x * 100}% ${image.focalPoint.y * 100}%`
              : undefined
          }
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
        />
        {block.showExif && image.exif && (
          <ExifPanel exif={image.exif} labels={exifLabels} variant="overlay" />
        )}
      </div>
      {image.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export { Figure };
