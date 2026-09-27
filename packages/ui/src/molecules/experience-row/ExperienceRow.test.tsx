import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceRow } from "./ExperienceRow";

const labels = {
  now: "Now",
  workMode: { onsite: "On-site", hybrid: "Hybrid", remote: "Remote" },
};
const base = {
  start: "2025-01",
  end: "2025-09",
  when: "Jan 2025 — Sep 2025",
  isCurrent: false,
  role: "Team Lead",
  company: "apomap GmbH",
  location: "Winterberg",
  workMode: "hybrid" as const,
  bullets: ["Mentor and conduct code reviews for a team of 3 developers"],
};

describe("ExperienceRow", () => {
  it("joins company, place and work mode and lists bullets", () => {
    render(
      <ol>
        <ExperienceRow item={base} labels={labels} />
      </ol>,
    );
    expect(
      screen.getByText("apomap GmbH · Winterberg · Hybrid"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Mentor and conduct/)).toBeInTheDocument();
    expect(screen.queryByText("Now")).toBeNull();
  });

  it("shows the NOW badge and summary for the current role", () => {
    render(
      <ol>
        <ExperienceRow
          item={{
            ...base,
            end: null,
            isCurrent: true,
            workMode: undefined,
            summary: "Building tailored software.",
            bullets: [],
          }}
          labels={labels}
        />
      </ol>,
    );
    expect(screen.getByText("Now")).toBeInTheDocument();
    expect(screen.getByText("Building tailored software.")).toBeInTheDocument();
    expect(screen.getByText("apomap GmbH · Winterberg")).toBeInTheDocument();
  });
});
