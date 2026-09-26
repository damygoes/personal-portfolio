import type { AboutSection as AboutSectionData } from "@portfolio/contracts";
import { Grid, Img } from "@portfolio/ui";
import { RichTextRenderer } from "../rich-text-renderer/RichTextRenderer";
import { SectionShell } from "../section-shell/SectionShell";

export interface AboutSectionProps {
  section: AboutSectionData;
}

function AboutSection({ section }: AboutSectionProps) {
  return (
    <SectionShell
      id={section.id}
      index={section.index}
      heading={section.heading}
    >
      <Grid cols={{ base: 1, lg: 2 }} gap={8} data-sanity={section.editTarget}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
          <Img
            src={section.portrait.src}
            alt={section.portrait.alt}
            blurDataURL={section.portrait.lqip}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <RichTextRenderer value={section.body} variant="compact" />
      </Grid>
    </SectionShell>
  );
}

export { AboutSection };
