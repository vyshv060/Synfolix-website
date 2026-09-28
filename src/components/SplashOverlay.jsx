import { useState, useEffect } from 'react';
import synfolixLogo from '../assets/synfolix-logo.png';

export default function SplashOverlay() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    const timer2 = setTimeout(() => {
      setHidden(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash-overlay ${fadeOut ? 'fade-out' : ''}`} id="splashOverlay">
      <div className="splash-content">
        <div className="splash-logo-wrap">
          <img src={synfolixLogo} alt="Synfolix Logo" className="splash-logo-img" />
        </div>
        <div className="splash-title">SYNFOLIX<span className="splash-dot">.</span></div>
      </div>
    </div>
  );
}
