import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DateRange } from "./DateRange";

describe("DateRange", () => {
  it("renders the formatted start and end dates", () => {
    const { container, getByText } = render(
      <DateRange start="2020-01-01" end="2022-06-01" locale="en" />,
    );
    expect(getByText("Jan 2020")).toBeInTheDocument();
    expect(getByText("Jun 2022")).toBeInTheDocument();
    expect(container).toHaveTextContent("Jan 2020 – Jun 2022");
  });

  it("renders the present label when end is null", () => {
    const { getByText } = render(
      <DateRange start="2020-01-01" end={null} locale="en" />,
    );
    expect(getByText("Present", { exact: false })).toBeInTheDocument();
  });

  it("supports a custom present label", () => {
    const { getByText } = render(
      <DateRange
        start="2020-01-01"
        end={null}
        locale="de"
        presentLabel="Heute"
      />,
    );
    expect(getByText("Heute", { exact: false })).toBeInTheDocument();
  });

  it("sets dateTime attributes on the rendered <time> elements", () => {
    const { container } = render(
      <DateRange start="2020-01-01" end="2022-06-01" locale="en" />,
    );
    const times = container.querySelectorAll("time");
    expect(times[0]).toHaveAttribute("dateTime", "2020-01-01");
    expect(times[1]).toHaveAttribute("dateTime", "2022-06-01");
  });

  it("merges className", () => {
    const { container } = render(
      <DateRange
        start="2020-01-01"
        end={null}
        locale="en"
        className="custom-class"
      />,
    );
    expect(container.querySelector('[data-slot="date-range"]')).toHaveClass(
      "custom-class",
    );
  });
});
