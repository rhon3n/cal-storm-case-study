import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://portfolio.test/", {
      headers: { accept: "text/html", host: "portfolio.test" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete California Storm case study", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /California Storm — WordPress Experience Rebuild/);
  assert.match(html, /Rebuilding a legacy basketball site into a/);
  assert.match(html, /Existing data integration &amp; migration/);
  assert.match(html, /Brand and design process/);
  assert.match(html, /Stakeholder partnership/);
  assert.match(html, /Barlow Condensed ExtraBold/);
  assert.match(html, /Turn evolving input into a stronger product/);
  assert.match(html, /Plugin &amp; product architecture/);
  assert.match(html, /Product handoff documentation/);
  assert.match(html, /Before · legacy production/);
  assert.match(html, /After · redesigned system/);
});

test("emits deployment-aware social metadata and the machine handoff excerpt", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /property="og:image" content="http:\/\/localhost:3000\/og\.png"/);
  assert.match(html, /name="twitter:image" content="http:\/\/localhost:3000\/og\.png"/);
  assert.match(html, /calstorm-site\/get-agent-handoff/);
  assert.match(html, /TablePress 148/);
  assert.match(html, /Fluent Form 3/);
});
