import type { ExperienceSection as ExperienceSectionData } from "@portfolio/contracts";
import { ExperienceItem } from "../../molecules/experience-item/ExperienceItem";
import { SectionShell } from "../section-shell/SectionShell";

export interface ExperienceSectionProps {
  section: ExperienceSectionData;
  locale: string;
  workModeLabels: Record<"onsite" | "hybrid" | "remote", string>;
  presentLabel?: string;
  detailsLabel?: string;
  closeLabel?: string;
}

function ExperienceSection({
  section,
  locale,
  workModeLabels,
  presentLabel,
  detailsLabel,
  closeLabel,
}: ExperienceSectionProps) {
  return (
    <SectionShell
      id={section.id}
      index={section.index}
      heading={section.heading}
    >
      <div data-sanity={section.editTarget} className="flex flex-col">
        {section.items.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            locale={locale}
            workModeLabel={workModeLabels[item.workMode]}
            presentLabel={presentLabel}
            detailsLabel={detailsLabel}
            closeLabel={closeLabel}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export { ExperienceSection };
