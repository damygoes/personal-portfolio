import type { ImageDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import { ImageFrame } from "../../atoms/image-frame/ImageFrame";

export interface FigureProps {
  image: ImageDTO;
  /** "Fig. 01" — already formatted. */
  numberLabel: string;
  caption?: string;
  className?: string;
}

/** Article image with a mono "Fig. 01 — caption" line. */
function Figure({ image, numberLabel, caption, className }: FigureProps) {
  return (
    <figure data-slot="figure" className={cn("flex flex-col gap-3", className)}>
      <ImageFrame
        image={image}
        sizes="(min-width: 1024px) 680px, 100vw"
        className="h-60 rounded-2xl border border-border bg-card lg:h-[380px]"
      />
      <figcaption className="label-2xs text-muted">
        {numberLabel}
        {caption && ` — ${caption}`}
      </figcaption>
    </figure>
  );
}

/** Pull quote between hairlines, with a big spark opening mark. */
function PullQuote({
  text,
  attribution,
  className,
}: {
  text: string;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure
      data-slot="pull-quote"
      className={cn(
        "flex flex-col gap-3 border-y border-divider py-6",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="font-display text-[72px] leading-[0.6] text-spark"
      >
        “
      </span>
      <blockquote className="font-display text-2xl leading-[1.2] font-semibold tracking-[-0.015em] text-balance text-fg sm:text-[32px]">
        <p>{text}</p>
      </blockquote>
      {attribution && (
        <figcaption className="label-2xs text-muted">{attribution}</figcaption>
      )}
    </figure>
  );
}

export { Figure, PullQuote };
