import type { Alternate, Locale } from "@portfolio/contracts";
import { Container } from "@portfolio/ui";
import { Logo } from "../../atoms/logo/Logo";
import { LocaleSwitcher } from "../../molecules/locale-switcher/LocaleSwitcher";
import { NavList, type NavListItem } from "../../molecules/nav-list/NavList";
import { MobileMenu } from "../mobile-menu/MobileMenu";

export interface SiteHeaderProps {
  nav: NavListItem[];
  alternates: Alternate[];
  locale: Locale;
  localeLabels?: Record<Locale, string>;
  logoHref: string;
  menuOpenLabel?: string;
  menuCloseLabel?: string;
}

function SiteHeader({
  nav,
  alternates,
  locale,
  localeLabels,
  logoHref,
  menuOpenLabel,
  menuCloseLabel,
}: SiteHeaderProps) {
  return (
    <header
      data-slot="site-header"
      className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo href={logoHref} />

        <div className="hidden items-center gap-8 sm:flex">
          <NavList items={nav} />
          <LocaleSwitcher
            alternates={alternates}
            current={locale}
            localeLabels={localeLabels}
          />
        </div>

        <MobileMenu
          items={nav}
          openLabel={menuOpenLabel}
          closeLabel={menuCloseLabel}
        />
      </Container>
    </header>
  );
}

export { SiteHeader };
