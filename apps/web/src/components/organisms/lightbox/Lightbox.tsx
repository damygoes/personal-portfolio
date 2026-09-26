"use client";

import type { Photo } from "@portfolio/contracts";
import { Button, Icon, Img, VisuallyHidden } from "@portfolio/ui";
import { useEffect, useState } from "react";
import { ExifPanel } from "../../molecules/exif-panel/ExifPanel";

export interface LightboxProps {
  photos: Photo[];
  startIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

function Lightbox({
  photos,
  startIndex,
  open,
  onOpenChange,
  closeLabel = "Close",
  previousLabel = "Previous photo",
  nextLabel = "Next photo",
}: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
      if (event.key === "ArrowRight") setIndex((i) => (i + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setIndex((i) => (i - 1 + photos.length) % photos.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange, photos.length]);

  if (!open) return null;

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      data-slot="lightbox"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur"
    >
      <div className="flex items-center justify-end p-4">
        <Button
          variant="ghost"
          size="icon-sm"
          icon="close"
          aria-label={closeLabel}
          onClick={() => onOpenChange(false)}
        />
      </div>

      <div className="relative flex-1">
        <Img
          src={photo.src}
          alt={photo.alt}
          blurDataURL={photo.lqip}
          fill
          sizes="100vw"
          className="object-contain"
        />

        {photos.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              icon="chevron-left"
              aria-label={previousLabel}
              className="absolute top-1/2 left-2 -translate-y-1/2"
              onClick={() =>
                setIndex((i) => (i - 1 + photos.length) % photos.length)
              }
            />
            <Button
              variant="ghost"
              size="icon"
              icon="arrow-right"
              aria-label={nextLabel}
              className="absolute top-1/2 right-2 -translate-y-1/2"
              onClick={() => setIndex((i) => (i + 1) % photos.length)}
            />
          </>
        )}
      </div>

      {photo.exif && (
        <div className="p-4">
          <ExifPanel exif={photo.exif} />
        </div>
      )}

      <VisuallyHidden>
        {index + 1} / {photos.length}
      </VisuallyHidden>
    </div>
  );
}

export { Lightbox };
