import { formatMessage } from "@portfolio/utils";
import type { ReactNode } from "react";
import { FitText } from "../../atoms/fit-text/FitText";
import { LocalClock } from "../../atoms/local-clock/LocalClock";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { LiveDot } from "../../atoms/pill/Pill";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { Anchor } from "../../lib/adapters";
import { BLOG_ENABLED, pagePaths, type ChromeProps } from "../../lib/types";

export interface FooterProps extends Omit<ChromeProps, "alternates"> {
  /** Copyright year; defaults to the current year. */
  year?: number;
}

function FooterCol({
  title,
  wide,
  children,
}: {
  title: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={
        wide
          ? "col-span-12 flex flex-col gap-4 sm:col-span-4 lg:col-span-2"
          : "col-span-6 flex flex-col gap-4 sm:col-span-4 lg:col-span-2"
      }
    >
      <p className="label-2xs text-band-muted">{title}</p>
      {children}
    </div>
  );
}

const linkClass =
  "flex min-h-9 items-center text-base transition-colors duration-150 hover:text-band-primary";

/** Band footer: intro, sitemap, elsewhere, based-in + clock, giant wordmark, legal row. */
function Footer({
  site,
  dict,
  locale,
  year = new Date().getFullYear(),
}: FooterProps) {
  const paths = pagePaths(locale);
  const [first, ...rest] = site.name.split(" ");
  const sitemap = [
    { label: dict.nav.home, href: paths.home },
    { label: dict.nav.work, href: paths.work },
    { label: dict.nav.about, href: paths.about },
    ...(BLOG_ENABLED ? [{ label: dict.nav.blog, href: paths.blog }] : []),
    { label: dict.footer.contact, href: "#contact" },
  ];
  return (
    <footer data-slot="footer" className="band shrink-0">
      <div className="wrap pt-16 pb-8 sm:pt-20 lg:pt-24 space-y-24">
        <div className="g12 gap-y-10 sm:gap-y-12">
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-6">
            <p className="type-display text-[26px] leading-none text-band-fg">
              {site.author.initials}
              <Dot />
            </p>
            <p className="max-w-[380px] text-lg leading-[1.5] text-band-muted">
              {site.tagline}
            </p>
          </div>
          <FooterCol title={dict.footer.sitemap}>
            <ul className="flex flex-col">
              {sitemap.map((item) => (
                <li key={item.label}>
                  <Anchor href={item.href} className={linkClass}>
                    {item.label}
                  </Anchor>
                </li>
              ))}
            </ul>
          </FooterCol>
          <FooterCol title={dict.footer.elsewhere}>
            <ul className="flex flex-col">
              {site.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} className={linkClass}>
                    {social.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {dict.footer.email} ↗
                </a>
              </li>
              {site.cvUrl && (
                <li>
                  <a href={site.cvUrl} className={linkClass}>
                    {dict.footer.cv} ↓
                  </a>
                </li>
              )}
            </ul>
          </FooterCol>
          <FooterCol title={dict.footer.basedIn} wide>
            <p className="text-base leading-[1.6]">{site.location}</p>
            <p
              data-vd="dynamic"
              className="label-2xs flex items-center gap-2.5 text-band-muted"
            >
              <LiveDot className="bg-band-primary" />
              <LocalClock
                timeZone={site.timezone}
                suffix={` ${dict.common.local}`}
              />
            </p>
          </FooterCol>
        </div>
        <FitText
          as="p"
          min={40}
          aria-hidden="true"
          className="type-display t-ftr-mark flex flex-col whitespace-nowrap sm:flex-row sm:justify-between"
        >
          <span>{first}</span>
          <span>
            <OutlineText weight="thin">{rest.join(" ")}</OutlineText>
            <Dot />
          </span>
        </FitText>
        <div className="mt-10 flex flex-col items-start gap-1 border-t border-band-line pt-6 text-band-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="label-2xs">
            {formatMessage(dict.footer.rights, { year })}
          </p>
          <p className="label-2xs">{dict.footer.builtWith}</p>
          <SweepLink href="#top" arrow="up" className="text-band-fg">
            {dict.common.backToTop}
          </SweepLink>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
