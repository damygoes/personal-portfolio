import type { WorkSection as WorkSectionData } from "@portfolio/contracts";
import { Grid, Text } from "@portfolio/ui";
import { ProjectCard } from "../../molecules/project-card/ProjectCard";
import { SectionShell } from "../section-shell/SectionShell";

export interface WorkSectionProps {
  section: WorkSectionData;
}

function WorkSection({ section }: WorkSectionProps) {
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
        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={8}>
          {section.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </div>
    </SectionShell>
  );
}

export { WorkSection };
