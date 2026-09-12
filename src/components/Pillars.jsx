import { Box, Code2, CheckCircle2 } from 'lucide-react';

export default function Pillars() {
  return (
    <section className="section section-about" id="about-synfolix">
      <span id="about" style={{ display: 'block', position: 'relative', top: '-105px', visibility: 'hidden' }}></span>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Core Value Proposition</div>
          <h2 className="section-title">
            Two Major Pillars. <span className="gradient-text">One Technology Vision.</span>
          </h2>
          <p className="section-desc">
            From proprietary software products to custom enterprise platforms, Synfolix designs, develops, and scales digital solutions across industries.
          </p>
        </div>

        <div className="dual-pillar-grid">
          {/* Pillar 1 */}
          <div className="pillar-card">
            <div className="pillar-icon">
              <Box size={28} />
            </div>
            <div className="pillar-badge">Pillar 01</div>
            <h3 className="pillar-title">Our Own Products</h3>
            <p className="pillar-text">
              Proprietary SaaS platforms and industry-specific software products designed, developed, owned, and continuously upgraded by Synfolix.
            </p>
            <ul className="pillar-list">
              <li><CheckCircle2 size={18} /> Ready-to-deploy enterprise SaaS suites</li>
              <li><CheckCircle2 size={18} /> Healthcare HMS, Pharmacy PMS, CRM & Legal</li>
              <li><CheckCircle2 size={18} /> Continuous feature updates & security</li>
            </ul>
            <a href="#products" className="pillar-link">View Product Portfolio &rarr;</a>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card">
            <div className="pillar-icon">
              <Code2 size={28} />
            </div>
            <div className="pillar-badge">Pillar 02</div>
            <h3 className="pillar-title">Custom Software Engineering</h3>
            <p className="pillar-text">
              Bespoke digital product development for third-party clients, ambitious startups, corporations, and forward-thinking entrepreneurs.
            </p>
            <ul className="pillar-list">
              <li><CheckCircle2 size={18} /> Full product lifecycle from idea to scale</li>
              <li><CheckCircle2 size={18} /> Custom web, mobile, AI & cloud platforms</li>
              <li><CheckCircle2 size={18} /> Dedicated product engineering teams</li>
            </ul>
            <a href="#contact" className="pillar-link">Build Your Custom App &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
