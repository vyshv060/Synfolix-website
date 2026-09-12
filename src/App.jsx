import { useState, useEffect } from 'react';
import SplashOverlay from './components/SplashOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import ProductsSection from './components/ProductsSection';
import BuildWithUs from './components/BuildWithUs';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import WhySynfolix from './components/WhySynfolix';
import Process from './components/Process';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Toast from './components/Toast';

export default function App() {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('synfolix-theme') || 'light';
  });

  const fontSizes = ['small', 'normal', 'large', 'xlarge'];
  const [fontSizeIndex, setFontSizeIndex] = useState(() => {
    const saved = parseInt(localStorage.getItem('synfolix-font-index'), 10);
    return isNaN(saved) ? 1 : saved;
  });

  const [toasts, setToasts] = useState([]);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoProductTitle, setDemoProductTitle] = useState('');

  // Apply theme attribute to html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('synfolix-theme', theme);
  }, [theme]);

  // Apply font size attribute to html element
  useEffect(() => {
    const validIndex = Math.max(0, Math.min(fontSizes.length - 1, fontSizeIndex));
    document.documentElement.setAttribute('data-font-size', fontSizes[validIndex]);
    localStorage.setItem('synfolix-font-index', validIndex);
  }, [fontSizeIndex]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const applyFontSize = (index) => {
    setFontSizeIndex(Math.max(0, Math.min(fontSizes.length - 1, index)));
  };

  const showToast = (message) => {
    setToasts(prev => [...prev, message]);
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 4000);
  };

  const openDemoModal = (productTitle) => {
    setDemoProductTitle(productTitle || 'Synfolix Product Demo');
    setDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <>
      <SplashOverlay />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        fontSizeIndex={fontSizeIndex}
        applyFontSize={applyFontSize}
      />
      <Hero theme={theme} />
      <Pillars />
      <ProductsSection openDemoModal={openDemoModal} />
      <BuildWithUs />
      <TechStack />
      <Industries />
      <WhySynfolix />
      <Process />
      <ContactSection showToast={showToast} />
      <Footer />
      <DemoModal
        isOpen={demoModalOpen}
        onClose={closeDemoModal}
        productTitle={demoProductTitle}
        showToast={showToast}
      />
      <Toast toasts={toasts} />
    </>
  );
}
