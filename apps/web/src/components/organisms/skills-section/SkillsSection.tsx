import type { SkillsSection as SkillsSectionData } from "@portfolio/contracts";
import { Grid } from "@portfolio/ui";
import { Marquee } from "../../molecules/marquee/Marquee";
import { SkillGroup } from "../../molecules/skill-group/SkillGroup";
import { SectionShell } from "../section-shell/SectionShell";

export interface SkillsSectionProps {
  section: SkillsSectionData;
}

function SkillsSection({ section }: SkillsSectionProps) {
  return (
    <SectionShell
      id={section.id}
      index={section.index}
      heading={section.heading}
    >
      <div className="flex flex-col gap-20">
        <Marquee rows={section.marqueeRows} />
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={10}>
          {section.groups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </Grid>
      </div>
    </SectionShell>
  );
}

export { SkillsSection };
