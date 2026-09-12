export default function BuildWithUs() {
  const steps = [
    { num: '01', title: 'Discovery & Scope', desc: 'Define technical architecture, system design, and MVP scope.' },
    { num: '02', title: 'UI/UX Engineering', desc: 'Craft high-converting, modern glassmorphic interface designs.' },
    { num: '03', title: 'Agile Full-Stack Dev', desc: 'Develop backend APIs, database schemas, and frontend portals.' },
    { num: '04', title: 'QA & Security Audit', desc: 'Rigorous unit testing, penetration tests, and load stress audits.' },
    { num: '05', title: 'Cloud Deployment', desc: 'CI/CD deployment to AWS/GCP with 99.9% uptime SLA.' }
  ];

  return (
    <section className="section section-build" id="build-with-us">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Custom Software Journey</div>
          <h2 className="section-title">
            Have an idea? <span className="gradient-text">We'll build it with you.</span>
          </h2>
          <p className="section-desc">
            We partner with scale-ups and enterprises to engineer custom digital platforms from initial blueprint to global cloud deployment.
          </p>
        </div>

        <div className="journey-wrapper">
          <h3 className="journey-heading">5-Step Product Development Roadmap</h3>
          <div className="journey-stepper">
            {steps.map((s, idx) => (
              <div key={idx} style={{ display: 'contents' }}>
                <div className="step-card">
                  <div className="step-num">{s.num}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
                {idx < steps.length - 1 && <div className="step-arrow">&rarr;</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
