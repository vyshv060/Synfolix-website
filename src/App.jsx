import { useState } from 'react';
import SplashOverlay from './components/SplashOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Leadership from './components/Leadership';
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
  const [toasts, setToasts] = useState([]);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoProductTitle, setDemoProductTitle] = useState('');

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
      <Header />
      <Hero />
      <Pillars />
      <Leadership />
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
