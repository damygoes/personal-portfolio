"use client";

import { Button } from "@portfolio/ui";
import { useEffect, useState } from "react";
import { NavList, type NavListItem } from "../../molecules/nav-list/NavList";

export interface MobileMenuProps {
  items: NavListItem[];
  openLabel?: string;
  closeLabel?: string;
}

function MobileMenu({
  items,
  openLabel = "Open menu",
  closeLabel = "Close menu",
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div data-slot="mobile-menu" className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        icon={open ? "close" : "menu"}
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      />

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-background p-6"
        >
          <NavList
            items={items}
            orientation="vertical"
            onNavigate={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export { MobileMenu };
