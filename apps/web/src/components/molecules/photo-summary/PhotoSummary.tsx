import type { Post } from "@portfolio/contracts";
import { FactList } from "@portfolio/ui";

export interface PhotoSummaryProps {
  summary: NonNullable<Post["photoSummary"]>;
  photoCountLabel: string;
}

function PhotoSummary({ summary, photoCountLabel }: PhotoSummaryProps) {
  const items = [photoCountLabel, ...summary.cameras, ...summary.lenses];

  return <FactList items={items} />;
}

export { PhotoSummary };
