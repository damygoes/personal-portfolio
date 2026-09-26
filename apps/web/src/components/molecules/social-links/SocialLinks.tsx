import type { SocialLink } from "@portfolio/contracts";
import { SocialIconLink } from "../../atoms/social-icon-link/SocialIconLink";

export interface SocialLinksProps {
  links: SocialLink[];
}

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul data-slot="social-links" className="flex items-center gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <SocialIconLink link={link} />
        </li>
      ))}
    </ul>
  );
}

export { SocialLinks };
