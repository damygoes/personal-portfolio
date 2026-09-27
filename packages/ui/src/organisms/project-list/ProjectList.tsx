import type { ProjectCardDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { cn } from "@portfolio/utils";
import type { ReactNode } from "react";
import { ProjectCard } from "../../molecules/project-card/ProjectCard";
import { FeaturedProject } from "../featured-project/FeaturedProject";

/** Featured projects in order, alternating sides (`.feat + .feat` spacing). */
function FeaturedProjects({
  projects,
  dict,
}: {
  projects: ProjectCardDTO[];
  dict: Dictionary;
}) {
  return (
    <>
      {projects.map((project, i) => (
        <FeaturedProject
          key={project.slug}
          project={project}
          dict={dict}
          reverse={i % 2 === 1}
          className={i > 0 ? "mt-14 sm:mt-[72px] lg:mt-24" : undefined}
        />
      ))}
    </>
  );
}

/** Rule-topped row: label on the left, link on the right (stacks on mobile). */
function MoreRow({
  left,
  right,
  className,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="more-row"
      className={cn(
        "mt-14 flex flex-col items-start gap-2 border-t border-fg pt-6 sm:mt-[72px] sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:mt-24",
        className,
      )}
    >
      {left}
      {right}
    </div>
  );
}

/** 3-up grid of smaller project cards; one column (cover | text rows) on tablet. */
function ProjectGrid({
  projects,
  dict,
}: {
  projects: ProjectCardDTO[];
  dict: Dictionary;
}) {
  if (!projects.length) return null;
  return (
    <div
      data-slot="project-grid"
      className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:gap-12 lg:mt-8 lg:grid-cols-3 lg:gap-6"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          labels={{
            readCaseStudy: dict.common.readCaseStudy,
            viewOnGithub: dict.common.viewOnGithub,
          }}
        />
      ))}
    </div>
  );
}

export { FeaturedProjects, MoreRow, ProjectGrid };
