import type { ImageDTO } from "@portfolio/contracts";
import { createImageUrlBuilder } from "@sanity/image-url";

interface RawImage {
  alt?: string | null;
  crop?: unknown;
  hotspot?: unknown;
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      lqip?: string | null;
      dimensions?: { width: number; height: number } | null;
    } | null;
  } | null;
}

/** Sanity image (with its asset resolved) → ImageDTO; undefined when unset. */
export function imageMapper(project: { projectId: string; dataset: string }) {
  const builder = createImageUrlBuilder(project);
  return (value: unknown): ImageDTO | undefined => {
    const image = value as RawImage | null | undefined;
    const asset = image?.asset;
    const size = asset?.metadata?.dimensions;
    if (!asset || !size) return undefined;
    return {
      src: builder
        .image({
          asset: { _ref: asset._id },
          crop: image.crop,
          hotspot: image.hotspot,
        } as never)
        .auto("format")
        .url(),
      alt: image.alt ?? "",
      width: size.width,
      height: size.height,
      blurDataURL: asset.metadata?.lqip ?? undefined,
    };
  };
}
