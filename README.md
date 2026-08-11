# California Storm WordPress Experience Rebuild

An interactive product design and development case study documenting the California Storm website transformation. The artifact focuses on four contributions:

- preserving and restructuring existing WordPress data;
- designing a responsive, accessible front-end system;
- separating configuration, automation, utility templates, and the flagship landing page into independent plugins;
- creating a human and machine-readable operational handoff.

The before captures come from the legacy site artifact. The after captures come from the redesign artifact. Screenshots were captured on August 10, 2026. This repository does not claim that the redesign launched or reached production.

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

## Publication gate

The repository includes branded screenshots and related visual assets for local review. Do not make the repository public or deploy it until written approval covers the California Storm name, logo, screenshots, and photographs, and confirms how the redesigned captures may be described. No launch, traffic, registration, conversion, revenue, accessibility-conformance, user-test, or client-endorsement claim is made.
