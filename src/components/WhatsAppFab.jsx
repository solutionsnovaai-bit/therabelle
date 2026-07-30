import { useEffect, useRef, useState } from 'react';
import { WHATSAPP_FAB, waGeneral } from '../content.js';
import useIsMobile from '../hooks/useIsMobile.js';
import useReducedMotion from '../hooks/useReducedMotion.js';

export default function WhatsAppFab() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const passed = entry.boundingClientRect.top < 0 && !entry.isIntersecting;
          setVisible(passed);
        });
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const expanded = !isMobile && hover;
  const size = isMobile ? 56 : 64;

  const fabStyle = {
    position: 'fixed', right: isMobile ? '20px' : '28px', bottom: isMobile ? 'calc(24px + env(safe-area-inset-bottom))' : '32px',
    zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: expanded ? '10px' : '0px',
    minWidth: size + 'px', height: size + 'px', maxWidth: expanded ? '280px' : (size + 'px'),
    borderRadius: '999px', background: 'var(--color-ink, #34281B)', border: '1px solid rgba(173,139,84,0.3)',
    boxShadow: '0 8px 30px rgba(173,139,84,0.18), 0 4px 14px rgba(0,0,0,0.25)',
    textDecoration: 'none', overflow: 'hidden', padding: expanded ? ('0 22px 0 ' + (size - 24) / 2 + 'px') : '16px',
    boxSizing: 'border-box',
    opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.8)',
    pointerEvents: visible ? 'auto' : 'none',
    transition: 'opacity .3s ease, transform .3s ease, max-width .35s ease-out, gap .35s ease-out',
  };

  const fabTextStyle = {
    position: 'relative', zIndex: 2, whiteSpace: 'nowrap', color: 'var(--color-gold-light, #D8BD8A)', fontSize: '14px',
    maxWidth: expanded ? '220px' : '0px', overflow: 'hidden', opacity: expanded ? 1 : 0,
    transition: 'max-width .35s ease-out, opacity .25s ease',
  };

  const fabRingStyle = reducedMotion
    ? { display: 'none' }
    : { position: 'absolute', inset: 0, borderRadius: '999px', border: '1px solid rgba(173,139,84,0.4)', animation: 'tbFabBreathe 6s ease-out infinite' };

  return (
    <a
      href={waGeneral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={WHATSAPP_FAB.ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={fabStyle}
    >
      <span ref={ringRef} data-tb-ring="1" style={fabRingStyle} aria-hidden="true" />
      <span
        data-tb-fab-icon="1"
        style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flex: '0 0 24px', transition: 'transform .5s cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.32 4.94L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.83 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.1.11-1.77-.11-.41-.13-.93-.3-1.6-.59-2.81-1.21-4.64-4.05-4.78-4.24-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.4-.06.63.48.24.56.8 1.95.87 2.09.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.07.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.71-.17 1.39Z" fill="var(--color-gold-light, #D8BD8A)" />
        </svg>
      </span>
      <span style={fabTextStyle}>{WHATSAPP_FAB.label}</span>
    </a>
  );
}
