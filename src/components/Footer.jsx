import synfolixLogo from '../assets/synfolix-logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo">
              <img src={synfolixLogo} alt="Synfolix Logo" className="site-logo-img" />
              <span className="logo-text">SYNFOLIX<span className="logo-dot">.</span></span>
            </a>
            <p className="footer-tagline">We build digital products that solve real business problems across industries.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Healthcare HMS</a></li>
                <li><a href="#products">Pharmacy PMS</a></li>
                <li><a href="#products">Enterprise CRM</a></li>
                <li><a href="#products">Legal Suite</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#build-with-us">Custom Software</a></li>
                <li><a href="#build-with-us">SaaS Platforms</a></li>
                <li><a href="#build-with-us">AI & Automation</a></li>
                <li><a href="#build-with-us">Mobile Apps</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Industries</h4>
              <ul>
                <li><a href="#industries">Healthcare</a></li>
                <li><a href="#industries">Legal</a></li>
                <li><a href="#industries">Education</a></li>
                <li><a href="#industries">Enterprise</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about-synfolix">About Synfolix</a></li>
                <li><a href="#work">Case Studies</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">&copy; 2026 Synfolix Technologies. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
