import type { Hero, Site } from "@portfolio/contracts";
import { Container, FactList, Heading, Stack, Text } from "@portfolio/ui";
import { CtaGroup } from "../../molecules/cta-group/CtaGroup";
import { ScrollHintOverlay } from "../../molecules/scroll-hint-overlay/ScrollHintOverlay";

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
  // Split "First Last" into two stacked lines — first name solid, last name
  // outlined — matching the deployed hero treatment.
  const [firstName, ...rest] = hero.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      data-slot="hero-section"
      data-sanity={hero.editTarget}
      className="relative flex min-h-screen items-center py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Stack gap={6} className="lg:max-w-2xl">
            <FactList
              items={facts}
              className="text-xs uppercase sm:text-sm lg:text-base"
            />
            <Heading level={1} size="display-hero" className="leading-none">
              <span className="block">{firstName}</span>
              {lastName && (
                <span
                  className="block text-transparent"
                  style={{ WebkitTextStroke: "1.5px var(--color-foreground)" }}
                >
                  {lastName}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block size-4 rounded-full bg-primary sm:size-6"
                  />
                </span>
              )}
            </Heading>
            <Text tone="muted" className="text-balance sm:text-lg lg:text-xl">
              {hero.intro}
            </Text>
          </Stack>
          <CtaGroup
            primary={hero.primaryCta}
            cv={cv}
            downloadCvLabel={downloadCvLabel}
            className="lg:mt-10"
          />
        </div>
      </Container>
      <ScrollHintOverlay label={scrollHintLabel} />
    </section>
  );
}

export { HeroSection };
