import { useEffect, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion.js';

/** Thin bar under the nav that fills as the page is scrolled. Hidden while the loading screen is up. */
export default function ScrollProgress({ loading }) {
  const barRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const current = useRef(0);
  const target = useRef(0);

  useEffect(() => {
    // rAF-throttled: fast/trackpad scroll bursts only recompute once per frame
    let scrollTicking = false;
    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        target.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const EPS = 0.0008;
    let rafId;
    const tick = () => {
      if (reducedMotion) {
        current.current = target.current;
        if (barRef.current) barRef.current.style.transform = 'scaleX(' + current.current + ')';
      } else if (Math.abs(target.current - current.current) > EPS) {
        current.current += (target.current - current.current) * 0.15;
        if (barRef.current) {
          barRef.current.style.transform = 'scaleX(' + current.current + ')';
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '2px', zIndex: 90,
        background: 'transparent', opacity: loading ? 0 : 1, transition: 'opacity .4s ease',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%', width: '100%', transformOrigin: '0% 50%', transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, var(--color-gold-deep, #8A6B3A), var(--color-gold-light, #D8BD8A))',
        }}
      />
    </div>
  );
}
