import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import synfolixLogo from '../assets/synfolix-logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about-synfolix', id: 'about-synfolix', aliases: ['about'] },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Solutions', href: '#build-with-us', id: 'build-with-us' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Tech', href: '#technology', id: 'technology' },
    { label: 'Our Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = [
        'hero',
        'about-synfolix',
        'leadership',
        'products',
        'build-with-us',
        'industries',
        'technology',
        'work',
        'process'
      ];

      // Detection point with offset for fixed header
      const scrollPosition = window.scrollY + 140;

      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileActive(false);
    setActiveSection(item.id);

    const target = document.getElementById(item.id) || document.querySelector(item.href);
    if (target) {
      const headerOffset = 95;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', item.href);
      }
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    setMobileActive(false);
    const target = document.getElementById('contact');
    if (target) {
      const headerOffset = 95;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      if (window.history.pushState) {
        window.history.pushState(null, '', '#contact');
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container header-container">
        <a 
          href="#hero" 
          className="brand-logo"
          onClick={(e) => handleNavClick(e, { id: 'hero', href: '#hero' })}
        >
          <img src={synfolixLogo} alt="Synfolix Logo" className="site-logo-img" />
          <span className="logo-text">SYNFOLIX<span className="logo-dot">.</span></span>
        </a>

        <nav className={`nav-menu ${mobileActive ? 'mobile-active' : ''}`} id="navMenu">
          {navItems.map((item) => {
            const isActive = activeSection === item.id || (item.aliases && item.aliases.includes(activeSection));
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            );
          })}
          <div className="mobile-menu-footer">
            <a href="#contact" className="btn btn-primary btn-glow mobile-nav-cta" onClick={handleCtaClick}>
              <span>Build With Synfolix</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-glow nav-cta" onClick={handleCtaClick}>
            <span>Build With Synfolix</span>
            <ArrowRight size={16} />
          </a>

          <button className="mobile-toggle" onClick={() => setMobileActive(!mobileActive)} aria-label="Toggle Navigation">
            {mobileActive ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
