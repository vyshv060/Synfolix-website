import { Layers, Rocket } from 'lucide-react';
import HeroConstellation from './HeroConstellation';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-gradient-overlay"></div>
      <HeroConstellation />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span>Digital Product & Custom Software Studio</span>
          </div>

          <h1 className="hero-title">
            We build digital products that <span className="gradient-text">solve real business problems.</span>
          </h1>

          <p className="hero-subtitle">
            From proprietary software platforms to custom enterprise solutions engineered for startups and scale-ups, Synfolix designs, develops, and deploys high-impact technology systems.
          </p>

          <div className="hero-cta-group">
            <a href="#products" className="btn btn-primary btn-lg btn-glow">
              <Layers size={20} />
              <span>Explore Our Products</span>
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg btn-glass">
              <Rocket size={20} />
              <span>Build With Synfolix</span>
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <div className="stat-heading">Flagship & Custom</div>
              <div className="stat-label">SaaS Suites & On-Demand Dev</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-heading">Any Industry Sector</div>
              <div className="stat-label">Bespoke Solutions Built on Request</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-heading">Full Product Lifecycle</div>
              <div className="stat-label">From Product Idea to Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
