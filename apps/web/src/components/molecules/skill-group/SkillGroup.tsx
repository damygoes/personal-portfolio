import type { SkillGroup as SkillGroupData } from "@portfolio/contracts";
import { Stack, Text } from "@portfolio/ui";

export interface SkillGroupProps {
  group: SkillGroupData;
}

function SkillGroup({ group }: SkillGroupProps) {
  return (
    <Stack gap={2} data-slot="skill-group" data-sanity={group.editTarget}>
      <Text
        size="sm"
        weight="semibold"
        className="text-primary uppercase tracking-widest"
      >
        {group.title}
      </Text>
      <Text size="sm" tone="muted">
        {group.skills.join(", ")}
      </Text>
    </Stack>
  );
}

export { SkillGroup };
