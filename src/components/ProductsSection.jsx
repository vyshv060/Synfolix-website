import { useCallback } from 'react';
import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

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
      meta: 'Hospitals, Clinics & Healthcare Chains',
      features: [
        'Centralized EHR & patient histories',
        'Automated IPD/OPD itemized billing',
        'Live pharmacy dispensing & lab sync'
      ]
    },
    {
      id: 'crm',
      category: 'CRM',
      title: 'Enterprise EMS / CRM',
      desc: 'Unified Employee Management & CRM system with attendance tracking, leave workflows, payslips, task manager & team chat.',
      badge: 'Enterprise CRM',
      tags: ['Attendance', 'Leaves & Payslips', 'Team Chat'],
      meta: 'SMBs, Enterprises & Consultancies',
      features: [
        'Geolocation & biometric shift tracking',
        'Automated payroll calculation & PDF payslips',
        'Kanban task boards & encrypted internal chat'
      ]
    },
    {
      id: 'pms',
      category: 'Healthcare',
      title: 'Pharmacy PMS System',
      desc: 'Batch-level inventory tracking, medicine dispensing, customer returns & prescription management.',
      badge: 'Pharmacy Tech',
      tags: ['Batch Tracking', 'Expiry Alerts', 'Stock Control'],
      meta: 'Retail Pharmacies, Hospital Chemists & Chains',
      features: [
        'Batch & expiry date warning alerts',
        'Low stock reordering & purchase orders',
        'Fast POS barcode billing & GST invoices'
      ]
    },
    {
      id: 'legal',
      category: 'Legal',
      title: 'Legal Tech Suite',
      desc: 'Case management, court date tracking, legal document automation, client invoicing, and advocate collaboration portal.',
      badge: 'Legal Technology',
      tags: ['Case Records', 'Court Schedules', 'Document Templates'],
      meta: 'Law Firms, In-House Counsel & Advocates',
      features: [
        'Case lifecycle & court hearing dates',
        'Automated legal document & petition templates',
        'Retainer billing & time-tracking invoices'
      ]
    }
  ];

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
            Explore our flagship software platforms. Click on any product card to request a live demonstration.
          </p>

          <div className="product-filter-tabs" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Products</button>
            <button className={`filter-btn ${activeFilter === 'Healthcare' ? 'active' : ''}`} onClick={() => setActiveFilter('Healthcare')}>Healthcare & PMS</button>
            <button className={`filter-btn ${activeFilter === 'CRM' ? 'active' : ''}`} onClick={() => setActiveFilter('CRM')}>Enterprise CRM</button>
            <button className={`filter-btn ${activeFilter === 'Legal' ? 'active' : ''}`} onClick={() => setActiveFilter('Legal')}>Legal Tech</button>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(p => (
            <div 
              className="product-card spotlight-card" 
              key={p.id} 
              data-category={p.category}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => openDemoModal(p.title)}
              title={`Click to request live demo for ${p.title}`}
            >
              <div className="product-card-top">
                <div className="card-header-badge">{p.badge}</div>
                <h3 className="product-card-title">{p.title}</h3>
                <p className="product-card-desc">{p.desc}</p>
                
                <div className="product-card-features">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="product-feature-row">
                      <CheckCircle2 size={15} className="feature-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-card-bottom">
                <div className="card-features-mini">
                  {p.tags.map((t, idx) => <span key={idx} className="mini-tag">{t}</span>)}
                </div>

                <div className="product-card-footer-row">
                  <div className="product-card-meta">
                    <span className="meta-label">Built for: </span>
                    <span className="meta-val">{p.meta}</span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-glow"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDemoModal(p.title);
                    }}
                  >
                    <Sparkles size={14} />
                    <span>Request Demo</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
