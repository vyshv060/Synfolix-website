import { Shield, Zap, Layers, Lock } from 'lucide-react';

export default function WhySynfolix() {
  const points = [
    {
      icon: Shield,
      title: 'Product-Minded Engineers',
      desc: 'We don’t just write code; we solve real product bottlenecks with scalable system design.'
    },
    {
      icon: Zap,
      title: 'Rapid Market Execution',
      desc: 'Agile sprints designed to launch enterprise-grade features and MVPs faster.'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      desc: 'Designed for future expansion so new products and volume can be added seamlessly.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security',
      desc: 'Strict role-based access control, CSRF tokens, encrypted databases & SSL protection.'
    }
  ];

  return (
    <section className="section section-why" id="work">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Why Synfolix</div>
          <h2 className="section-title">
            Engineering Excellence. <span className="gradient-text">Zero Compromise.</span>
          </h2>
          <p className="section-desc">
            Why leading businesses, healthcare providers, and startups choose Synfolix as their long-term technology development partner.
          </p>
        </div>

        <div className="why-grid">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div className="why-card" key={idx}>
                <div className="why-icon">
                  <Icon size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
