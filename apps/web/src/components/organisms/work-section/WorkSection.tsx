import type { WorkSection as WorkSectionData } from "@portfolio/contracts";
import { Grid, Link, Text } from "@portfolio/ui";
import { ProjectCard } from "../../molecules/project-card/ProjectCard";
import { SectionShell } from "../section-shell/SectionShell";

export interface WorkSectionProps {
  section: WorkSectionData;
  viewAllHref?: string;
  viewAllLabel?: string;
}

function WorkSection({
  section,
  viewAllHref,
  viewAllLabel = "View all projects",
}: WorkSectionProps) {
  return (
    <SectionShell
      id={section.id}
      index={section.index}
      heading={section.heading}
    >
      <div data-sanity={section.editTarget} className="flex flex-col gap-8">
        {section.intro && (
          <Text size="lg" tone="muted" className="max-w-prose">
            {section.intro}
          </Text>
        )}
        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={12}>
          {section.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
        {viewAllHref && (
          <Link href={viewAllHref} underline="hover" className="self-start">
            {viewAllLabel}
          </Link>
        )}
      </div>
    </SectionShell>
  );
}

export { WorkSection };
