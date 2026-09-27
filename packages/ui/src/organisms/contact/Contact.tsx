import type { SiteSettingsDTO } from "@portfolio/contracts";
import type { Dictionary } from "@portfolio/i18n";
import { BigLink } from "../../atoms/big-link/BigLink";
import { Dot, OutlineText } from "../../atoms/outline-text/OutlineText";
import { SectionLabel } from "../../atoms/section-label/SectionLabel";
import { SweepLink } from "../../atoms/sweep-link/SweepLink";
import { TitleLines } from "../../molecules/title-lines/TitleLines";
import { FitText } from "../../atoms/fit-text/FitText";

interface ContactProps {
  site: SiteSettingsDTO;
  dict: Dictionary;
}

/** Inner-page CTA band: "LET'S WORK / TOGETHER." + the email, bottom-right on desktop. */
function ContactCTA({ site, dict }: ContactProps) {
  return (
    <section
      id="contact"
      data-slot="contact-cta"
      aria-labelledby="cta-title"
      className="wrap border-t border-divider py-20 sm:py-24 lg:py-32"
    >
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-full min-w-0 flex-col gap-5">
          <p className="label text-muted">{dict.cta.eyebrow}</p>
          <FitText
            as="h2"
            min={36}
            id="cta-title"
            className="type-display t-cta"
          >
            <TitleLines lines={dict.cta.title} />
          </FitText>
        </div>
        <BigLink size="cta" href={`mailto:${site.email}`}>
          {site.email}
        </BigLink>
      </div>
    </section>
  );
}

/** Home "04 Contact": hero-size title, the email and LinkedIn / GitHub / CV links. */
function ContactSection({
  site,
  dict,
  number,
}: ContactProps & { number: string }) {
  const [first, second] = dict.home.contactTitle;
  return (
    <section
      id="contact"
      data-slot="contact-section"
      aria-labelledby="contact-title"
      className="wrap rule flex grow flex-col py-24 sm:py-32 lg:py-40"
    >
      <SectionLabel number={number}>{dict.home.sections.contact}</SectionLabel>
      <FitText
        as="h2"
        min={52}
        id="contact-title"
        className="type-display t-hero flex flex-col max-sm:text-[58px]"
      >
        <span>{first}</span>
        <span>
          <OutlineText>{second}</OutlineText>
          <Dot />
        </span>
      </FitText>
      <div className="g12 mt-12 items-end gap-y-8 sm:mt-14 lg:mt-20">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-8">
          <p className="label text-muted">{dict.home.dropALine}</p>
          <BigLink size="contact" href={`mailto:${site.email}`}>
            {site.email}
          </BigLink>
        </div>
        <ul className="col-span-12 flex flex-col items-stretch border-t border-divider lg:col-span-4 lg:items-end lg:border-t-0">
          {site.socials.map((social) => (
            <li
              key={social.href}
              className="border-b border-divider lg:border-b-0"
            >
              <SweepLink
                href={social.href}
                arrow="up-right"
                className="min-h-14 w-full justify-between lg:min-h-11 lg:w-auto lg:justify-start"
              >
                {social.label}
              </SweepLink>
            </li>
          ))}
          {site.cvUrl && (
            <li className="border-b border-divider lg:border-b-0">
              <SweepLink
                href={site.cvUrl}
                arrow="down"
                soft
                className="min-h-14 w-full justify-between lg:min-h-11 lg:w-auto lg:justify-start"
              >
                {dict.common.downloadCv}
              </SweepLink>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

export { ContactCTA, ContactSection };
