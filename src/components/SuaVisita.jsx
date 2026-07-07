import { useState } from 'react';
import { SUA_VISITA, waGeneral } from '../content.js';
import { useReveal } from '../hooks/useReveal.js';

export default function SuaVisita({ isMobile, reducedMotion }) {
  const infoReveal = useReveal({ blur: true, reducedMotion });
  const photoReveal = useReveal({ reducedMotion });
  const padY = isMobile ? '72px' : '128px';
  const [mapsHover, setMapsHover] = useState(false);
  const [waHover, setWaHover] = useState(false);

  return (
    <section id="visita" data-screen-label="Sua visita" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'var(--color-cream-deep, #EEE0C3)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
        <div ref={infoReveal.ref} style={infoReveal.style}>
          <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{SUA_VISITA.eyebrow}</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 26px', color: 'var(--color-ink, #34281B)' }}>
            {SUA_VISITA.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{SUA_VISITA.titleEm}</em>
          </h2>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 6px' }}>{SUA_VISITA.address}</p>
          <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 32px' }}>{SUA_VISITA.hours}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            <a
              href={SUA_VISITA.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setMapsHover(true)}
              onMouseLeave={() => setMapsHover(false)}
              style={{ fontSize: '14px', color: mapsHover ? 'var(--color-cream, #F7EFDF)' : 'var(--color-ink, #34281B)', background: mapsHover ? 'var(--color-ink, #34281B)' : 'transparent', textDecoration: 'none', padding: '15px 28px', border: '1px solid var(--color-ink, #34281B)', borderRadius: '999px', transition: 'background .3s ease,color .3s ease' }}
            >
              {SUA_VISITA.mapsLabel}
            </a>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWaHover(true)}
              onMouseLeave={() => setWaHover(false)}
              style={{ fontSize: '14px', color: 'var(--color-cream, #F7EFDF)', background: waHover ? 'var(--color-gold-deep, #8A6B3A)' : 'var(--color-ink, #34281B)', textDecoration: 'none', padding: '15px 28px', borderRadius: '999px', transition: 'background .3s ease,transform .2s ease', transform: waHover ? 'scale(1.02)' : 'scale(1)' }}
            >
              {SUA_VISITA.waLabel}
            </a>
          </div>
        </div>
        <div ref={photoReveal.ref} style={{ ...photoReveal.style, borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(173,139,84,0.3)' }}>
          <img src={SUA_VISITA.photo} alt={SUA_VISITA.photoAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', maxHeight: '460px' }} />
        </div>
      </div>
    </section>
  );
}
