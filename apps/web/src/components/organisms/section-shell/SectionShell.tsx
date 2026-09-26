import type { SectionId } from "@portfolio/contracts";
import { Container, Heading, SectionIndex, Stack } from "@portfolio/ui";

export interface SectionShellProps {
  id: SectionId;
  index: string;
  heading: string;
  children: React.ReactNode;
}

function SectionShell({ id, index, heading, children }: SectionShellProps) {
  return (
    <section id={id} data-slot="section-shell" className="py-16 sm:py-24">
      <Container>
        <Stack gap={12}>
          <div className="flex items-center gap-3">
            <SectionIndex index={index} />
            <Heading level={2} size="xl">
              {heading}
            </Heading>
          </div>
          {children}
        </Stack>
      </Container>
    </section>
  );
}

export { SectionShell };
