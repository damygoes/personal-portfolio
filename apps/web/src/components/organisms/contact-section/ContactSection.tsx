import type { ContactSection as ContactSectionData } from "@portfolio/contracts";
import { Button, Stack, Text } from "@portfolio/ui";
import { SocialLinks } from "../../molecules/social-links/SocialLinks";
import { SectionShell } from "../section-shell/SectionShell";

export interface ContactSectionProps {
  section: ContactSectionData;
}

function ContactSection({ section }: ContactSectionProps) {
  return (
    <SectionShell
      id={section.id}
      index={section.index}
      heading={section.heading}
    >
      <Stack gap={6} align="start">
        <Text size="lg" tone="muted" className="max-w-prose">
          {section.body}
        </Text>
        <Button
          size="lg"
          icon="mail"
          render={<a href={`mailto:${section.cta.email}`} />}
        >
          {section.cta.label}
        </Button>
        <SocialLinks links={section.socials} />
      </Stack>
    </SectionShell>
  );
}

export { ContactSection };
