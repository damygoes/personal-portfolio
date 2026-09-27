import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TitleLines } from "./TitleLines";

describe("TitleLines", () => {
  it("breaks, outlines the second line and ends with the spark dot", () => {
    const { container } = render(
      <h2>
        <TitleLines lines={["Selected", "work"]} />
      </h2>,
    );
    expect(container.querySelector("br")).not.toBeNull();
    expect(container.querySelector(".text-outline")).toHaveTextContent("work");
    expect(container.querySelector(".dot")).toHaveTextContent(".");
  });

  it("supports one line without outline or dot", () => {
    const { container } = render(
      <h2>
        <TitleLines
          lines={["Where I've", "built things"]}
          outline={false}
          dot={false}
          join="space"
        />
      </h2>,
    );
    expect(container.textContent).toBe("Where I've built things");
    expect(container.querySelector("br, .dot, .text-outline")).toBeNull();
  });
});
