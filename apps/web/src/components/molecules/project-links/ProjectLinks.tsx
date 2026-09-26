import type { ProjectLink } from "@portfolio/contracts";
import { Button } from "@portfolio/ui";
import type { IconName } from "@portfolio/ui/icon";

const kindIcon: Record<ProjectLink["kind"], IconName> = {
  live: "external-link",
  repository: "document",
  appStore: "apple",
  playStore: "play-store",
  other: "external-link",
};

export interface ProjectLinksProps {
  links: ProjectLink[];
  labels: Record<ProjectLink["kind"], string>;
}

function ProjectLinks({ links, labels }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div data-slot="project-links" className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Button
          key={link.href}
          variant="outline"
          size="sm"
          icon={kindIcon[link.kind]}
          render={<a href={link.href} target="_blank" rel="noopener" />}
        >
          {labels[link.kind]}
        </Button>
      ))}
    </div>
  );
}

export { ProjectLinks };
