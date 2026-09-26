import type { ProjectCard as ProjectCardData } from "@portfolio/contracts";
import {
  Chip,
  Heading,
  Img,
  Link,
  SectionIndex,
  Stack,
  Text,
} from "@portfolio/ui";

export interface ProjectCardProps {
  project: ProjectCardData;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      underline="none"
      data-slot="project-card"
      data-sanity={project.editTarget}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
        <Img
          src={project.cover.src}
          alt={project.cover.alt}
          blurDataURL={project.cover.lqip}
          objectPosition={
            project.cover.focalPoint
              ? `${project.cover.focalPoint.x * 100}% ${project.cover.focalPoint.y * 100}%`
              : undefined
          }
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <Stack gap={2}>
        <div className="flex items-center gap-2">
          <SectionIndex index={project.index} />
          <Heading level={3} size="md">
            {project.title}
          </Heading>
        </div>
        <Text size="base" tone="muted">
          {project.summary}
        </Text>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((tech) => (
            <Chip key={tech} label={tech} size="sm" />
          ))}
        </div>
      </Stack>
    </Link>
  );
}

export { ProjectCard };
