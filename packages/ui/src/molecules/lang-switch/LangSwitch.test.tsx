import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LangSwitch } from "./LangSwitch";

describe("LangSwitch", () => {
  it("links to the same route in each locale", () => {
    render(
      <LangSwitch
        locale="de"
        alternates={{ en: "/en/about", de: "/de/about" }}
        labels={{ en: "EN", de: "DE" }}
      />,
    );
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute(
      "href",
      "/en/about",
    );
    const de = screen.getByRole("link", { name: "DE" });
    expect(de).toHaveAttribute("aria-current", "true");
    expect(de).toHaveAttribute("hreflang", "de");
  });
});
