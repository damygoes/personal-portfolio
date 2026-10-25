/**
 * Sends a signed fake Sanity publish webhook to a locally running site, so
 * revalidation can be tested without a tunnel (Sanity can't reach localhost).
 *
 *   pnpm --filter web revalidate:local                      # → http://localhost:3000
 *   pnpm --filter web revalidate:local -- --url http://localhost:3100
 *   pnpm --filter web revalidate:local -- --secret wrong    # expect 401
 *
 * Signs like @sanity/webhook: header `t=<ms>,v1=<base64url HMAC-SHA256 of "t.body">`.
 * Use it against `next start` — `next dev` doesn't cache, so there's nothing to revalidate.
 */
import { createHmac } from "node:crypto";
import process from "node:process";

const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : undefined;
};

const url = `${(arg("url") ?? "http://localhost:3000").replace(/\/$/, "")}/api/revalidate`;
const secret = arg("secret") ?? process.env.SANITY_REVALIDATE_SECRET;
if (!secret) {
  console.error("SANITY_REVALIDATE_SECRET is not set (apps/web/.env.local).");
  process.exit(1);
}

const body = JSON.stringify({ _type: "post", source: "revalidate-local" });
const timestamp = Date.now();
const signature = createHmac("sha256", secret)
  .update(`${timestamp}.${body}`)
  .digest("base64url");

const response = await fetch(url, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "sanity-webhook-signature": `t=${timestamp},v1=${signature}`,
  },
  body,
});
console.log(response.status, await response.text());
process.exit(response.ok ? 0 : 1);
