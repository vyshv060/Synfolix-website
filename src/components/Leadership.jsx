import { useCallback } from 'react';
import { Linkedin } from 'lucide-react';

export default function Leadership() {
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

  const leadershipTeam = [
    {
      position: 'Founder & CEO',
      subtitle: 'Chief Executive Officer',
      description: 'Guides the overarching vision, company roadmap, strategic partnerships, and long-term organizational growth at Synfolix.',
      initials: 'CEO',
      linkedin: ''
    },
    {
      position: 'Co-Founder & CTO',
      subtitle: 'Chief Technology Officer',
      description: 'Leads technical strategy, engineering standards, system scalability, and the core innovation vision across all technology suites.',
      initials: 'CTO',
      linkedin: ''
    },
    {
      position: 'Co-Founder & CPO',
      subtitle: 'Chief Product Officer',
      description: 'Drives product execution, user experience standards, platform delivery timelines, and tailored digital solutions for client partners.',
      initials: 'CPO',
      linkedin: ''
    }
  ];

  return (
    <section className="section section-leadership" id="leadership">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Leadership</div>
          <h2 className="section-title">
            The Vision <span className="gradient-text">Behind Synfolix</span>
          </h2>
          <p className="section-desc">
            The executive founders and leadership team guiding Synfolix’s technology direction and mission.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((leader, idx) => (
            <div 
              className="leader-card spotlight-card" 
              key={idx}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="leader-card-header">
                <div className="leader-avatar-wrap">
                  <div className="leader-avatar-inner">
                    <span className="leader-initials">{leader.initials}</span>
                  </div>
                </div>

                <div className="leader-info">
                  <h3 className="leader-position">{leader.position}</h3>
                  <div className="leader-subtitle">{leader.subtitle}</div>
                </div>
              </div>

              <p className="leader-description">{leader.description}</p>

              <div className="leader-footer">
                <div className="leader-socials">
                  {leader.linkedin ? (
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="leader-social-btn" 
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  ) : (
                    <button 
                      type="button" 
                      className="leader-social-btn" 
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
