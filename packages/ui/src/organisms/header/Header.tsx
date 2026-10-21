import { formatMessage } from "@portfolio/utils";
import { Brand } from "../../atoms/brand/Brand";
import { TalkButton } from "../../atoms/talk-button/TalkButton";
import { pagePaths, type ChromeProps, type NavKey } from "../../lib/types";
import {
  LangSwitch,
  localeOptions,
} from "../../molecules/lang-switch/LangSwitch";
import { NavLinks } from "../../molecules/nav-links/NavLinks";
import { ThemeToggle } from "../../molecules/theme-toggle/ThemeToggle";
import { MenuDialog } from "../menu-dialog/MenuDialog";

export interface HeaderProps extends ChromeProps {
  active: NavKey | null;
  menuOpen?: boolean;
}

/** DB. · Work About Blog · EN/DE, theme, Let's talk — Menu below 1024. */
function Header({
  site,
  dict,
  locale,
  alternates,
  active,
  menuOpen,
}: HeaderProps) {
  const paths = pagePaths(locale);
  return (
    <header
      data-slot="header"
      className="wrap relative z-[5] flex h-16 shrink-0 items-center justify-between border-b border-divider sm:h-18 lg:h-22"
    >
      <Brand
        href={paths.home}
        initials={site.author.initials}
        label={formatMessage(dict.nav.homeLabel, { name: site.name })}
      />
      <NavLinks
        label={dict.nav.main}
        active={active}
        items={[
          { key: "work", label: dict.nav.work, href: paths.work },
          { key: "about", label: dict.nav.about, href: paths.about },
          { key: "blog", label: dict.nav.blog, href: paths.blog },
        ]}
      />
      <div className="flex items-center gap-2 sm:gap-4">
        <LangSwitch
          current={locale}
          options={localeOptions(alternates)}
          label={dict.lang.label}
          className="hidden sm:flex"
        />
        <ThemeToggle labels={dict.theme} />
        <span
          aria-hidden="true"
          className="hidden h-5 w-px bg-divider lg:block"
        />
        <TalkButton className="hidden sm:inline-flex">
          {dict.nav.letsTalk}
        </TalkButton>
        <MenuDialog
          site={site}
          dict={dict}
          locale={locale}
          alternates={alternates}
          active={active}
          defaultOpen={menuOpen}
        />
      </div>
    </header>
  );
}

export { Header };
