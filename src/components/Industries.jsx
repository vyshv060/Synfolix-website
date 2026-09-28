import { useCallback } from 'react';
import { HeartPulse, Briefcase, BookOpen, Coins, Rocket, Building2 } from 'lucide-react';

export default function Industries() {
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

  const industries = [
    {
      icon: HeartPulse,
      title: 'Healthcare & Clinical Systems',
      desc: 'IPD/OPD management, pharmacy dispensing, EHR & multi-specialty hospital platforms.'
    },
    {
      icon: Briefcase,
      title: 'Case Management & Legal Tech',
      desc: 'Legal document generation, hearing date tracking, advocate portals & client retainer management.'
    },
    {
      icon: BookOpen,
      title: 'EdTech & Campus Portals',
      desc: 'Academic management, online exam proctoring, faculty scheduling & parent fee portals.'
    },
    {
      icon: Coins,
      title: 'FinTech & Commerce Systems',
      desc: 'Payment gateway integrations, invoice automation, POS checkout & financial ledger reporting.'
    },
    {
      icon: Rocket,
      title: 'Startups & Scale-up MVPs',
      desc: 'Rapid product design, proof-of-concept prototypes & scalable architecture for high-growth tech ventures.'
    },
    {
      icon: Building2,
      title: 'Enterprise ERP & Operations',
      desc: 'Human resources, attendance, leave approvals, payroll generation, tasks & internal team chat.'
    }
  ];

  return (
    <section className="section section-industries" id="industries">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Target Sectors</div>
          <h2 className="section-title">
            Industry Solutions <span className="gradient-text">Engineered for Impact</span>
          </h2>
          <p className="section-desc">
            Deep domain expertise across high-demand business sectors with dedicated enterprise deployments.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                className="industry-card spotlight-card" 
                key={idx}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="ind-icon">
                  <Icon size={24} />
                </div>
                <h3>{ind.title}</h3>
                <p className="ind-desc">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
