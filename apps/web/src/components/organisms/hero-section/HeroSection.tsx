import type { Hero, Site } from "@portfolio/contracts";
import {
  Container,
  FactList,
  Heading,
  ScrollHint,
  Stack,
  Text,
} from "@portfolio/ui";
import { CtaGroup } from "../../molecules/cta-group/CtaGroup";

export interface HeroSectionProps {
  hero: Hero;
  facts: string[];
  cv?: Site["cv"];
  downloadCvLabel?: string;
  scrollHintLabel?: string;
}

function HeroSection({
  hero,
  facts,
  cv,
  downloadCvLabel,
  scrollHintLabel,
}: HeroSectionProps) {
  return (
    <section
      data-slot="hero-section"
      data-sanity={hero.editTarget}
      className="relative flex min-h-screen items-center py-24"
    >
      <Container>
        <Stack gap={6}>
          <FactList items={facts} />
          <Heading level={1} size="display-hero">
            {hero.name}
          </Heading>
          <Text size="xl" tone="muted" className="max-w-prose">
            {hero.intro}
          </Text>
          <CtaGroup
            primary={hero.primaryCta}
            cv={cv}
            downloadCvLabel={downloadCvLabel}
          />
        </Stack>
      </Container>
      <ScrollHint
        label={scrollHintLabel}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      />
    </section>
  );
}

export { HeroSection };
