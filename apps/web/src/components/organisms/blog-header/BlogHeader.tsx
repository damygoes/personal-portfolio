import type { Category } from "@portfolio/contracts";
import { Container, Heading, Stack, Text } from "@portfolio/ui";

export interface BlogHeaderProps {
  heading: string;
  intro?: string;
  activeCategory?: Category;
}

function BlogHeader({ heading, intro, activeCategory }: BlogHeaderProps) {
  return (
    <header data-slot="blog-header" className="py-16">
      <Container>
        <Stack gap={3}>
          <Heading level={1} size="2xl">
            {heading}
          </Heading>
          {(activeCategory?.description ?? intro) && (
            <Text size="lg" tone="muted" className="max-w-prose">
              {activeCategory?.description ?? intro}
            </Text>
          )}
        </Stack>
      </Container>
    </header>
  );
}

export { BlogHeader };
