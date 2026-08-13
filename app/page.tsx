import type { Metadata } from "next";
import { ComparisonGallery } from "./ComparisonGallery";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const assetPath = (path: string) => `${basePath}${path}`;

export function generateMetadata(): Metadata {
  const socialImage = new URL(assetPath("/og.png"), siteUrl).toString();
  const title = "California Storm — WordPress Experience Rebuild";
  const description =
    "A product design and development case study covering data migration, front-end design, WordPress plugin architecture, and operational handoff.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

const migrationRows = [
  ["Tournament schedule", "Legacy WordPress table", "TablePress 148", "Searchable responsive table + mobile event panels"],
  ["Team calendar", "Embedded Google calendar", "Validated Google Calendar source", "Month desktop / agenda mobile"],
  ["Team rosters", "Editor-built page tables", "8 teams · 76 player records", "Structured filters without changing source names"],
  ["Tryouts", "Scattered application pages", "7 regions · 14 internal routes", "One regional hub with optional TeamSnap actions"],
  ["Legacy and alumni", "Mixed galleries and page tables", "Hall of Fame + 12 WNBA stories", "Responsive editorial systems with preserved source data"],
];

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "California Storm WordPress Experience Rebuild",
  dateCreated: "2026",
  genre: "Product design and web development case study",
  about: [
    "WordPress plugin architecture",
    "Content migration",
    "Responsive front-end design",
    "Brand system design",
    "Stakeholder facilitation",
    "Operational handoff documentation",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="California Storm case study home">
          <img src={assetPath("/storm-logo.png")} alt="California Storm" width="300" height="115" />
          <span>Case study</span>
        </a>
        <nav aria-label="Case study sections">
          <a href="#transformation">Before / After</a>
          <a className="nav-process" href="#process">Process</a>
          <a className="nav-collaboration" href="#collaboration">Collaboration</a>
          <a className="nav-architecture" href="#architecture">Architecture</a>
          <a href="#handoff">Handoff</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Product design · WordPress engineering · 2026</p>
          <h1>
            Rebuilding a legacy basketball site into a <em>living product system.</em>
          </h1>
          <p className="hero-lead">
            California Storm needed more than a visual refresh. I redesigned the public experience,
            preserved years of operational data, created a modular WordPress plugin system, and
            documented the product so its next owner—or agent—can safely evolve it.
          </p>
          <dl className="role-grid">
            <div><dt>Role</dt><dd>Product designer &amp; developer</dd></div>
            <div><dt>Platform</dt><dd>WordPress + custom plugins</dd></div>
            <div><dt>Scope</dt><dd>Strategy through production handoff</dd></div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="Updated California Storm homepage shown on desktop and mobile">
          <div className="browser-frame">
            <div className="browser-bar"><i /><i /><i /><span>calstormbasketball.com</span></div>
            <img src={assetPath("/comparisons/after-home-desktop.jpg")} alt="Updated California Storm homepage on desktop" width="1440" height="900" />
          </div>
          <div className="phone-frame before-phone">
            <span>Before</span>
            <img src={assetPath("/comparisons/before-home-mobile.jpg")} alt="Original California Storm homepage on mobile" width="390" height="844" />
          </div>
          <div className="phone-frame after-phone">
            <span>After</span>
            <img src={assetPath("/comparisons/after-home-mobile.jpg")} alt="Updated California Storm homepage on mobile" width="390" height="844" />
          </div>
        </div>
      </section>

      <section className="metric-band" aria-label="Project scale">
        <div><strong>104</strong><span>published pages inventoried</span></div>
        <div><strong>4</strong><span>purpose-built WordPress plugins</span></div>
        <div><strong>17</strong><span>stable branded templates</span></div>
        <div><strong>8 / 76</strong><span>teams and player records retained</span></div>
      </section>

      <section className="section intro-section">
        <div className="section-number">00</div>
        <div className="section-heading">
          <p className="eyebrow">The brief</p>
          <h2>Modernize the experience without breaking the program behind it.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The original site carried valuable schedules, rosters, applications, memberships,
            alumni history, and event information—but those systems were fragmented across page
            builders, shortcodes, plugins, and legacy navigation.
          </p>
          <p>
            The product decision was to keep WordPress as the editorial source of truth while
            introducing a controlled presentation layer. The result separates data, configuration,
            automation, and rendering so the club can update content without reopening the design.
          </p>
        </div>
      </section>

      <ComparisonGallery />

      <section className="section contribution light" id="migration">
        <div className="section-number">01</div>
        <div className="section-heading">
          <p className="eyebrow">Existing data integration &amp; migration</p>
          <h2>Preserve the source. Improve the way people reach it.</h2>
          <p>
            I mapped the canonical content, identified duplicate and obsolete destinations, and
            wrapped existing editorial systems in new interfaces instead of forcing a risky rewrite.
          </p>
        </div>
        <div className="strategy-grid">
          <article>
            <span className="strategy-index">A</span>
            <h3>Inventory before migration</h3>
            <p>104 published pages were classified as canonical, redirect, archive, retain, or review.</p>
          </article>
          <article>
            <span className="strategy-index">B</span>
            <h3>Structured sources of truth</h3>
            <p>TablePress, Google Calendar, Fluent Forms, Gravity Forms, WooCommerce, and WordPress records remained authoritative.</p>
          </article>
          <article>
            <span className="strategy-index">C</span>
            <h3>Safe editorial evolution</h3>
            <p>Canonical page IDs, revision history, content hashes, dry runs, and rollback artifacts replaced manual copy/paste.</p>
          </article>
        </div>

        <div className="migration-table-wrap">
          <table className="migration-table">
            <caption>Selected source-to-interface migrations</caption>
            <thead><tr><th>Surface</th><th>Before</th><th>Retained source</th><th>New experience</th></tr></thead>
            <tbody>
              {migrationRows.map((row) => (
                <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section contribution dark" id="design">
        <div className="section-number">02</div>
        <div className="section-heading">
          <p className="eyebrow">Front-end design</p>
          <h2>A competitive visual language that still behaves like a useful product.</h2>
          <p>
            The new system combines editorial photography, sharp court geometry, Barlow typography,
            Storm Black, Electric Blue, and Lightning yellow. Motion is purposeful, controls remain
            available, and mobile layouts are designed independently rather than merely compressed.
          </p>
        </div>

        <div className="design-showcase">
          <div className="design-notes">
            <div><b>Responsive by intent</b><span>390–1440px acceptance matrix with no page-level overflow.</span></div>
            <div><b>Accessible interaction</b><span>44px targets, visible focus, keyboard paths, and reduced-motion behavior.</span></div>
            <div><b>Content-led motion</b><span>Manual swipe, scroll snapping, pause controls, and restrained reveals.</span></div>
            <div><b>Photography with purpose</b><span>Face-safe crops, provenance records, local assets, and reusable focal controls.</span></div>
          </div>
          <div className="mobile-pair">
            <figure>
              <img src={assetPath("/comparisons/after-home-mobile.jpg")} alt="Responsive California Storm mobile homepage" width="390" height="844" loading="lazy" />
              <figcaption>Mobile storytelling</figcaption>
            </figure>
            <figure>
              <img src={assetPath("/comparisons/after-form-mobile.jpg")} alt="Responsive California Storm tryout information form" width="390" height="844" loading="lazy" />
              <figcaption>Conversion-focused form</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section contribution process light" id="process">
        <div className="section-number">03</div>
        <div className="section-heading">
          <p className="eyebrow">Brand and design process</p>
          <h2>Translate competitive basketball culture into a digital system families can trust.</h2>
          <p>
            The visual direction began with the audience and the environment—not decoration. Players
            needed energy and aspiration; parents needed clarity and credibility; administrators needed
            a system that would survive frequent updates without losing its identity.
          </p>
        </div>

        <div className="process-content">
          <div className="process-steps" aria-label="Design process">
            <article><span>01</span><b>Audit</b><p>Mapped 104 pages, existing brand assets, operational plugins, mobile failures, and the highest-value user journeys.</p></article>
            <article><span>02</span><b>Translate</b><p>Turned the club’s competitive identity into typography, color, geometry, photography, motion, and interaction rules.</p></article>
            <article><span>03</span><b>Prototype</b><p>Tested real content and real source data in responsive staging builds instead of designing idealized empty screens.</p></article>
            <article><span>04</span><b>Validate</b><p>Reviewed iOS behavior, accessibility, crop safety, conversion clarity, and viewport performance from 390px to 1440px.</p></article>
            <article><span>05</span><b>Codify</b><p>Converted approved decisions into reusable templates, constrained WordPress controls, tests, and handoff protocols.</p></article>
          </div>

          <div className="brand-lab">
            <div className="type-study">
              <p className="micro-label">Typography</p>
              <div className="display-specimen">Built to compete.</div>
              <p>
                <strong>Barlow Condensed ExtraBold</strong> gives headlines the compressed urgency of
                scoreboard graphics and athletic editorial design. <strong>Barlow</strong> keeps schedules,
                forms, instructions, and longer stories calm and readable for families.
              </p>
            </div>

            <div className="color-study">
              <p className="micro-label">Color as information</p>
              <div className="swatch-grid">
                <div><i className="swatch storm-black" /><b>Storm Black</b><span>Focus, authority, photographic depth</span></div>
                <div><i className="swatch electric-blue" /><b>Electric Blue</b><span>Navigation, action, active states</span></div>
                <div><i className="swatch lightning" /><b>Lightning</b><span>Selective emphasis and momentum</span></div>
                <div><i className="swatch court-white" /><b>Court White</b><span>Contrast, clarity, editorial space</span></div>
              </div>
              <p>
                Blue connects the experience to the established Storm identity. Lightning yellow is
                deliberately scarce, so it works as a visual cue rather than becoming visual noise.
              </p>
            </div>
          </div>

          <div className="principles-grid">
            <article><span>01</span><h3>Momentum without noise</h3><p>Sharp geometry, asymmetry, and motion communicate competition; spacing and hierarchy protect comprehension.</p></article>
            <article><span>02</span><h3>Photography stays human</h3><p>Faces, hands, uniforms, and basketballs define crop-safe zones. Branding supports the athletes rather than covering them.</p></article>
            <article><span>03</span><h3>Mobile is a primary venue</h3><p>Swipe rails, compact quick links, readable schedules, and touch-sized controls are designed for courtside use.</p></article>
            <article><span>04</span><h3>Editorial safety is design</h3><p>Curated presets and focal controls let nontechnical owners publish confidently without exposing fragile layout decisions.</p></article>
          </div>
        </div>
      </section>

      <section className="section contribution collaboration dark" id="collaboration">
        <div className="section-number">04</div>
        <div className="section-heading">
          <p className="eyebrow">Stakeholder partnership</p>
          <h2>Turn evolving input into a stronger product—not a pile of exceptions.</h2>
          <p>
            The work developed through frequent stakeholder reviews. My role was to listen closely,
            uncover the intent behind each request, explain the tradeoffs in plain language, and offer
            a recommendation that protected accessibility, usability, performance, and the brand system.
          </p>
        </div>

        <div className="collaboration-content">
          <div className="feedback-loop" aria-label="Stakeholder feedback process">
            <article><span>Listen</span><p>Capture the goal, the observed problem, and the audience affected.</p></article>
            <i aria-hidden="true">→</i>
            <article><span>Frame</span><p>Separate the requested treatment from the underlying design need.</p></article>
            <i aria-hidden="true">→</i>
            <article><span>Prototype</span><p>Show the recommendation with real copy, imagery, data, and responsive states.</p></article>
            <i aria-hidden="true">→</i>
            <article><span>Codify</span><p>Record the approved decision so future edits stay coherent.</p></article>
          </div>

          <div className="decision-ledger">
            <div className="ledger-head"><span>Stakeholder signal</span><span>Professional guidance</span><span>Result</span></div>
            <article>
              <p>“The motion looks perfect with Reduce Motion off.”</p>
              <p>Preserve the energetic default while respecting the operating-system accessibility preference.</p>
              <p>Purposeful motion, manual controls, and a complete reduced-motion state.</p>
            </article>
            <article>
              <p>Logos and copy were obscuring players in quick-link photography.</p>
              <p>Protect face and ball safe zones; separate labels and crisp brand marks from the image layer.</p>
              <p>Cleaner photography, independent card footers, and administrator-controlled focal positions.</p>
            </article>
            <article>
              <p>The first inquiry form asked too much of a simple lead.</p>
              <p>Reduce friction and clearly distinguish requesting information from completing registration.</p>
              <p>A shorter Fluent Form 3 journey with accurate expectations and better mobile fields.</p>
            </article>
            <article>
              <p>The first stylized regional map did not feel usable.</p>
              <p>Recommend a proven mapping library, then layer brand details only where they improve comprehension.</p>
              <p>A Leaflet map with readable basemap contrast, branded markers, Hawaii treatment, and approximate-location guidance.</p>
            </article>
            <article>
              <p>New alumni, photography, schedules, and regional links arrived throughout the build.</p>
              <p>Move recurring content into governed WordPress fields instead of accumulating one-off code changes.</p>
              <p>Media selectors, provenance, focal controls, structured records, previews, and rollback-safe releases.</p>
            </article>
          </div>

          <aside className="collaboration-principle">
            <span>Facilitation principle</span>
            <p>Be flexible about the expression, rigorous about the principle, and explicit about why the recommendation serves the audience.</p>
          </aside>
        </div>
      </section>

      <section className="section contribution architecture light" id="architecture">
        <div className="section-number">05</div>
        <div className="section-heading">
          <p className="eyebrow">Plugin &amp; product architecture</p>
          <h2>Independent layers made the redesign safer to launch—and easier to own.</h2>
          <p>
            Rather than hide the product inside one theme, I created four isolated plugins with stable
            responsibilities. Renderers can roll back without deleting the configuration or content they read.
          </p>
        </div>

        <div className="architecture-flow" aria-label="California Storm WordPress architecture">
          <article className="arch-card accent-blue">
            <span>Editorial control</span><h3>Site Config</h3>
            <p>Admin screens, page assignments, media, navigation, redirects, social links, and structured records.</p>
          </article>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <article className="arch-card accent-yellow">
            <span>Automation</span><h3>MCP Tools</h3>
            <p>Read schemas, dry-run updates, stale-write protection, revisions, and bounded audit logs.</p>
          </article>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <article className="arch-card accent-blue">
            <span>Rendering</span><h3>Site Pages</h3>
            <p>Calendar, schedules, rosters, tryouts, editorial pages, commerce surfaces, and shared chrome.</p>
          </article>
          <div className="flow-arrow" aria-hidden="true">+</div>
          <article className="arch-card accent-yellow">
            <span>Brand flagship</span><h3>Landing</h3>
            <p>Video, galleries, alumni, motion, maps, quick links, and the tryout lead journey.</p>
          </article>
        </div>

        <div className="principle-callout">
          <p>Architecture principle</p>
          <blockquote>WordPress remains the editorial source of truth. The new plugins turn that content into a controlled, cohesive experience.</blockquote>
        </div>
      </section>

      <section className="section contribution handoff dark" id="handoff">
        <div className="section-number">06</div>
        <div className="section-heading">
          <p className="eyebrow">Product handoff documentation</p>
          <h2>A handoff designed for both people and agents.</h2>
          <p>
            The owner receives a WordPress guide covering daily editing, data ownership, publishing,
            rollbacks, and launch procedures. The same decisions are exposed as a machine-readable
            operating contract so future agents begin with the right context and safety rules.
          </p>
        </div>

        <div className="handoff-grid">
          <div className="handoff-list">
            <article><span>01</span><h3>Human admin guide</h3><p>Plain-language editing paths for media, schedules, rosters, tryouts, alumni, and site settings.</p></article>
            <article><span>02</span><h3>Machine contract</h3><p>Current versions, canonical sources, template ownership, environment rules, and verification matrices.</p></article>
            <article><span>03</span><h3>Safe change protocol</h3><p>Read current state, preview the diff, enforce a current hash, test on staging, then promote the exact package.</p></article>
            <article><span>04</span><h3>Rollback as a feature</h3><p>Versioned ZIPs, SHA-256 files, stable template slugs, WordPress revisions, and TablePress backups.</p></article>
          </div>
          <div className="code-card" aria-label="Excerpt from the machine-readable handoff contract">
            <div className="code-top"><i /><i /><i /><span>agent-contract.json</span></div>
            <pre>{`{
  "first_action":
    "Call calstorm-site/get-agent-handoff",
  "sources": {
    "schedule": "TablePress 148",
    "lead_form": "Fluent Form 3",
    "calendar": "Google Calendar",
    "rosters": "calstorm_team records"
  },
  "change_protocol": [
    "read current state",
    "dry_run",
    "verify expected hash",
    "test on staging",
    "promote checksum-matched package"
  ],
  "production_writes": false
}`}</pre>
          </div>
        </div>
      </section>

      <section className="outcome">
        <p className="eyebrow">The outcome</p>
        <h2>The redesign is not a static deliverable. It is a system the organization can operate.</h2>
        <div className="outcome-grid">
          <p><strong>For players and families</strong>A clearer path from brand story to teams, dates, applications, and contact.</p>
          <p><strong>For administrators</strong>Media and content controls inside WordPress—without exposing arbitrary layout or CSS.</p>
          <p><strong>For future developers</strong>Explicit boundaries, environment-safe links, stable templates, tests, and rollback packages.</p>
        </div>
      </section>

      <footer>
        <img src={assetPath("/storm-logo.png")} alt="California Storm" width="300" height="115" />
        <p>Portfolio case study · Product design, front-end development, WordPress architecture, and operational handoff.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
