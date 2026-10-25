import type { ImageDTO } from "@portfolio/contracts";
import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { Picture } from "../../lib/adapters";

export interface ImageFrameProps {
  image?: ImageDTO;
  /** Box classes: size, radius, tone. */
  className?: string;
  /** Decoration drawn only while there is no image (ghost numerals, frames). */
  fallback?: ReactNode;
  /** Overlays that stay with or without an image (cover dot, tag). */
  children?: ReactNode;
  /**
   * Wrap the content in the `cover-inner` layer that zooms to 1.035 when the
   * enclosing card (`group`) is hovered. Classes lay out the fallback inside it.
   */
  zoom?: string | boolean;
  sizes?: string;
  priority?: boolean;
  label?: string;
}

/**
 * An image box with a fixed size and radius. The image fills it (object-fit: cover);
 * without one, the design's decoration shows instead — never an empty placeholder.
 * `data-vd="media"` lets the visual-diff script mask it.
 */
function ImageFrame({
  image,
  className,
  fallback,
  children,
  zoom,
  sizes,
  priority,
  label,
}: ImageFrameProps) {
  const content = image ? (
    <Picture
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      blurDataURL={image.blurDataURL}
      sizes={sizes}
      priority={priority}
      className="absolute inset-0 size-full object-cover"
    />
  ) : (
    fallback
  );
  return (
    <div
      data-slot="image-frame"
      data-vd="media"
      {...image?.editAttrs}
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("relative overflow-hidden", className)}
    >
      {zoom ? (
        <div className={cn("cover-inner", typeof zoom === "string" && zoom)}>
          {content}
        </div>
      ) : (
        content
      )}
      {children}
    </div>
  );
}

/** Outlined numeral/word behind a cover. Colours come from the tone on the parent. */
function Ghost({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      data-slot="ghost"
      aria-hidden="true"
      className={cn("text-ghost absolute", className)}
    >
      {children}
    </span>
  );
}

export { Ghost, ImageFrame };
