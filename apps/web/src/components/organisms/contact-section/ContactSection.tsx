import type { ContactSection as ContactSectionData } from "@portfolio/contracts";
import {
  Container,
  Heading,
  Icon,
  Link,
  SectionIndex,
  Stack,
  Text,
} from "@portfolio/ui";

export interface ContactSectionProps {
  section: ContactSectionData;
  sayHelloLabel?: string;
}

function ContactSection({
  section,
  sayHelloLabel = "Say hello",
}: ContactSectionProps) {
  // Outline the final word of the heading (e.g. "Let's work together" ->
  // "…together") to echo the hero name treatment.
  const words = section.heading.split(" ");
  const lastWord = words.pop();

  return (
    <section
      id={section.id}
      data-slot="contact-section"
      className="py-24 sm:py-32"
    >
      <Container>
        <Stack gap={10} align="start">
          <SectionIndex index={section.index} />
          <Heading level={2} size="display-lg" className="leading-none">
            {words.length > 0 && <span>{words.join(" ")} </span>}
            {lastWord && (
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px var(--color-foreground)" }}
              >
                {lastWord}
              </span>
            )}
          </Heading>
          <Text size="lg" tone="muted" className="max-w-prose">
            {section.body}
          </Text>
          <div>
            <Text
              size="sm"
              tone="muted"
              className="mb-2 tracking-widest uppercase"
            >
              {sayHelloLabel}
            </Text>
            <Link
              href={`mailto:${section.cta.email}`}
              underline="hover"
              className="font-display text-3xl font-bold text-foreground sm:text-5xl"
            >
              {section.cta.email}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {section.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                external
                underline="hover"
                className="inline-flex items-center gap-1.5 text-sm font-medium tracking-widest text-muted-foreground uppercase hover:text-foreground"
              >
                {social.label}
                <Icon name="external-link" size="xs" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Stack>
      </Container>
    </section>
  );
}

export { ContactSection };
