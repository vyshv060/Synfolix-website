import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: 'Healthcare',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    showToast(`Inquiry Received! Our engineering lead will contact ${formData.name} regarding ${formData.industry}.`);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: 'Healthcare',
      message: ''
    });
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <div className="contact-card-wrapper glass-card">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info-col">
              <div className="section-tag">Get In Touch</div>
              <h2 className="contact-title">Let's Build Something <span className="gradient-text">Exceptional.</span></h2>
              <p className="contact-sub">Get in touch today to learn how Synfolix Private Limited can help your hospital or clinic with modern software solutions.</p>

              <div className="contact-details">
                <div className="c-item">
                  <Phone size={24} />
                  <div>
                    <div className="c-label">Phone Support</div>
                    <a href="tel:+917386429115" className="c-val" style={{ display: 'block' }}>+91 73864 29115</a>
                    <a href="tel:+917093013165" className="c-val" style={{ display: 'block', marginTop: '4px' }}>+91 70930 13165</a>
                  </div>
                </div>

                <div className="c-item">
                  <Mail size={24} />
                  <div>
                    <div className="c-label">Direct Email</div>
                    <a href="mailto:synfolix@gmail.com" className="c-val">synfolix@gmail.com</a>
                  </div>
                </div>

                <div className="c-item">
                  <MapPin size={24} />
                  <div>
                    <div className="c-label">Office Address</div>
                    <span className="c-val" style={{ display: 'block', lineHeight: '1.45' }}>
                      Synfolix Private Limited<br />
                      H, H, opp. Satya Sai Enclave Main Road, Swarnadhama Nagar,<br />
                      Old Bowenpally, Hyderabad, Secunderabad, Telangana 500011
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Map Container inside contact-info-col under Office Address */}
              <div className="map-container" style={{ marginTop: '16px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ padding: '12px 18px', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Synfolix Private Limited — Location Map</strong>
                </div>
                <iframe
                  title="Synfolix Office Location Map"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=Synfolix+Private+Limited,+H,+H,+opp.+Satya+Sai+Enclave+Main+Road,+Swarnadhama+Nagar,+Old+Bowenpally,+Hyderabad,+Secunderabad,+Telangana+500011&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <form id="synfolixLeadForm" className="lead-form" onSubmit={handleSubmit}>
                <h3 className="form-heading">Project Builder</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="leadName">Your Name *</label>
                    <input
                      type="text"
                      id="leadName"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="leadEmail">Work Email *</label>
                    <input
                      type="email"
                      id="leadEmail"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="leadCompany">Company Name</label>
                    <input
                      type="text"
                      id="leadCompany"
                      placeholder="Hospital / Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="leadPhone">Phone Number</label>
                    <input
                      type="tel"
                      id="leadPhone"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="leadIndustry">Select Industry</label>
                  <select
                    id="leadIndustry"
                    className="form-select"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="Healthcare">Healthcare / HMS</option>
                    <option value="Legal">Legal Software</option>
                    <option value="CRM">Enterprise CRM / Sales</option>
                    <option value="Education">Education / EdTech</option>
                    <option value="Fintech">Finance & Retail</option>
                    <option value="Startup">Startup MVP</option>
                    <option value="Custom">Other Custom Software</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="leadMessage">What do you want to build? *</label>
                  <textarea
                    id="leadMessage"
                    rows={4}
                    required
                    placeholder="Describe your product requirements, timeline, or objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-glow form-submit-btn">
                  <span>Submit Lead Inquiry</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
