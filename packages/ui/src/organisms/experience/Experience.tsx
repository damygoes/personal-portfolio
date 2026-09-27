import type { ExperienceDTO, SkillGroupDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { ExperienceRow } from "../../molecules/experience-row/ExperienceRow";
import { SectionHead } from "../../molecules/section-head/SectionHead";
import { SkillCol } from "../../molecules/skill-col/SkillCol";
import { TitleLines } from "../../molecules/title-lines/TitleLines";

export interface ExperienceListProps {
  items: ExperienceDTO[];
  since?: number;
  number: string;
  dict: Dictionary;
}

/** About "01 Experience": "WHERE I'VE / BUILT THINGS" + "2020 — Now", then the roles. */
function ExperienceList({ items, since, number, dict }: ExperienceListProps) {
  if (!items.length) return null;
  return (
    <section
      id="experience"
      data-slot="experience-list"
      aria-labelledby="xp-title"
      className="wrap"
    >
      <div className="sec pb-0!">
        <SectionHead
          label={
            <SectionLabel number={number}>{dict.about.experience}</SectionLabel>
          }
          titleId="xp-title"
          title={
            <TitleLines
              lines={dict.about.experienceTitle}
              outline={false}
              dot={false}
            />
          }
          aside={
            since ? (
              <p className="label text-muted">{`${since} — ${dict.common.now}`}</p>
            ) : null
          }
        />
      </div>
      <ol className="border-t border-fg">
        {items.map((item) => (
          <ExperienceRow
            key={`${item.company}-${item.start}`}
            item={item}
            labels={{ now: dict.common.now, workMode: dict.about.workMode }}
          />
        ))}
      </ol>
    </section>
  );
}

export interface SkillsBandProps {
  groups: SkillGroupDTO[];
  intro?: string;
  number: string;
  dict: Dictionary;
}

/** About "02 Skills" on the full-bleed band: "THE TOOLKIT." and 4 → 2 columns. */
function SkillsBand({ groups, intro, number, dict }: SkillsBandProps) {
  if (!groups.length) return null;
  return (
    <section
      id="skills"
      data-slot="skills-band"
      aria-labelledby="skills-title"
      className="band mt-[160px]"
    >
      <div className="sec wrap">
        <SectionHead
          label={
            <SectionLabel number={number}>{dict.about.skills}</SectionLabel>
          }
          titleId="skills-title"
          title={<TitleLines lines={dict.about.skillsTitle} join="space" />}
          aside={
            intro ? (
              <p className="max-w-[360px] text-base leading-[1.6] text-band-muted">
                {intro}
              </p>
            ) : null
          }
        />
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {groups.map((group) => (
            <SkillCol key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ExperienceList, SkillsBand };
