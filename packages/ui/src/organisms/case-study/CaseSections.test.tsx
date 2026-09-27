import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { storyData } from "../../stories/story-data";
import { CaseSections, NextProject } from "./CaseSections";

describe("CaseSections", () => {
  it("renders the numbered sections that have content, headings ending in a spark dot", async () => {
    const { passe, dict } = await storyData("en");
    const { container } = render(<CaseSections study={passe} />);
    expect(screen.getByText("Overview").parentElement).toHaveTextContent(
      "01 Overview",
    );
    expect(screen.getByText("How it's built").parentElement).toHaveTextContent(
      "06 How it's built",
    );
    expect(screen.queryByText("Outcome")).toBeNull();
    const heading = screen.getByRole("heading", {
      name: "A camera roll is not a memory.",
    });
    expect(heading.querySelector(".dot")).not.toBeNull();
    expect(container.textContent).not.toMatch(/\[|To write|Prompts/);
    render(<NextProject study={passe} dict={dict} />);
    expect(screen.getByText(/Next project/)).toHaveTextContent(
      "Next project 02 / 05",
    );
  });
});
