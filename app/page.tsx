import type { Metadata } from "next";
import { assetPath } from "./asset-path";
import { ComparisonGallery } from "./ComparisonGallery";

export function generateMetadata(): Metadata {
  const socialImage = "https://rhonen.design/cal-storm-case-study/og.png";
  const title = "California Storm WordPress experience rebuild";
  const description =
    "A clearer public experience for schedules, teams, tryouts, applications, and program history, built without abandoning the WordPress tools staff already use.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "California Storm WordPress experience rebuild",
  genre: "Product design and WordPress engineering case study",
  about: ["Information architecture", "Responsive patterns", "Publishing operations"],
};

function Icon({ name }: { name: string }) {
  return <img className="icon" src={assetPath(`media/icons/${name}.svg`)} alt="" aria-hidden="true" />;
}

function SectionLabel({ icon, children }: { icon?: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      {icon && <Icon name={icon} />}
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      <header className="site-header">
        <a className="brand" href="https://rhonen.design/">Rhonen</a>
        <nav aria-label="Primary navigation">
          <a href="https://rhonen.design/work/">Work</a>
          <a href="https://rhonen.design/about/">About</a>
          <a href="https://rhonen.design/contact/">Contact</a>
        </nav>
      </header>

      <section className="hero grid-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Product design and WordPress engineering</p>
          <h1 id="hero-title">California Storm WordPress experience rebuild</h1>
          <p className="lede">
            A clearer public experience for schedules, teams, tryouts, applications, and program history,
            built without abandoning the WordPress tools staff already use.
          </p>
          <dl className="metadata">
            <div><dt>Role</dt><dd>Product design and WordPress engineering</dd></div>
            <div><dt>Platform</dt><dd>WordPress</dd></div>
            <div><dt>Focus</dt><dd>Information architecture, responsive patterns, publishing operations</dd></div>
          </dl>
        </div>
        <figure className="hero-figure editorial-figure">
          <img
            src={assetPath("media/hero/portfolio-operator-system.svg")}
            alt="Product, engineering, and field operations connected around one accountable operator."
            width="1440"
            height="900"
          />
          <figcaption><strong>Editorial illustration</strong>The work connected product decisions, engineering, and day-to-day publishing around one operating system.</figcaption>
        </figure>
      </section>

      <section className="content-section grid-shell" aria-labelledby="context-title">
        <div className="section-heading">
          <SectionLabel icon="field-note">Context</SectionLabel>
          <h2 id="context-title">A public site built around the information families need</h2>
        </div>
        <div className="section-copy">
          <p>California Storm had years of useful program information online, but families had to navigate page builders, shortcodes, plugins, and legacy menus to find it. The rebuild centered the experience on the routes they use most: schedules, teams, tryouts, applications, and program history.</p>
          <p>WordPress remained the editorial source of truth. The new site gives the club a clearer public experience without forcing staff to abandon familiar publishing tools.</p>
          <div className="facts" aria-label="Verified project facts">
            <p>104 published pages inventoried</p>
            <p>17 branded templates</p>
            <p>Eight teams</p>
            <p>76 retained player records</p>
          </div>
        </div>
      </section>

      <section className="content-section grid-shell" aria-labelledby="problem-title">
        <div className="section-heading">
          <SectionLabel>The problem</SectionLabel>
          <h2 id="problem-title">Simplify the path without breaking the systems behind it</h2>
        </div>
        <div className="section-copy">
          <p>A visual refresh would not fix the harder issue. California Storm needed a site that was easier to navigate while preserving the data sources and publishing habits the organization already relied on.</p>
          <p>Information lived across TablePress tables, Google Calendar, forms, commerce records, and standard WordPress content. The rebuild had to reduce duplicate destinations and fragile manual updates without disrupting those systems. It also had to work well for parents and players checking a phone at practice, at a tournament, or on the way to tryouts.</p>
        </div>
        <figure className="wide-figure editorial-figure">
          <img src={assetPath("media/projects/california-storm-system.svg")} alt="Editorial system map for California Storm, representing preserved editorial systems and a clearer public experience." width="1440" height="900" loading="lazy" />
          <figcaption><strong>Editorial system map</strong>Preserved editorial systems sit behind a clearer public experience. This illustration is not a product screenshot.</figcaption>
        </figure>
      </section>

      <section className="content-section grid-shell" aria-labelledby="role-title">
        <div className="section-heading">
          <SectionLabel icon="layers">Role</SectionLabel>
          <h2 id="role-title">Product design and WordPress engineering</h2>
        </div>
        <div className="section-copy">
          <p>I led product design and WordPress engineering across the rebuild.</p>
          <ul className="responsibilities">
            <li>Audited the existing content and defined the new information architecture.</li>
            <li>Designed responsive page and component patterns.</li>
            <li>Rebuilt the front end and migrated content into the new structure.</li>
            <li>Defined WordPress plugin boundaries for configuration, automation, rendering, and the main landing experience.</li>
            <li>Documented editing, publishing, rollback, and launch procedures for the team.</li>
          </ul>
        </div>
      </section>

      <section className="content-section grid-shell" aria-labelledby="approach-title">
        <div className="section-heading">
          <SectionLabel>Approach</SectionLabel>
          <h2 id="approach-title">Start with content and data ownership</h2>
        </div>
        <div className="section-copy">
          <p>I began with an inventory of 104 published pages. Each page was classified as canonical, redirect, archive, retain, or review. That made it possible to simplify the experience without losing useful content or breaking the systems behind it.</p>
          <p>The visual system kept the club&apos;s blue identity and added Barlow typography, sharp court geometry, stronger photography, and focused accent color. Mobile was treated as its own experience, with compact navigation, readable schedules, touch-sized controls, and reduced-motion support.</p>
        </div>
        <figure className="wide-figure editorial-figure">
          <h3>From content inventory to operational handoff</h3>
          <img src={assetPath("media/diagrams/operator-loop.svg")} alt="Operator loop: observe field evidence, frame product intent, build a working system, then operate it to produce the next observation." width="1440" height="900" loading="lazy" />
          <figcaption><strong>Process diagram</strong>The rebuild began with content and data ownership, then moved into page patterns and implementation.</figcaption>
        </figure>
      </section>

      <section className="content-section grid-shell" aria-labelledby="decisions-title">
        <div className="section-heading">
          <SectionLabel>Key decisions</SectionLabel>
          <h2 id="decisions-title">Keep the useful systems. Rebuild the experience around them.</h2>
        </div>
        <div className="decision-grid">
          <article><h3><Icon name="system" />Keep source systems in place</h3><p>TablePress, Google Calendar, forms, commerce records, and WordPress content already supported the club&apos;s day-to-day work. I kept those systems authoritative and rebuilt the interfaces around them for clearer search, filtering, and responsive use.</p></article>
          <article><h3><Icon name="code" />Give each WordPress concern a clear boundary</h3><p>The implementation separates editorial configuration, automation, page rendering, and the flagship landing experience into four purpose-built plugins. That structure lets staff update content without reopening the design and avoids placing every concern in one theme.</p><strong className="callout">Four purpose-built WordPress plugins</strong></article>
          <article><h3>Design for quick decisions on a phone</h3><p>Schedules, applications, and team information often matter most away from a desk. The new layouts prioritize readable event information, shorter navigation paths, and controls that work at smaller sizes.</p></article>
        </div>
      </section>

      <section className="content-section gallery-section grid-shell" aria-labelledby="changed-title">
        <div className="section-heading">
          <SectionLabel>What changed</SectionLabel>
          <h2 id="changed-title">Clearer paths for teams, dates, and applications</h2>
        </div>
        <div className="section-copy">
          <p>The new experience gives families clearer paths to teams, dates, applications, and contact information. A regional tryouts hub replaces scattered application pages with seven regional paths and contextual dates. Tournament schedules still use their existing TablePress source, but are now searchable, filterable, and easier to scan on small screens. Legacy and alumni content keeps its original records while gaining a more consistent editorial presentation.</p>
          <p>The publishing experience changed, too. Structured fields, media controls, focal-position settings, previews, revision history, dry runs, and rollback artifacts reduce the need for one-off code changes when content arrives.</p>
        </div>
        <ComparisonGallery />
      </section>

      <section className="content-section grid-shell" aria-labelledby="outcome-title">
        <div className="section-heading">
          <SectionLabel icon="field-note">Outcome and operational handoff</SectionLabel>
          <h2 id="outcome-title">A documented system for safe changes</h2>
        </div>
        <div className="section-copy">
          <p>The project produced a clearer public information architecture and a more governed WordPress publishing system. The handoff includes guidance for day-to-day editing, data ownership, publishing, rollbacks, and launch procedures. It also identifies the source of truth, relevant template, verification path, and rollback option for future changes.</p>
          <p>This case study does not make claims about launch status, traffic, registrations, conversions, revenue, accessibility conformance, user-test results, or client endorsement. Those claims require primary project records and California Storm&apos;s approval.</p>
          <aside className="media-hold"><strong>Operational handoff image and publication approval pending.</strong><span>The final documentation gives staff and future developers a practical path for safe changes.</span></aside>
        </div>
      </section>

      <section className="closing grid-shell" aria-labelledby="closing-title">
        <div>
          <SectionLabel>Closing</SectionLabel>
          <h2 id="closing-title">A clearer product experience, built to be maintained</h2>
          <p>The project turned an accumulated WordPress site into a clearer product experience without discarding the systems California Storm used to operate it. The public experience is easier to navigate, while the editorial team has a documented system it can maintain and evolve.</p>
        </div>
      </section>

      <section className="calls-to-action grid-shell" aria-label="Calls to action">
        <button type="button" disabled aria-disabled="true">View the redesigned experience <Icon name="external-link" /></button>
        <a href="https://rhonen.design/work/">Explore more work <Icon name="arrow-up-right" /></a>
      </section>

      <section className="explore grid-shell" aria-labelledby="explore-title">
        <h2 id="explore-title">Continue exploring</h2>
        <article>
          <p className="section-label">Editorial illustration</p>
          <img src={assetPath("media/projects/measure-coffee-system.svg")} alt="Editorial system map for measure.coffee, representing coffee knowledge organized around the next decision." width="1440" height="900" loading="lazy" />
          <h3>measure.coffee</h3>
          <p>Generated editorial system map. Not a product screenshot.</p>
          <a href="https://rhonen.design/work/measure-coffee/">Explore measure.coffee</a>
        </article>
        <article>
          <p className="section-label">Editorial illustration</p>
          <img src={assetPath("media/projects/shader-studio-system.svg")} alt="Editorial system map for Shader Studio, representing local-first browser media processing." width="1440" height="900" loading="lazy" />
          <h3>Shader Studio</h3>
          <p>Generated editorial system map. Not a product screenshot.</p>
          <a href="https://rhonen.design/work/shader-studio/">Explore Shader Studio</a>
        </article>
      </section>

      <footer className="site-footer">
        <a href="https://rhonen.design/">Rhonen</a>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}