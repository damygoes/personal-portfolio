import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Facts } from "./Facts";

const facts = [
  {
    label: "Now",
    value: [{ text: "Software Engineer, adesso SE" }],
    onHome: true,
  },
  {
    label: "Building",
    value: [
      { text: "Passe.", href: "/en/work/passe" },
      { text: " & " },
      { text: "ElliesNote", href: "/en/work/elliesnote" },
    ],
    onHome: true,
  },
  { label: "Based in", value: [{ text: "Germany" }], onHome: false },
];

describe("Facts", () => {
  it("shows every fact with links on the about page", () => {
    render(<Facts facts={facts} />);
    expect(screen.getByText("Based in")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  it("drops about-only facts and links in the home teaser", () => {
    render(<Facts facts={facts} variant="teaser" />);
    expect(screen.queryByText("Based in")).toBeNull();
    expect(screen.queryByRole("link")).toBeNull();
  });
});
