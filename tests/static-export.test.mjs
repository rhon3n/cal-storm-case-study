import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const basePath = "/cal-storm-case-study";

test("exports a complete GitHub Pages artifact at the portfolio subpath", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /California Storm — WordPress Experience Rebuild/);
  assert.match(html, new RegExp(`src=["']${basePath}/storm-logo\\.png`));
  assert.match(html, new RegExp(`href=["']${basePath}/_next/`));
  assert.match(
    html,
    /property="og:image" content="https:\/\/rhonen\.design\/cal-storm-case-study\/og\.png"/,
  );
  assert.doesNotMatch(html, /(?:src|href)=["']\/(?!cal-storm-case-study(?:\/|["']))/);
});
