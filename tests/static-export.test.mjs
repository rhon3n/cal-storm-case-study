import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = path.join(root, "out");
const basePath = "/cal-storm-case-study";

async function outputHtml() {
  return readFile(path.join(out, "index.html"), "utf8");
}

function localUrls(text) {
  return [...text.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(([, url]) => url)
    .filter((url) => url.startsWith("/") && !url.startsWith("//"));
}

test("exports the complete case study", async () => {
  const html = await outputHtml();
  for (const marker of [
    "California Storm WordPress experience rebuild",
    "A public site built around the information families need",
    "Clearer paths for teams, dates, and applications",
    "A clearer product experience, built to be maintained",
    "Launch and production status are not claimed",
  ]) {
    assert.match(html, new RegExp(marker.replaceAll(".", "\\.")));
  }
});

test("prefixes every local HTML asset for the project path", async () => {
  const html = await outputHtml();
  const urls = localUrls(html);
  assert.ok(urls.length > 20, "expected generated and public asset references");

  for (const url of urls) {
    assert.ok(url === basePath || url.startsWith(`${basePath}/`), `unprefixed local URL: ${url}`);
    const relativePath = decodeURIComponent(url.slice(basePath.length)).replace(/^\//, "");
    if (!relativePath) continue;
    await access(path.join(out, relativePath));
  }
});

test("ships all eleven comparison captures", async () => {
  const captures = (await readdir(path.join(out, "comparisons"))).filter((name) => name.endsWith(".jpg"));
  assert.equal(captures.length, 11);

  const html = await outputHtml();
  for (const capture of captures) {
    assert.match(html, new RegExp(`${basePath}/comparisons/${capture.replace(".", "\\.")}`));
  }
});

test("emits canonical static social metadata and no unsupported outcome claims", async () => {
  const html = await outputHtml();
  assert.match(html, /https:\/\/rhonen\.design\/cal-storm-case-study\/og\.png/);
  assert.doesNotMatch(html, /approved staging implementation|launch status confirmed|conversion rate|endorsed by California Storm/i);
});

test("does not export secrets or local hosting state", async () => {
  const forbidden = [".env", ".wrangler", "wrangler.json", "*.pem"];
  const files = await readdir(out, { recursive: true });
  for (const entry of files) {
    const value = String(entry);
    assert.ok(!value.startsWith(".env"), `exported forbidden file: ${value}`);
    assert.ok(!value.includes(".wrangler"), `exported forbidden file: ${value}`);
    assert.ok(!value.endsWith("wrangler.json"), `exported forbidden file: ${value}`);
    assert.ok(!value.endsWith(".pem"), `exported forbidden file: ${value}`);
  }
  assert.equal(forbidden.length, 4);
});
