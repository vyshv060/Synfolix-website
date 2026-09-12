import { HeartPulse, Briefcase, BookOpen, Coins, Rocket, Building2 } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: HeartPulse,
      title: 'Healthcare & Clinical Systems',
      desc: 'IPD/OPD management, pharmacy dispensing, EHR & multi-specialty hospital platforms.',
      detail: 'HIPAA-grade data privacy, HL7/FHIR ready pipelines, and offline-capable clinical workstations.'
    },
    {
      icon: Briefcase,
      title: 'Case Management & Legal Tech',
      desc: 'Legal document generation, hearing date tracking, advocate portals & client retainer management.',
      detail: 'Encrypted document vault, automated case status SMS alerts, and lawyer billable hour logs.'
    },
    {
      icon: BookOpen,
      title: 'EdTech & Campus Portals',
      desc: 'Academic management, online exam proctoring, faculty scheduling & parent fee portals.',
      detail: 'Scalable to 100k+ concurrent online students with real-time video lecture bandwidth optimizations.'
    },
    {
      icon: Coins,
      title: 'FinTech & Commerce Systems',
      desc: 'Payment gateway integrations, invoice automation, POS checkout & financial ledger reporting.',
      detail: 'PCI-DSS compliant architecture, multi-currency ledger tracking, and automated tax reporting.'
    },
    {
      icon: Rocket,
      title: 'Startups & Scale-up MVPs',
      desc: 'Rapid product design, proof-of-concept prototypes & scalable architecture for high-growth tech ventures.',
      detail: 'Deploy market-ready MVPs in under 6 weeks with modular microservices for seamless investor pitching.'
    },
    {
      icon: Building2,
      title: 'Enterprise ERP & Operations',
      desc: 'Human resources, attendance, leave approvals, payroll generation, tasks & internal team chat.',
      detail: 'Role-based access controls, biometric terminal API hooks, and automated monthly salary slips.'
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
            Deep domain expertise across high-demand business sectors. Hover over any card to inspect technical deployment specs.
          </p>
        </div>

        <div className="industries-3d-grid">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div className="card-3d-wrap" key={idx}>
                <div className="card-3d-inner">
                  <div className="card-face card-front industry-front">
                    <div className="ind-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>
                    </div>
                  </div>
                  <div className="card-face card-back industry-back">
                    <div>
                      <h4>Technical Deployment Specs</h4>
                      <p>{ind.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
