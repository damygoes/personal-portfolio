import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Runs } from "./Runs";

const runs = [
  { text: "like " },
  { text: "Passe.", strong: true },
  { text: " and " },
  { text: "help people", highlight: true },
  { text: "ElliesNote", href: "/en/work/elliesnote" },
];

describe("Runs", () => {
  it("renders strong, highlight and link runs", () => {
    render(
      <p>
        <Runs runs={runs} />
      </p>,
    );
    expect(screen.getByText("Passe.").tagName).toBe("STRONG");
    expect(screen.getByText("help people")).toHaveClass("num");
    expect(screen.getByRole("link", { name: "ElliesNote" })).toHaveAttribute(
      "href",
      "/en/work/elliesnote",
    );
  });

  it("renders links as text when plain", () => {
    render(
      <p>
        <Runs runs={runs} plain />
      </p>,
    );
    expect(screen.queryByRole("link")).toBeNull();
    expect(screen.getByText("ElliesNote")).toBeInTheDocument();
  });
});
