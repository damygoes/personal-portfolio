import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders a separator with a horizontal orientation by default", () => {
    const { getByRole } = render(<Divider />);
    const el = getByRole("separator");
    expect(el).toHaveAttribute("data-orientation", "horizontal");
    expect(el).toHaveAttribute("data-slot", "divider");
    expect(el).toHaveClass("bg-divider");
  });

  it("supports the vertical orientation", () => {
    const { getByRole } = render(<Divider orientation="vertical" />);
    expect(getByRole("separator")).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
  });

  it("applies the spacing variant", () => {
    const { getByRole } = render(<Divider spacing="lg" />);
    expect(getByRole("separator")).toHaveClass("my-6");
  });

  it("merges className", () => {
    const { getByRole } = render(<Divider className="custom-class" />);
    expect(getByRole("separator")).toHaveClass("custom-class", "bg-divider");
  });
});
