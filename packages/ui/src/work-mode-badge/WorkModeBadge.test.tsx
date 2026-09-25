import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WorkModeBadge } from "./WorkModeBadge";

describe("WorkModeBadge", () => {
  it("renders the pre-resolved label with the mode as a data attribute", () => {
    const { getByText } = render(
      <WorkModeBadge mode="remote" label="Remote" />,
    );
    const el = getByText("Remote");
    expect(el).toHaveAttribute("data-slot", "work-mode-badge");
    expect(el).toHaveAttribute("data-mode", "remote");
  });

  it.each(["onsite", "hybrid", "remote"] as const)(
    "renders an icon for the %s mode",
    (mode) => {
      const { container } = render(<WorkModeBadge mode={mode} label={mode} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    },
  );

  it("merges className", () => {
    const { getByText } = render(
      <WorkModeBadge mode="hybrid" label="Hybrid" className="custom-class" />,
    );
    expect(getByText("Hybrid")).toHaveClass("custom-class");
  });
});
