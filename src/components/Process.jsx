import { useCallback } from 'react';

export default function Process() {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.removeProperty('--mouse-x');
    e.currentTarget.style.removeProperty('--mouse-y');
  }, []);

  const steps = [
    { num: '01', title: 'Consultation', desc: 'In-depth requirement analysis & solution mapping.' },
    { num: '02', title: 'Architecture', desc: 'DB schema, security & API blueprinting.' },
    { num: '03', title: 'UI Design', desc: 'Modern glassmorphic prototype creation.' },
    { num: '04', title: 'Development', desc: 'Full-stack engineering & unit testing.' },
    { num: '05', title: 'QA & Audit', desc: 'Penetration testing & stress audits.' },
    { num: '06', title: 'Scale', desc: 'Continuous maintenance & scaling.' }
  ];

  return (
    <section className="section section-process" id="process">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Methodology</div>
          <h2 className="section-title">
            Our Proven <span className="gradient-text">Engineering Process</span>
          </h2>
          <p className="section-desc">
            A structured 6-phase engineering lifecycle ensuring high performance, bank-grade security, and predictable delivery timelines.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((s, idx) => (
            <div 
              className="process-step spotlight-card" 
              key={idx}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="proc-num">{s.num}</div>
              <div className="proc-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
