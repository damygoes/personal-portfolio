import type { Project } from "@portfolio/contracts";
import { Container, Grid } from "@portfolio/ui";
import { PrevNextNav } from "../../molecules/prev-next-nav/PrevNextNav";
import { TableOfContents } from "../../molecules/table-of-contents/TableOfContents";
import { CaseStudyHeader } from "../../organisms/case-study-header/CaseStudyHeader";
import {
  RichTextRenderer,
  type RichTextLabels,
} from "../../organisms/rich-text-renderer/RichTextRenderer";

export interface CaseStudyLayoutProps {
  project: Project;
  locale: string;
  statusLabel: string;
  linkLabels: Record<Project["links"][number]["kind"], string>;
  tocHeading?: string;
  previousLabel?: string;
  nextLabel?: string;
  codeHtml?: Record<string, string>;
  richTextLabels?: RichTextLabels;
}

function CaseStudyLayout({
  project,
  locale,
  statusLabel,
  linkLabels,
  tocHeading,
  previousLabel,
  nextLabel,
  codeHtml,
  richTextLabels,
}: CaseStudyLayoutProps) {
  return (
    <article data-slot="case-study-layout">
      <CaseStudyHeader
        project={project}
        locale={locale}
        statusLabel={statusLabel}
        linkLabels={linkLabels}
      />

      <Container size="wide" className="py-8">
        <Grid cols={{ base: 1, lg: 4 }} gap={12}>
          <div className="lg:col-span-3">
            <RichTextRenderer
              value={project.body}
              variant="article"
              codeHtml={codeHtml}
              labels={richTextLabels}
            />
          </div>
          {project.toc.length > 0 && (
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <TableOfContents entries={project.toc} heading={tocHeading} />
              </div>
            </aside>
          )}
        </Grid>
      </Container>

      <Container size="prose" className="pb-16">
        <PrevNextNav
          previous={project.previous}
          next={project.next}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
        />
      </Container>
    </article>
  );
}

export { CaseStudyLayout };
