import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Prose } from "./Prose";

const image = {
  src: "https://example.com/a.jpg",
  alt: "A",
  width: 10,
  height: 10,
};

describe("Prose", () => {
  it("renders headings with anchors, ordered lists and numbered figures", () => {
    render(
      <Prose
        figLabel="Fig. {n}"
        blocks={[
          { _type: "heading", _key: "h", id: "s1", text: "Keep it small" },
          {
            _type: "list",
            _key: "l",
            ordered: true,
            items: [[{ text: "One" }], [{ text: "Two" }]],
          },
          { _type: "figure", _key: "f", image, caption: "First" },
          {
            _type: "gallery",
            _key: "g",
            images: [image, image],
            caption: "Trip",
          },
        ]}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Keep it small" }),
    ).toHaveAttribute("id", "s1");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Fig. 01 — First")).toBeInTheDocument();
    // Gallery (photography layout not designed yet) falls back to standard figures.
    expect(screen.getByText("Fig. 02 — Trip")).toBeInTheDocument();
    expect(screen.getByText("Fig. 03")).toBeInTheDocument();
  });
});
