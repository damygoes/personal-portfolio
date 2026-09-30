import { describe, expect, it } from "vitest";
import {
  pickLocale,
  cn,
  compact,
  countWords,
  formatDate,
  formatMessage,
  formatMonthYear,
  formatPeriod,
  isPlaceholder,
  numberItems,
  pad2,
  readingMinutes,
  splitTitleDot,
  text,
} from "./index";

describe("cn", () => {
  it("lets a later type utility replace an earlier one", () => {
    expect(cn("t-hero", "t-xl")).toBe("t-xl");
  });
  it("keeps a type utility next to a text colour", () => {
    expect(cn("t-xl text-primary")).toBe("t-xl text-primary");
  });
});

describe("dates", () => {
  it("formats per locale", () => {
    expect(formatDate("2026-08-30", "en")).toBe("Aug 30, 2026");
    expect(formatDate("2026-08-30", "de")).toBe("30. Aug. 2026");
  });
  it("formats month precision", () => {
    expect(formatMonthYear("2025-11", "en")).toBe("Nov 2025");
    expect(formatMonthYear("2025-11", "de")).toBe("Nov. 2025");
  });
  it("formats periods", () => {
    expect(formatPeriod("2025-11", null, "en", "Present")).toBe(
      "Nov 2025 — Present",
    );
    expect(formatPeriod("2025-01", "2025-09", "en", "Present")).toBe(
      "Jan 2025 — Sep 2025",
    );
  });
});

describe("numbers and text", () => {
  it("pads", () => {
    expect(pad2(1)).toBe("01");
    expect(pad2(12)).toBe("12");
  });
  it("fills messages", () => {
    expect(formatMessage("{i} / {n}", { i: "01", n: "05" })).toBe("01 / 05");
    expect(formatMessage("{x} stays", {})).toBe("{x} stays");
  });
  it("computes reading time", () => {
    expect(countWords("  one two\nthree ")).toBe(3);
    expect(readingMinutes(0)).toBe(1);
    expect(readingMinutes(226)).toBe(2);
  });
  it("splits the title dot", () => {
    expect(splitTitleDot("Passe.")).toEqual({ title: "Passe", titleDot: true });
    expect(splitTitleDot("ElliesNote")).toEqual({
      title: "ElliesNote",
      titleDot: false,
    });
  });
});

describe("placeholders", () => {
  it("detects placeholders", () => {
    expect(isPlaceholder(null)).toBe(true);
    expect(isPlaceholder("  ")).toBe(true);
    expect(isPlaceholder("[Role]")).toBe(true);
    expect(isPlaceholder({ placeholder: true, prompt: "x" })).toBe(true);
    expect(isPlaceholder([null, ""])).toBe(true);
    expect(isPlaceholder("Real [not placeholder] text")).toBe(false);
    expect(isPlaceholder(0)).toBe(false);
  });
  it("cleans text and lists", () => {
    expect(text("[TBD]")).toBeUndefined();
    expect(text(" Hi ")).toBe("Hi");
    expect(compact(["a", null, { placeholder: true }, "b"])).toEqual([
      "a",
      "b",
    ]);
  });
  it("numbers after filtering", () => {
    expect(numberItems([{ a: 1 }, { a: 2 }])).toEqual([
      { a: 1, number: "01" },
      { a: 2, number: "02" },
    ]);
  });
});

describe("pickLocale", () => {
  const title = [
    { _key: "en", value: "Work" },
    { _key: "de", value: "" },
  ];

  it("takes the first non-empty value along the chain", () => {
    expect(pickLocale([{ _key: "en", value: "Work" }], ["de", "en"])).toBe(
      "Work",
    );
    expect(
      pickLocale(
        [
          { _key: "en", value: "Work" },
          { _key: "de", value: "Arbeit" },
        ],
        ["de", "en"],
      ),
    ).toBe("Arbeit");
  });

  it("skips empty and placeholder translations", () => {
    expect(pickLocale(title, ["de", "en"])).toBe("Work");
    expect(
      pickLocale(
        [
          { _key: "de", value: "[To write]" },
          { _key: "en", value: "Work" },
        ],
        ["de", "en"],
      ),
    ).toBe("Work");
  });

  it("returns undefined when nothing resolves", () => {
    expect(pickLocale(undefined, ["en"])).toBeUndefined();
    expect(
      pickLocale([{ _key: "de", value: "Arbeit" }], ["en"]),
    ).toBeUndefined();
  });
});
