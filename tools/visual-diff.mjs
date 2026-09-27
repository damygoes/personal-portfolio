#!/usr/bin/env node
/**
 * Visual diff: implementation vs the reference design.
 * A copy of damilolabada-redesign-handoff/scripts/visual-diff.mjs with one addition:
 * `--storybook <url>` screenshots the Storybook page stories instead of app routes.
 *
 * Run (Storybook):  node tools/visual-diff.mjs --storybook http://localhost:6006
 * Run (app):        node tools/visual-diff.mjs --base http://localhost:3000
 * Options:          --pages home,about  --widths 390,1440  --dark  --threshold 1.5
 *                   --post-slug <slug>  --ref-dir <path to reference-html>
 * Output: ./vd-out/<page>--<width>{--dark}--{ref,live,diff}.png and a summary table.
 */
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import fs from "node:fs";
import path from "node:path";

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > -1 ? process.argv[i + 1] : d;
};
const flag = (k) => process.argv.includes(`--${k}`);

const refDir = path.resolve(
  process.cwd(),
  arg("ref-dir", "damilolabada-redesign-handoff/design/reference-html"),
);
const outDir = path.resolve(process.cwd(), "vd-out");
const storybook = arg("storybook")?.replace(/\/$/, "");
const base = arg("base", "http://localhost:3000").replace(/\/$/, "");
const dark = flag("dark");
const threshold = parseFloat(arg("threshold", "1.5"));
const postSlug = arg("post-slug", "code-review-team-of-three");

const ROUTES = {
  home: "/en",
  work: "/en/work",
  "work-passe": "/en/work/passe",
  "work-elliesnote": "/en/work/elliesnote",
  about: "/en/about",
  blog: "/en/blog",
  "blog-post": `/en/blog/${postSlug}`,
};
const STORIES = {
  home: "pages--home",
  work: "pages--work",
  "work-passe": "pages--case-study-passe",
  "work-elliesnote": "pages--case-study-ellies-note",
  about: "pages--about",
  blog: "pages--blog",
  "blog-post": "pages--blog-post",
};
const liveUrl = (page) =>
  storybook
    ? `${storybook}/iframe.html?id=${STORIES[page]}&viewMode=story&globals=theme:${dark ? "dark" : "light"};locale:en`
    : base + ROUTES[page];

const pages = (arg("pages") || Object.keys(ROUTES).join(",")).split(",");
const widths = (arg("widths") || "390,768,1440").split(",").map(Number);

const REF_MASK = [".ph", ".feat-cover", ".proj-cover", ".post-cover", ".cs-cover", ".ph-cover", ".feat-shot", ".fig-img", ".avatar", ".live", ".menu-foot"];
const LIVE_MASK = ['[data-vd="media"]', '[data-vd="dynamic"]'];
const FREEZE = `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}`;

async function shoot(browser, url, width, mask, isRef) {
  const page = await browser.newPage({
    viewport: { width, height: width < 640 ? 844 : 900 },
    reducedMotion: "reduce",
  });
  await page.emulateMedia({ colorScheme: dark ? "dark" : "light" });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: FREEZE });
  if (dark) {
    await page.evaluate((ref) => {
      (ref ? document.getElementById("top") : document.documentElement).classList.add("dark");
    }, isRef);
  }
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(storybook && !isRef ? 800 : 300);
  const buf = await page.screenshot({
    fullPage: true,
    mask: mask.map((s) => page.locator(s)),
    maskColor: "#ff00ff",
  });
  await page.close();
  return PNG.sync.read(buf);
}

function crop(png, w, h) {
  const out = new PNG({ width: w, height: h });
  PNG.bitblt(png, out, 0, 0, w, h, 0, 0);
  return out;
}

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const rows = [];
let failed = 0;
for (const p of pages) {
  for (const w of widths) {
    const tag = `${p}--${w}${dark ? "--dark" : ""}`;
    const ref = await shoot(browser, "file://" + path.join(refDir, `${p}.html`), w, REF_MASK, true);
    const live = await shoot(browser, liveUrl(p), w, LIVE_MASK, false);
    const W = Math.min(ref.width, live.width);
    const H = Math.min(ref.height, live.height);
    const a = crop(ref, W, H);
    const b = crop(live, W, H);
    const diff = new PNG({ width: W, height: H });
    const n = pixelmatch(a.data, b.data, diff.data, W, H, { threshold: 0.1 });
    const pct = (n / (W * H)) * 100;
    const hDelta = ((live.height - ref.height) / ref.height) * 100;
    fs.writeFileSync(path.join(outDir, `${tag}--ref.png`), PNG.sync.write(ref));
    fs.writeFileSync(path.join(outDir, `${tag}--live.png`), PNG.sync.write(live));
    fs.writeFileSync(path.join(outDir, `${tag}--diff.png`), PNG.sync.write(diff));
    const ok = pct <= threshold && Math.abs(hDelta) <= 3;
    if (!ok) failed++;
    rows.push({
      page: p,
      width: w,
      diffPct: pct.toFixed(2),
      refH: ref.height,
      liveH: live.height,
      heightDeltaPct: hDelta.toFixed(1),
      pass: ok ? "PASS" : "FAIL",
    });
  }
}
await browser.close();
console.table(rows);
console.log(`\nDiff images in ${outDir}. ${failed ? failed + " failing" : "All passing"}.`);
console.log(
  "Note: height differences caused by real content being longer or shorter than the design copy (or omitted placeholders) are acceptable — explain them.",
);
process.exit(failed ? 1 : 0);
