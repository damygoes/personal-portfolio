import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionIndex } from "./SectionIndex";

describe("SectionIndex", () => {
  it("renders the index wrapped in parentheses", () => {
    const { getByText } = render(<SectionIndex index="01" />);
    const el = getByText("(01)");
    expect(el).toHaveAttribute("data-slot", "section-index");
  });

  it("merges className", () => {
    const { getByText } = render(
      <SectionIndex index="02" className="custom-class" />,
    );
    expect(getByText("(02)")).toHaveClass("custom-class", "font-mono");
  });
});
