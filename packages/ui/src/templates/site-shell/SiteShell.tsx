import type { ReactNode } from "react";
import { SkipLink } from "../../atoms/talk-button/TalkButton";
import type { ChromeProps, NavKey } from "../../lib/types";
import { Footer } from "../../organisms/footer/Footer";
import { Header } from "../../organisms/header/Header";

export interface SiteShellProps extends ChromeProps {
  active: NavKey | null;
  children: ReactNode;
  menuOpen?: boolean;
  /** Fixed copyright year (stories, visual tests). */
  year?: number;
}

/** Skip link, header, main content and footer. `#top` is the back-to-top target. */
function SiteShell({
  active,
  children,
  menuOpen,
  year,
  ...chrome
}: SiteShellProps) {
  return (
    <div
      id="top"
      data-slot="site-shell"
      className="flex min-h-screen flex-col overflow-x-clip"
    >
      <SkipLink>{chrome.dict.nav.skipToContent}</SkipLink>
      <Header {...chrome} active={active} menuOpen={menuOpen} />
      <main id="content" className="flex grow flex-col">
        {children}
      </main>
      <Footer
        site={chrome.site}
        dict={chrome.dict}
        locale={chrome.locale}
        year={year}
      />
    </div>
  );
}

export { SiteShell };
