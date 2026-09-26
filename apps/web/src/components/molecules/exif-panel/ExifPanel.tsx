import type { Exif } from "@portfolio/contracts";
import { ExifItem } from "../../atoms/exif-item/ExifItem";
import { cn } from "@portfolio/utils";

export interface ExifPanelLabels {
  camera?: string;
  lens?: string;
  focalLength?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
}

export interface ExifPanelProps {
  exif: Exif;
  labels?: ExifPanelLabels;
  variant?: "inline" | "overlay";
}

const defaultLabels: Required<ExifPanelLabels> = {
  camera: "Camera",
  lens: "Lens",
  focalLength: "Focal length",
  aperture: "Aperture",
  shutterSpeed: "Shutter speed",
  iso: "ISO",
};

function ExifPanel({ exif, labels, variant = "inline" }: ExifPanelProps) {
  const l = { ...defaultLabels, ...labels };

  const entries = [
    exif.camera && { label: l.camera, value: exif.camera },
    exif.lens && { label: l.lens, value: exif.lens },
    exif.focalLength && { label: l.focalLength, value: exif.focalLength },
    exif.aperture && { label: l.aperture, value: exif.aperture },
    exif.shutterSpeed && { label: l.shutterSpeed, value: exif.shutterSpeed },
    exif.iso && { label: l.iso, value: String(exif.iso) },
  ].filter((entry): entry is { label: string; value: string } =>
    Boolean(entry),
  );

  if (entries.length === 0) return null;

  return (
    <dl
      data-slot="exif-panel"
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3",
        variant === "overlay" &&
          "absolute inset-x-0 bottom-0 bg-background/80 p-4 backdrop-blur-sm",
      )}
    >
      {entries.map((entry) => (
        <ExifItem key={entry.label} label={entry.label} value={entry.value} />
      ))}
    </dl>
  );
}

export { ExifPanel };
