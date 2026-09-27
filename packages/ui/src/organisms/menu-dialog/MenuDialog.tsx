"use client";

import { Dialog } from "@base-ui/react/dialog";
import { cn, formatMessage } from "@portfolio/utils";
import { useState } from "react";
import { Arrow } from "../../atoms/arrow/Arrow";
import { Brand } from "../../atoms/brand/Brand";
import { LocalClock } from "../../atoms/local-clock/LocalClock";
import { Anchor } from "../../lib/adapters";
import { pagePaths, type ChromeProps, type NavKey } from "../../lib/types";
import { LangSwitch } from "../../molecules/lang-switch/LangSwitch";

export interface MenuDialogProps extends ChromeProps {
  active: NavKey | null;
  /** Start open (Storybook). */
  defaultOpen?: boolean;
}

/**
 * Tablet/mobile navigation: the Menu button opens a full-screen dialog on the band.
 * Base UI Dialog provides the focus trap, Escape, scroll lock and focus return.
 */
function MenuDialog({
  site,
  dict,
  locale,
  alternates,
  active,
  defaultOpen,
}: MenuDialogProps) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const paths = pagePaths(locale);
  const close = () => setOpen(false);
  const items: { key: NavKey | "home"; label: string; href: string }[] = [
    { key: "home", label: dict.nav.home, href: paths.home },
    { key: "work", label: dict.nav.work, href: paths.work },
    { key: "about", label: dict.nav.about, href: paths.about },
    { key: "blog", label: dict.nav.blog, href: paths.blog },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        data-slot="menu-button"
        className="font-sans text-base uppercase tracking-[0.15em] flex h-11 cursor-pointer items-center gap-2.5 rounded-full border-0 bg-fg px-[18px] text-bg lg:hidden"
      >
        {dict.nav.menu}
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-[1.5px] w-3.5 bg-bg" />
          <span className="block h-[1.5px] w-3.5 bg-bg" />
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup
          data-slot="menu-dialog"
          className="band fixed inset-0 z-20 flex flex-col overflow-y-auto px-5 pb-8 sm:px-8 lg:hidden"
        >
          <Dialog.Title className="sr-only">{dict.nav.siteMenu}</Dialog.Title>
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-band-line sm:h-18">
            <Brand
              href={paths.home}
              initials={site.author.initials}
              label={formatMessage(dict.nav.homeLabel, { name: site.name })}
            />
            <Dialog.Close className="font-sans text-base uppercase tracking-[0.15em] h-11 cursor-pointer rounded-full border-0 bg-band-fg px-[18px] text-band">
              {dict.nav.close} ✕
            </Dialog.Close>
          </div>
          <nav
            aria-label={dict.nav.main}
            className="type-display mt-8 flex grow flex-col"
          >
            {items.map((item) => (
              <Anchor
                key={item.key}
                href={item.href}
                onClick={close}
                aria-current={item.key === active ? "page" : undefined}
                className={cn(
                  "flex items-baseline gap-4 border-b border-band-line py-3.5 text-[40px] leading-none sm:text-[56px]",
                  item.key === active && "text-band-primary",
                )}
              >
                {item.label}
                <Arrow dir="right" className="ml-auto text-[32px]" />
              </Anchor>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="flex items-baseline gap-4 border-b border-band-line py-3.5 text-[40px] leading-none sm:text-[56px]"
            >
              {dict.nav.letsTalk}
              <Arrow dir="down" className="ml-auto text-[32px]" />
            </a>
          </nav>
          <div
            data-vd="dynamic"
            className="label-2xs mt-8 flex items-center justify-between text-band-muted"
          >
            <LangSwitch
              locale={locale}
              alternates={alternates}
              labels={dict.lang}
              className="label-2xs"
              mutedClassName="text-band-muted"
            />
            <span>
              {site.location}
              <LocalClock timeZone={site.timezone} prefix=" · " />
            </span>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { MenuDialog };
