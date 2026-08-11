import { assetPath } from "./asset-path";

const comparisons = [
  { id: "home", label: "Homepage", before: "before-home-desktop.jpg", after: "after-home-desktop.jpg", beforeAlt: "Original California Storm homepage on desktop", afterAlt: "Redesigned California Storm homepage on desktop" },
  { id: "tryouts", label: "Tryouts", before: "before-tryouts-desktop.jpg", after: "after-tryouts-desktop.jpg", beforeAlt: "Original California Storm tryouts page", afterAlt: "Redesigned regional California Storm tryouts hub" },
  { id: "schedule", label: "Schedule", before: "before-schedule-desktop.jpg", after: "after-schedule-desktop.jpg", beforeAlt: "Original California Storm tournament schedule", afterAlt: "Redesigned filterable California Storm tournament schedule" },
  { id: "hall", label: "Hall of Fame", before: "before-hall-desktop.jpg", after: "after-hall-desktop.jpg", beforeAlt: "Original California Storm Hall of Fame", afterAlt: "Redesigned California Storm Hall of Fame" },
];

export function ComparisonGallery() {
  return (
    <div className="comparison-gallery" aria-label="California Storm interface captures">
      {comparisons.map((item) => (
        <article className="comparison-set" key={item.id}>
          <h3>{item.label}</h3>
          <div className="comparison-pair">
            <figure><span>Before · legacy site</span><img src={assetPath(`comparisons/${item.before}`)} alt={item.beforeAlt} width="1440" height="900" loading="lazy" /></figure>
            <figure><span>After · production screenshot</span><img src={assetPath(`comparisons/${item.after}`)} alt={item.afterAlt} width="1440" height="900" loading="lazy" /></figure>
          </div>
        </article>
      ))}
      <article className="comparison-set mobile-evidence">
        <h3>Mobile interface evidence</h3>
        <div className="mobile-captures">
          <figure><img src={assetPath("comparisons/before-home-mobile.jpg")} alt="Original California Storm homepage on mobile" width="390" height="844" loading="lazy" /><figcaption>Legacy homepage</figcaption></figure>
          <figure><img src={assetPath("comparisons/after-home-mobile.jpg")} alt="Production California Storm homepage on mobile" width="390" height="844" loading="lazy" /><figcaption>Production homepage</figcaption></figure>
          <figure><img src={assetPath("comparisons/after-form-mobile.jpg")} alt="Production California Storm inquiry form on mobile" width="390" height="844" loading="lazy" /><figcaption>Production mobile inquiry form</figcaption></figure>
        </div>
      </article>
      <p className="gallery-caption">Existing records and editorial sources remain intact while the presentation and responsive behavior are rebuilt.</p>
      <p className="source-note">Production screenshots captured from the redesigned experience on August 10, 2026. Launch timing and performance outcomes are not claimed.</p>
    </div>
  );
}