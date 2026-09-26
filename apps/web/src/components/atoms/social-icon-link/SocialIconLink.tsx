import type { SocialLink } from "@portfolio/contracts";
import { Icon, Link, VisuallyHidden } from "@portfolio/ui";
import type { IconName } from "@portfolio/ui/icon";

const platformIcon: Record<SocialLink["platform"], IconName> = {
  linkedin: "at",
  github: "document",
  other: "external-link",
};

export interface SocialIconLinkProps {
  link: SocialLink;
}

function SocialIconLink({ link }: SocialIconLinkProps) {
  return (
    <Link
      href={link.href}
      external
      underline="none"
      data-slot="social-icon-link"
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon name={platformIcon[link.platform]} size="sm" aria-hidden="true" />
      <VisuallyHidden>{link.label}</VisuallyHidden>
    </Link>
  );
}

export { SocialIconLink };
