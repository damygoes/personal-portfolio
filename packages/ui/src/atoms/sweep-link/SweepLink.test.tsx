import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SweepLink } from "./SweepLink";

describe("SweepLink", () => {
  it("renders a link with a directional spark arrow", () => {
    render(
      <SweepLink href="/en/work" arrow="right">
        All work
      </SweepLink>,
    );
    const link = screen.getByRole("link", { name: /All work/ });
    expect(link).toHaveAttribute("href", "/en/work");
    expect(link).toHaveClass("sweep");
    expect(link.querySelector("[data-dir=right]")).toHaveTextContent("→");
  });

  it("renders a span without href (inside a card) and the soft style", () => {
    render(<SweepLink soft>Read case study</SweepLink>);
    expect(screen.queryByRole("link")).toBeNull();
    expect(screen.getByText("Read case study")).toHaveClass(
      "sweep",
      "sweep-soft",
    );
  });
});
