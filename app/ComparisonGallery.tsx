"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const comparisons = [
  {
    id: "home",
    label: "Homepage",
    before: assetPath("/comparisons/before-home-desktop.jpg"),
    after: assetPath("/comparisons/after-home-desktop.jpg"),
    beforeAlt: "Original California Storm homepage",
    afterAlt: "Redesigned California Storm video homepage",
    note: "From a dense promotional header and fixed content tiles to a cinematic, navigable brand story.",
  },
  {
    id: "tryouts",
    label: "Tryouts",
    before: assetPath("/comparisons/before-tryouts-desktop.jpg"),
    after: assetPath("/comparisons/after-tryouts-desktop.jpg"),
    beforeAlt: "Original California Storm tryout applications page",
    afterAlt: "Redesigned regional California Storm tryouts hub",
    note: "From undifferentiated application buttons to seven regional pathways, contextual dates, and progressive disclosure.",
  },
  {
    id: "schedule",
    label: "Schedule",
    before: assetPath("/comparisons/before-schedule-desktop.jpg"),
    after: assetPath("/comparisons/after-schedule-desktop.jpg"),
    beforeAlt: "Original California Storm tournament schedule",
    afterAlt: "Redesigned filterable California Storm tournament schedule",
    note: "The same editorial source became searchable, filterable, responsive, and easier to scan without duplicating its data.",
  },
  {
    id: "hall",
    label: "Hall of Fame",
    before: assetPath("/comparisons/before-hall-desktop.jpg"),
    after: assetPath("/comparisons/after-hall-desktop.jpg"),
    beforeAlt: "Original California Storm Hall of Fame",
    afterAlt: "Redesigned California Storm Hall of Fame",
    note: "Legacy imagery and destinations were preserved while the layout, hierarchy, contrast, and responsive behavior were rebuilt.",
  },
];

export function ComparisonGallery() {
  const [active, setActive] = useState(comparisons[0]);

  return (
    <section className="comparison-section" id="transformation">
      <div className="comparison-heading">
        <div>
          <p className="eyebrow">Before / after</p>
          <h2>The transformation is visible. The harder work lives underneath.</h2>
        </div>
        <div className="comparison-tabs" role="tablist" aria-label="Choose a page comparison">
          {comparisons.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active.id === item.id}
              onClick={() => setActive(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="comparison-grid" role="tabpanel" aria-live="polite">
        <figure>
          <div className="image-label muted">Before · legacy production</div>
          <img src={active.before} alt={active.beforeAlt} width="1440" height="900" loading="lazy" />
        </figure>
        <figure>
          <div className="image-label vivid">After · redesigned system</div>
          <img src={active.after} alt={active.afterAlt} width="1440" height="900" loading="lazy" />
        </figure>
      </div>
      <p className="comparison-note"><span>{active.label}</span>{active.note}</p>
    </section>
  );
}
