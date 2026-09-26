import { Button, Container, Stack, Text } from "@portfolio/ui";
import { FixtureContentService } from "@portfolio/fixtures";

const contentService = new FixtureContentService();

export default async function Home() {
  const { hero } = await contentService.getHomepage("en");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-background">
      <Container size="default">
        <Stack gap={6} align="start">
          <Text size="xl" tone="muted">
            {hero.name} · {hero.facts.role} · {hero.facts.location}
          </Text>
          <Text size="xl">{hero.intro}</Text>
          <Button size="lg" render={<a href={hero.primaryCta.href} />}>
            {hero.primaryCta.label}
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
