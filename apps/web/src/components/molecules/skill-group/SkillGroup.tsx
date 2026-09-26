import type { SkillGroup as SkillGroupData } from "@portfolio/contracts";
import { Chip, Heading, Stack } from "@portfolio/ui";

export interface SkillGroupProps {
  group: SkillGroupData;
}

function SkillGroup({ group }: SkillGroupProps) {
  return (
    <Stack gap={3} data-slot="skill-group" data-sanity={group.editTarget}>
      <Heading level={4} size="sm">
        {group.title}
      </Heading>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Chip key={skill} label={skill} size="md" />
        ))}
      </div>
    </Stack>
  );
}

export { SkillGroup };
