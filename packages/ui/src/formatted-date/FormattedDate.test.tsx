import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FormattedDate } from "./FormattedDate";

describe("FormattedDate", () => {
  it("renders a <time> element with the raw date as dateTime", () => {
    const { getByText } = render(
      <FormattedDate date="2024-03-15" locale="en" />,
    );
    const el = getByText("March 15, 2024");
    expect(el.tagName).toBe("TIME");
    expect(el).toHaveAttribute("dateTime", "2024-03-15");
    expect(el).toHaveAttribute("data-slot", "formatted-date");
  });

  it("formats according to the given locale", () => {
    const { getByText } = render(
      <FormattedDate date="2024-03-15" locale="de" />,
    );
    expect(getByText("15. März 2024")).toBeInTheDocument();
  });

  it("supports custom Intl.DateTimeFormatOptions", () => {
    const { getByText } = render(
      <FormattedDate
        date="2024-03-15"
        locale="en"
        options={{ month: "short", year: "numeric" }}
      />,
    );
    expect(getByText("Mar 2024")).toBeInTheDocument();
  });

  it("merges className", () => {
    const { getByText } = render(
      <FormattedDate date="2024-03-15" locale="en" className="custom-class" />,
    );
    expect(getByText("March 15, 2024")).toHaveClass("custom-class");
  });
});
