import type { ProjectCardDTO } from "@portfolio/contracts";
import { cn, pad2 } from "@portfolio/utils";
import { ChipList } from "../../atoms/chip/ChipList";
import { BrowserFrame } from "../../atoms/device-frame/DeviceFrame";
import { Ghost, ImageFrame } from "../../atoms/image-frame/ImageFrame";
import { Dot } from "../../atoms/outline-text/OutlineText";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Anchor } from "../../lib/adapters";

export interface ProjectCardProps {
  project: ProjectCardDTO;
  labels: { readCaseStudy: string; viewOnGithub: string };
  className?: string;
}

/**
 * Smaller project (`.proj`): 3-up on desktop; on tablet a cover | text row;
 * stacked with a top rule on mobile. The whole card links (card-link).
 */
function ProjectCard({ project, labels, className }: ProjectCardProps) {
  return (
    <article
      data-slot="project-card"
      data-sanity={project.editTarget}
      className={cn(
        "group relative flex flex-col gap-4 border-t border-divider pt-10 sm:grid sm:grid-cols-2 sm:items-start sm:gap-6 sm:border-t-0 sm:pt-0 lg:flex lg:flex-col lg:items-stretch lg:gap-6",
        className,
      )}
    >
      <ImageFrame
        zoom="flex items-end justify-center"
        className="tone-card h-[220px] rounded-2xl border border-border sm:h-[260px] lg:h-80"
        fallback={
          <>
            {!project.cover && (
              <Ghost className="top-[-20px] right-4 text-[140px] sm:top-[-28px] sm:text-[160px] lg:text-[200px]">
                {project.ghost}
              </Ghost>
            )}
            <BrowserFrame screen={project.cover} />
          </>
        }
      />
      <div className="flex flex-col gap-4">
        <p className="label text-muted">
          <span className="num">{pad2(project.index)}</span> /{" "}
          {pad2(project.total)} · {project.kind}
        </p>
        <h3 className="t-sm font-display">
          <Anchor href={project.primaryHref} className="card-link">
            {project.title}
            {project.titleDot && <Dot />}
          </Anchor>
        </h3>
        <p className="t-body">{project.summary}</p>
        <ChipList items={project.tech} />
        <SweepLink
          arrow={project.hasCaseStudy ? "right" : "up-right"}
          className="self-start"
        >
          {project.hasCaseStudy ? labels.readCaseStudy : labels.viewOnGithub}
        </SweepLink>
      </div>
    </article>
  );
}

export { ProjectCard };
