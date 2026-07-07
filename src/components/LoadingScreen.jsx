import { useEffect, useRef, useState } from 'react';
import { LOADING_SCREEN } from '../content.js';

const DURATION = 1600;
const FADE_DURATION = 500;
const MASK_IMAGE = 'radial-gradient(ellipse 70% 70% at 50% 50%, black 55%, transparent 98%)';

/**
 * Full-screen loading state, shown once per session. Light cream/gold gradient
 * that anticipates the hero — the load-logo art fades/masks into the background
 * so the transition into the hero reads as the wall "revealing" itself.
 */
export default function LoadingScreen({ active, isMobile, reducedMotion, onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    document.body.style.overflow = 'hidden';
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setFade(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          try { sessionStorage.setItem('tb_loaded', '1'); } catch (e) {}
          onFinish();
        }, FADE_DURATION);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  const logoSize = isMobile ? '224px' : '288px';

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'linear-gradient(180deg, #EEC587 0%, #E5BC8C 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fade ? 0 : 1,
        transition: 'opacity .5s ease-out',
        pointerEvents: active ? 'auto' : 'none',
      }}
    >
      <img
        src={LOADING_SCREEN.logo}
        alt={LOADING_SCREEN.logoAlt}
        aria-hidden="true"
        style={{
          width: logoSize,
          height: logoSize,
          objectFit: 'cover',
          marginBottom: '28px',
          WebkitMaskImage: MASK_IMAGE,
          maskImage: MASK_IMAGE,
          transform: !reducedMotion && fade ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform .5s ease-out',
        }}
      />
      <div style={{ width: '180px', height: '2px', background: 'rgba(52,40,27,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: progress + '%', background: 'var(--color-gold-deep, #8A6B3A)', transition: 'width 60ms linear' }} />
      </div>
    </div>
  );
}
