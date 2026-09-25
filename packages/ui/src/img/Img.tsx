import { cn } from "@portfolio/utils";

export interface ImgProps extends Omit<
  React.ComponentPropsWithoutRef<"img">,
  "alt" | "loading"
> {
  src: string;
  alt: string;
  blurDataURL?: string;
  objectPosition?: string;
  fill?: boolean;
  priority?: boolean;
}

function Img({
  src,
  alt,
  blurDataURL,
  objectPosition,
  fill = false,
  priority = false,
  className,
  style,
  ...props
}: ImgProps) {
  const image = (
    <img
      data-slot="img"
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn(
        fill && "absolute inset-0 size-full",
        (fill || objectPosition) && "object-cover",
        className,
      )}
      style={{ objectPosition, ...style }}
      {...props}
    />
  );

  if (!blurDataURL) {
    return image;
  }

  return (
    <span
      data-slot="img-wrapper"
      className={cn(
        "relative block overflow-hidden bg-cover bg-center",
        fill && "absolute inset-0 size-full",
      )}
      style={{
        backgroundImage: `url(${blurDataURL})`,
        backgroundPosition: objectPosition,
      }}
    >
      {image}
    </span>
  );
}

export { Img };
