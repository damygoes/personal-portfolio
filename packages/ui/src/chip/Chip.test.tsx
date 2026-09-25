import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders as a span when no href is given", () => {
    const { getByText } = render(<Chip label="React" />);
    const el = getByText("React");
    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveAttribute("data-slot", "chip");
  });

  it("renders as a link when href is given", () => {
    const { getByRole } = render(<Chip label="Blog" href="/blog" />);
    const el = getByRole("link", { name: "Blog" });
    expect(el).toHaveAttribute("href", "/blog");
  });

  it("applies active styling and aria-current", () => {
    const { getByRole } = render(<Chip label="Blog" href="/blog" active />);
    const el = getByRole("link", { name: "Blog" });
    expect(el).toHaveAttribute("aria-current", "true");
    expect(el).toHaveClass("bg-primary");
  });

  it("merges className", () => {
    const { getByText } = render(
      <Chip label="React" className="custom-class" />,
    );
    expect(getByText("React")).toHaveClass("custom-class");
  });
});
