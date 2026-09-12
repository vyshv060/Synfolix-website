import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function ProductsSection({ openDemoModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 'hms',
      category: 'Healthcare',
      title: 'Healthcare HMS Platform',
      desc: 'Complete Hospital Management System connecting admissions, IPD/OPD, pharmacy, billing, doctor schedules & lab records.',
      badge: 'Healthcare Suite',
      tags: ['IPD / OPD', 'Lab & Pharmacy', 'Billing'],
      meta: 'Hospitals, Clinics, Multi-specialty Healthcare Chains',
      features: [
        { label: 'Patient & EHR Records', desc: 'Centralized medical histories & prescription records' },
        { label: 'IPD / OPD Billing', desc: 'Itemized invoices & payment tracking' },
        { label: 'Pharmacy & Lab Sync', desc: 'Real-time stock dispensing & test reporting' }
      ]
    },
    {
      id: 'crm',
      category: 'CRM',
      title: 'Enterprise EMS / CRM',
      desc: 'Unified Employee Management & CRM system with attendance tracking, leave workflows, payslips, task manager & team chat.',
      badge: 'Enterprise CRM',
      tags: ['Attendance', 'Leaves & Payslips', 'Team Chat'],
      meta: 'SMBs, Enterprises, Tech Consultancies',
      features: [
        { label: 'Attendance & WFH', desc: 'Geolocation & biometric shift tracking' },
        { label: 'Payroll & Payslips', desc: 'Automated monthly salary calculation & PDF generator' },
        { label: 'Tasks & Real-time Chat', desc: 'Kanban boards & encrypted internal chat' }
      ]
    },
    {
      id: 'pms',
      category: 'Healthcare',
      title: 'Pharmacy PMS System',
      desc: 'Batch-level inventory tracking, medicine dispensing, customer returns & prescription management.',
      badge: 'Pharmacy Tech',
      tags: ['Batch Tracking', 'Expiry Alerts', 'Stock Control'],
      meta: 'Retail Pharmacies, Hospital Chemists, Pharma Chains',
      features: [
        { label: 'Batch & Expiry Control', desc: 'Prevent expired medicine sales with automated warnings' },
        { label: 'Reorder Alerts', desc: 'Low stock notifications & supplier purchase orders' }
      ]
    },
    {
      id: 'legal',
      category: 'Legal',
      title: 'Legal Tech Suite',
      desc: 'Case management, court date tracking, legal document automation, client invoicing, and advocate collaboration portal.',
      badge: 'Legal Technology',
      tags: ['Case Records', 'Court Schedules', 'Document Templates'],
      meta: 'Law Firms, Corporate Legal Teams, Independent Practitioners',
      features: [
        { label: 'Case Lifecycle Tracking', desc: 'Store hearing dates, evidence & judge notes' },
        { label: 'Document Automation', desc: 'Draft petitions & notices with custom templates' },
        { label: 'Client Portal & Billing', desc: 'Retainer management & time-tracking invoice generation' }
      ]
    }
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="section section-products" id="products">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Proprietary Software Suites</div>
          <h2 className="section-title">
            Our Proprietary <span className="gradient-text">Product Portfolio</span>
          </h2>
          <p className="section-desc">
            Explore our flagship software products. Hover over any card to flip and inspect features, target deployment sectors, and request a live demonstration.
          </p>

          <div className="product-filter-tabs" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Products</button>
            <button className={`filter-btn ${activeFilter === 'Healthcare' ? 'active' : ''}`} onClick={() => setActiveFilter('Healthcare')}>Healthcare & PMS</button>
            <button className={`filter-btn ${activeFilter === 'CRM' ? 'active' : ''}`} onClick={() => setActiveFilter('CRM')}>Enterprise CRM</button>
            <button className={`filter-btn ${activeFilter === 'Legal' ? 'active' : ''}`} onClick={() => setActiveFilter('Legal')}>Legal Tech</button>
          </div>
        </div>

        <div className="products-3d-grid">
          {filteredProducts.map(p => (
            <div 
              className={`card-3d-wrap ${flippedCards[p.id] ? 'is-flipped' : ''}`} 
              key={p.id} 
              data-category={p.category}
              onClick={() => toggleFlip(p.id)}
              title="Hover or tap to flip card"
            >
              <div className="card-3d-inner">
                {/* Front */}
                <div className="card-face card-front">
                  <div>
                    <div className="card-header-badge">{p.badge}</div>
                    <h3 className="product-card-title">{p.title}</h3>
                    <p className="product-card-desc">{p.desc}</p>
                  </div>
                  <div>
                    <div className="card-features-mini">
                      {p.tags.map((t, idx) => <span key={idx} className="mini-tag">{t}</span>)}
                    </div>
                    <div className="flip-hint">
                      <RefreshCw size={13} className="flip-icon" />
                      <span>Hover or tap to inspect back details</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="card-face card-back">
                  <div className="back-content">
                    <div>
                      <div className="back-card-header">
                        <span className="back-card-badge">{p.badge}</span>
                        <h4 className="back-card-title">{p.title}</h4>
                      </div>

                      <div className="back-features-wrapper">
                        <div className="back-section-label">Key Capabilities & Modules</div>
                        <ul className="back-feature-list">
                          {p.features.map((f, idx) => (
                            <li key={idx}>
                              <span className="feature-check">✓</span>
                              <div>
                                <strong>{f.label}: </strong>
                                <span>{f.desc}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="back-meta">
                        <span className="meta-label">Built for: </span>
                        <span className="meta-value">{p.meta}</span>
                      </div>
                    </div>

                    <div className="back-card-footer">
                      <button 
                        type="button" 
                        className="btn btn-primary btn-sm btn-glow" 
                        onClick={(e) => {
                          e.stopPropagation();
                          openDemoModal(p.title);
                        }}
                      >
                        <span>Request Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
