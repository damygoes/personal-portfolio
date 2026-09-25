import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ScrollHint } from "./ScrollHint";

describe("ScrollHint", () => {
  it("renders the default label wrapped in parentheses", () => {
    const { getByText } = render(<ScrollHint />);
    expect(getByText("(Scroll)")).toHaveAttribute("data-slot", "scroll-hint");
  });

  it("supports a custom label", () => {
    const { getByText } = render(<ScrollHint label="Scroll down" />);
    expect(getByText("(Scroll down)")).toBeInTheDocument();
  });

  it("merges className", () => {
    const { getByText } = render(<ScrollHint className="custom-class" />);
    expect(getByText("(Scroll)")).toHaveClass("custom-class");
  });
});
