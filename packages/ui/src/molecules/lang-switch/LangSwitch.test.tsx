import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LangSwitch, localeOptions, type LangOption } from "./LangSwitch";

const alternates = { en: "/en/about", de: "/de/about" };

describe("LangSwitch", () => {
  it("links to the same route in each locale", () => {
    render(
      <LangSwitch
        current="de"
        options={localeOptions(alternates)}
        label="Sprache"
      />,
    );
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute(
      "href",
      "/en/about",
    );
    const de = screen.getByRole("link", { name: "DE" });
    expect(de).toHaveAttribute("aria-current", "true");
    expect(de).toHaveAttribute("hreflang", "de");
    expect(
      screen.getByRole("navigation", { name: "Sprache" }),
    ).toBeInTheDocument();
  });

  it("switches to a menu from three locales", () => {
    const options: LangOption[] = [
      ...localeOptions(alternates),
      { code: "fr", label: "FR", name: "Français", href: "/fr/about" },
    ];
    const { container } = render(
      <LangSwitch current="en" options={options} label="Language" />,
    );
    expect(container.querySelector("details")).not.toBeNull();
    expect(screen.getByText("Français").closest("a")).toHaveAttribute(
      "href",
      "/fr/about",
    );
  });

  it("stays inline with variant=inline", () => {
    const options: LangOption[] = [
      ...localeOptions(alternates),
      { code: "fr", label: "FR", name: "Français", href: "/fr/about" },
    ];
    const { container } = render(
      <LangSwitch
        current="en"
        options={options}
        label="Language"
        variant="inline"
      />,
    );
    expect(container.querySelector("details")).toBeNull();
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
