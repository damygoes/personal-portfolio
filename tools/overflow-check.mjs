import { chromium } from "playwright";
/**
 * Reports horizontal overflow (qa.md: none from 320 to 1920 px, EN and DE) for page stories.
 * Run: node tools/overflow-check.mjs pages--home,pages--work [widths] [locale]
 *      e.g. node tools/overflow-check.mjs pages--about 320,390,768,1024,1440,1920 de
 * Needs Storybook running on :6006. Truncated text (ellipsis) is reported but is not page overflow.
 */
const stories = process.argv[2].split(",");
const widths = (process.argv[3] || "320,390,768,1024,1440").split(",").map(Number);
const locale = process.argv[4] || "de";
const b = await chromium.launch();
for (const id of stories) {
  for (const w of widths) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto(`http://localhost:6006/iframe.html?id=${id}&viewMode=story&globals=locale:${locale}`, { waitUntil: "networkidle" });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(400);
    const res = await p.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const bad = [];
      for (const el of document.querySelectorAll("h1,h2,h3,p,a,span,li")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > vw + 1 || el.scrollWidth > el.clientWidth + 1) && !el.closest("[aria-hidden=true]")) {
          bad.push(`${el.tagName.toLowerCase()} "${el.textContent.trim().slice(0, 30)}" right=${Math.round(r.right)} sw=${el.scrollWidth} cw=${el.clientWidth}`);
        }
      }
      return { sw: document.documentElement.scrollWidth, vw, bad: bad.slice(0, 5) };
    });
    const flag = res.sw > res.vw || res.bad.length ? "OVERFLOW" : "ok";
    console.log(`${id.padEnd(32)} ${String(w).padStart(5)} ${flag} ${res.bad.join(" | ")}`);
    await p.close();
  }
}
await b.close();
