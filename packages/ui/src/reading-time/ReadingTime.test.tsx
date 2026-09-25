import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ReadingTime } from "./ReadingTime";

describe("ReadingTime", () => {
  it("renders the pre-resolved label", () => {
    const { getByText } = render(
      <ReadingTime minutes={5} label="5 min read" />,
    );
    const el = getByText("5 min read");
    expect(el).toHaveAttribute("data-slot", "reading-time");
    expect(el).toHaveAttribute("data-minutes", "5");
  });

  it("merges className", () => {
    const { getByText } = render(
      <ReadingTime minutes={1} label="1 min read" className="custom-class" />,
    );
    expect(getByText("1 min read")).toHaveClass("custom-class");
  });
});
