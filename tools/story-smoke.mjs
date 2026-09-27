/**
 * Loads every Storybook story (or those whose id starts with a prefix) and reports
 * render errors, console errors and serious/critical axe violations.
 * Run: node tools/story-smoke.mjs [idPrefix] [globals]   e.g.  pages theme:dark
 * Needs Storybook running on :6006 (pnpm --filter @portfolio/ui storybook).
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
const base = "http://localhost:6006";
const index = await (await fetch(`${base}/index.json`)).json();
const only = process.argv[2]; const globals = process.argv[3] ? `&globals=${process.argv[3]}` : "";
const ids = Object.values(index.entries).filter((e) => e.type === "story" && (!only || e.id.startsWith(only))).map((e) => e.id);
const axeDir = fs.readdirSync("node_modules/.pnpm").find((d) => d.startsWith("axe-core@"));
const axeSrc = fs.readFileSync(path.join("node_modules/.pnpm", axeDir, "node_modules/axe-core/axe.min.js"), "utf8");
const b = await chromium.launch();
let bad = 0;
for (const id of ids) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 160)));
  await p.goto(`${base}/iframe.html?id=${id}&viewMode=story${globals}`, { waitUntil: "networkidle" });
  await p.waitForTimeout(300);
  const shown = await p.evaluate(() => document.body.classList.contains("sb-show-errordisplay"));
  await p.addScriptTag({ content: axeSrc });
  const v = await p.evaluate(async () => {
    const r = await window.axe.run(document.querySelector("#storybook-root") ?? document, { resultTypes: ["violations"] });
    return r.violations.filter((x) => ["serious", "critical"].includes(x.impact)).map((x) => `${x.id}(${x.nodes.length}): ${x.nodes[0]?.target}`);
  });
  if (shown || errors.length || v.length) {
    bad++;
    console.log(id, shown ? "ERRORDISPLAY" : "", errors.slice(0, 2).join(" || "), v.join(" | "));
  }
  await p.close();
}
console.log(`${ids.length} stories, ${bad} with problems`);
await b.close();
