import { useState } from 'react';
import { Calendar, X } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, productTitle, showToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    showToast(`Demo Request Received! Our solution architect will schedule a session for ${productTitle} with ${name}.`);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>
        <div className="modal-header">
          <div className="modal-badge">Request Demo</div>
          <h3 className="modal-title">{productTitle || 'Synfolix Product Demo'}</h3>
          <p className="modal-desc">Schedule a live walkthrough with our product architecture team.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="demoName">Full Name *</label>
            <input
              type="text"
              id="demoName"
              required
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="demoEmail">Work Email *</label>
            <input
              type="email"
              id="demoEmail"
              required
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="demoPhone">Phone Number</label>
            <input
              type="tel"
              id="demoPhone"
              placeholder="+91 00000 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%', marginTop: '10px' }}>
            <span>Schedule Demo</span>
            <Calendar size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
