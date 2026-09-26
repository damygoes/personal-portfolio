import type { Project } from "@portfolio/contracts";
import {
  Chip,
  Container,
  DateRange,
  Heading,
  Img,
  StatusBadge,
  Stack,
  Text,
} from "@portfolio/ui";
import { ProjectLinks } from "../../molecules/project-links/ProjectLinks";

export interface CaseStudyHeaderProps {
  project: Project;
  locale: string;
  statusLabel: string;
  linkLabels: Record<Project["links"][number]["kind"], string>;
  presentLabel?: string;
}

function CaseStudyHeader({
  project,
  locale,
  statusLabel,
  linkLabels,
  presentLabel,
}: CaseStudyHeaderProps) {
  return (
    <header data-slot="case-study-header" className="py-16">
      <Container size="wide">
        <Stack gap={6}>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} label={statusLabel} />
            <Text size="sm" tone="muted">
              {project.role}
            </Text>
            <Text size="sm" tone="muted">
              <DateRange
                start={project.period.start}
                end={project.period.end}
                locale={locale}
                presentLabel={presentLabel}
              />
            </Text>
          </div>

          <Heading level={1} size="2xl">
            {project.title}
          </Heading>

          <Text size="lg" tone="muted" className="max-w-prose">
            {project.summary}
          </Text>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Chip key={tech} label={tech} />
            ))}
          </div>

          <ProjectLinks links={project.links} labels={linkLabels} />
        </Stack>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-secondary">
          <Img
            src={project.cover.src}
            alt={project.cover.alt}
            blurDataURL={project.cover.lqip}
            fill
            priority
            sizes="100vw"
          />
        </div>
      </Container>
    </header>
  );
}

export { CaseStudyHeader };
