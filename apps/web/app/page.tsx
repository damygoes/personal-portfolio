import { Button, Container, Divider, Grid, Heading, Text } from "@portfolio/ui";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-6 bg-background">
      <Container size="full">
        <Heading level={1} size="display-hero">
          Welcome Home
        </Heading>
        <Button size="lg">Get started</Button>
      </Container>
      <Divider spacing="lg" />
      <Container size="wide">
        <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={12}>
          <Container>
            <Text size="xl">
              Focus on Frontend fundamentals, Fullstack development and AI
              engineering
            </Text>
          </Container>
          <Container>
            <Text size="xl">
              Focus on Frontend fundamentals, Fullstack development and AI
              engineering
            </Text>
          </Container>
          <Container>
            <Text size="xl">
              Focus on Frontend fundamentals, Fullstack development and AI
              engineering
            </Text>
          </Container>
          <Container>
            <Text size="xl">
              Focus on Frontend fundamentals, Fullstack development and AI
              engineering
            </Text>
          </Container>
          <Container>
            <Text size="xl">
              Focus on Frontend fundamentals, Fullstack development and AI
              engineering
            </Text>
          </Container>
        </Grid>
      </Container>
    </div>
  );
}
