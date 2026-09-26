import type { Site } from "@portfolio/contracts";
import { Button, Container, Divider, Link, Stack, Text } from "@portfolio/ui";
import { SocialLinks } from "../../molecules/social-links/SocialLinks";

export interface SiteFooterProps {
  site: Site;
  backToTopLabel?: string;
}

function SiteFooter({ site, backToTopLabel = "Back to top" }: SiteFooterProps) {
  return (
    <footer data-slot="site-footer" className="py-16">
      <Container>
        <Divider spacing="lg" />
        <Stack gap={6}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href={`mailto:${site.owner.email}`} underline="hover">
              {site.owner.email}
            </Link>
            <SocialLinks links={site.socials} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <Text size="sm" tone="muted">
                © {site.footer.copyrightYear} {site.siteName}
              </Text>
              {site.legalLinks.map((legal) => (
                <Link
                  key={legal.href}
                  href={legal.href}
                  underline="hover"
                  className="text-muted-foreground"
                >
                  {legal.title}
                </Link>
              ))}
            </div>
            <Text size="sm" tone="muted">
              {site.footer.tagline}
            </Text>
          </div>

          <Button
            variant="ghost"
            size="sm"
            icon="chevron-up"
            render={<a href="#top" />}
            className="self-start"
          >
            {backToTopLabel}
          </Button>
        </Stack>
      </Container>
    </footer>
  );
}

export { SiteFooter };
