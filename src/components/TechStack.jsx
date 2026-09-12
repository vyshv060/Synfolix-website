import { Globe, Server, Cloud, Sparkles } from 'lucide-react';

export default function TechStack() {
  return (
    <section className="section section-tech" id="technology">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Engineering Stack</div>
          <h2 className="section-title">
            Built on Modern, <span className="gradient-text">Scalable Technology</span>
          </h2>
          <p className="section-desc">
            We leverage battle-tested frameworks, cloud infrastructure, and AI tools focused on real business outcomes.
          </p>
        </div>

        <div className="tech-grid">
          {/* Card 1 */}
          <div className="tech-card">
            <div className="tech-header">
              <Globe className="tech-cat-icon" />
              <h3>Frontend & Mobile Apps</h3>
            </div>
            <div className="tech-pills">
              <span>React Native App (iOS & Android)</span>
              <span>React / Next.js</span>
              <span>Vite</span>
              <span>TypeScript</span>
              <span>HTML5 & Modern CSS3</span>
              <span>TailwindCSS</span>
              <span>Three.js / WebGL</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="tech-card">
            <div className="tech-header">
              <Server className="tech-cat-icon" />
              <h3>Backend & DB</h3>
            </div>
            <div className="tech-pills">
              <span>Node.js / Express</span>
              <span>Python / FastAPI</span>
              <span>Prisma ORM</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Redis Cache</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="tech-card">
            <div className="tech-header">
              <Cloud className="tech-cat-icon" />
              <h3>Cloud & DevOps</h3>
            </div>
            <div className="tech-pills">
              <span>AWS / GCP</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>CI/CD Pipelines</span>
              <span>Nginx</span>
              <span>SSL / Bank Security</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="tech-card">
            <div className="tech-header">
              <Sparkles className="tech-cat-icon" />
              <h3>AI & Real-Time</h3>
            </div>
            <div className="tech-pills">
              <span>Socket.IO WebSockets</span>
              <span>OpenAI API</span>
              <span>LangChain</span>
              <span>Document OCR</span>
              <span>Real-time Syncing</span>
              <span>REST & GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
