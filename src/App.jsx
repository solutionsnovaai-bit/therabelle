import { useState } from 'react';
import useIsMobile from './hooks/useIsMobile.js';
import useReducedMotion from './hooks/useReducedMotion.js';

import LoadingScreen from './components/LoadingScreen.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Espaco from './components/Espaco.jsx';
import Manifesto from './components/Manifesto.jsx';
import Especialistas from './components/Especialistas.jsx';
import EsteticaAvancada from './components/EsteticaAvancada.jsx';
import BemEstar from './components/BemEstar.jsx';
import SuaVisita from './components/SuaVisita.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

export default function App() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // loading screen state — shown once per session (see LoadingScreen for the timing/fade logic)
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem('tb_loaded') !== '1';
    } catch (e) {
      return true;
    }
  });

  return (
    <div
      style={{
        '--cream': '#F7EFDF', '--cream-deep': '#EEE0C3', '--ink': '#34281B', '--ink-soft': '#5C4C39',
        '--gold': '#AD8B54', '--gold-light': '#D8BD8A', '--gold-deep': '#8A6B3A', '--olive': '#6C7554',
        '--olive-soft': '#97A17C', '--blush': '#C17E5E', '--sand': '#EAD8B8', '--terracotta': '#DDAE87',
        fontFamily: "'Jost',sans-serif", background: 'var(--cream)', color: 'var(--ink)',
        position: 'relative', overflowX: 'hidden', minHeight: '100vh',
      }}
    >
      <LoadingScreen active={loading} isMobile={isMobile} reducedMotion={reducedMotion} onFinish={() => setLoading(false)} />
      <ScrollProgress loading={loading} />
      <Nav isMobile={isMobile} />
      <Hero isMobile={isMobile} reducedMotion={reducedMotion} />
      <Espaco isMobile={isMobile} reducedMotion={reducedMotion} />
      <Manifesto isMobile={isMobile} reducedMotion={reducedMotion} />
      <Especialistas isMobile={isMobile} reducedMotion={reducedMotion} />
      <EsteticaAvancada isMobile={isMobile} reducedMotion={reducedMotion} />
      <BemEstar isMobile={isMobile} reducedMotion={reducedMotion} />
      <SuaVisita isMobile={isMobile} reducedMotion={reducedMotion} />
      <CtaFinal isMobile={isMobile} reducedMotion={reducedMotion} />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
