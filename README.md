# California Storm WordPress Experience Rebuild

An interactive product design and development case study documenting the California Storm website transformation. The artifact focuses on four contributions:

- preserving and restructuring existing WordPress data;
- designing a responsive, accessible front-end system;
- separating configuration, automation, utility templates, and the flagship landing page into independent plugins;
- creating a human and machine-readable operational handoff.

The before captures document the legacy public experience. The after captures are production screenshots from the redesigned experience, captured on August 10, 2026.

## Local preview

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev -- --hostname 0.0.0.0
```

Open `http://localhost:3000/cal-storm-case-study/`.

## Verification

```bash
npm run build
npm run lint
npm test
```

`npm run build:pages` emits the static site to `out/` with the `/cal-storm-case-study` base path. The Pages workflow runs lint, tests, static export verification, and deployment.

## Publication status

Publication of this repository and its California Storm name, logo, screenshots, and photographs is approved. The case study does not make claims about launch timing, traffic, registrations, conversions, revenue, accessibility conformance, user-test results, or client endorsement without primary project records.
