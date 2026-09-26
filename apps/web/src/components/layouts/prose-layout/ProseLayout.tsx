import type { LegalPage } from "@portfolio/contracts";
import { Container, FormattedDate, Heading, Stack, Text } from "@portfolio/ui";
import { RichTextRenderer } from "../../organisms/rich-text-renderer/RichTextRenderer";

export interface ProseLayoutProps {
  page: LegalPage;
  locale: string;
  updatedLabel?: string;
}

function ProseLayout({
  page,
  locale,
  updatedLabel = "Last updated",
}: ProseLayoutProps) {
  return (
    <article data-slot="prose-layout" className="py-16">
      <Container size="prose">
        <Stack gap={8}>
          <Stack gap={2}>
            <Heading level={1} size="2xl">
              {page.title}
            </Heading>
            <Text size="sm" tone="muted">
              {updatedLabel}{" "}
              <FormattedDate date={page.updatedAt} locale={locale} />
            </Text>
          </Stack>
          <RichTextRenderer value={page.body} variant="compact" />
        </Stack>
      </Container>
    </article>
  );
}

export { ProseLayout };
