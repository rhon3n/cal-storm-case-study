# California Storm WordPress Experience Rebuild

An interactive product design and development case study documenting the California Storm website transformation. The artifact focuses on four contributions:

- preserving and restructuring existing WordPress data;
- designing a responsive, accessible front-end system;
- separating configuration, automation, utility templates, and the flagship landing page into independent plugins;
- creating a human and machine-readable operational handoff.

The before captures come from the legacy public site. The after captures come from the approved staging implementation. Screenshots were captured on August 10, 2026.

## Local preview

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev -- --hostname 0.0.0.0
```

Open `http://localhost:3000/` on the Mac. When Tailscale is active on both devices, open `http://<mac-tailscale-ip>:3000/` on iOS.

## Verification

```bash
npm run build
npm run lint
npm test
npm run test:pages
```

The generated social-preview asset is `public/og.png`. Deployment-aware metadata and asset paths keep local previews rooted at `/` while the GitHub Pages build targets `/cal-storm-case-study/`.
