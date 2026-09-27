import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LocalClock } from "./LocalClock";

afterEach(() => vi.useRealTimers());

describe("LocalClock", () => {
  it("shows HH:MM in the given zone after mount", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-08-30T18:15:00Z"));
    render(<LocalClock timeZone="Europe/Berlin" prefix="Local time " />);
    expect(screen.getByText("Local time 20:15")).toHaveAttribute(
      "data-vd",
      "dynamic",
    );
  });
});
