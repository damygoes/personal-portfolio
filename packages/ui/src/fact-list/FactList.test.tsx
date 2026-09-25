import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FactList } from "./FactList";

describe("FactList", () => {
  it("renders each item", () => {
    const { getByText } = render(
      <FactList
        items={["Based in Germany", "Fullstack Developer", "4+ yrs"]}
      />,
    );
    expect(getByText("Based in Germany")).toBeInTheDocument();
    expect(getByText("Fullstack Developer")).toBeInTheDocument();
    expect(getByText("4+ yrs")).toBeInTheDocument();
  });

  it("renders a separator between items but not before the first", () => {
    const { getAllByText, container } = render(
      <FactList items={["A", "B", "C"]} />,
    );
    expect(getAllByText("·")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0]).not.toHaveTextContent("·");
  });

  it("supports a custom separator", () => {
    const { getAllByText } = render(
      <FactList items={["A", "B"]} separator="/" />,
    );
    expect(getAllByText("/")).toHaveLength(1);
  });

  it("merges className", () => {
    const { getByRole } = render(
      <FactList items={["A"]} className="custom-class" />,
    );
    expect(getByRole("list")).toHaveClass("custom-class");
  });
});
