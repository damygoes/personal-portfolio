import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LangSwitch, localeOptions } from "./LangSwitch";

const alternates = { en: "/en/about", de: "/de/about", fr: "/fr/about" };

describe("LangSwitch", () => {
  it("links to the same route in each locale", () => {
    render(
      <LangSwitch
        current="de"
        options={localeOptions(alternates)}
        label="Sprache"
        variant="inline"
      />,
    );
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute(
      "href",
      "/en/about",
    );
    expect(screen.getByRole("link", { name: "FR" })).toHaveAttribute(
      "href",
      "/fr/about",
    );
    const de = screen.getByRole("link", { name: "DE" });
    expect(de).toHaveAttribute("aria-current", "true");
    expect(de).toHaveAttribute("hreflang", "de");
    expect(
      screen.getByRole("navigation", { name: "Sprache" }),
    ).toBeInTheDocument();
  });

  it("keeps the toggle for two locales", () => {
    const { container } = render(
      <LangSwitch
        current="en"
        options={localeOptions(alternates).slice(0, 2)}
        label="Language"
      />,
    );
    expect(container.querySelector("details")).toBeNull();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("switches to a menu from three locales", () => {
    const { container } = render(
      <LangSwitch
        current="en"
        options={localeOptions(alternates)}
        label="Language"
      />,
    );
    expect(container.querySelector("details")).not.toBeNull();
    expect(screen.getByText("Français").closest("a")).toHaveAttribute(
      "href",
      "/fr/about",
    );
  });

  it("stays inline with variant=inline", () => {
    const { container } = render(
      <LangSwitch
        current="en"
        options={localeOptions(alternates)}
        label="Language"
        variant="inline"
      />,
    );
    expect(container.querySelector("details")).toBeNull();
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
