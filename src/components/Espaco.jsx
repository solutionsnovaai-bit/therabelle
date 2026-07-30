import { useRef } from 'react';
import { ESPACO, CLINIC_PHOTOS } from '../content.js';
import GoldDust from './GoldDust.jsx';
import SectionGlow from './SectionGlow.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Espaco({ isMobile, reducedMotion }) {
  const textReveal = useReveal({ reducedMotion });
  const trackReveal = useReveal({ reducedMotion });
  const loopedPhotos = CLINIC_PHOTOS.concat(CLINIC_PHOTOS);

  return (
    <section data-screen-label="O espaço" style={{ position: 'relative', padding: (isMobile ? '72px' : '128px') + ' 0', background: 'var(--color-cream-deep, #EEE0C3)', overflow: 'hidden' }}>
      <SectionGlow position={{ top: '-60px', left: '-60px' }} size={360} />
      <GoldDust color="var(--color-gold-deep, #8A6B3A)" count={isMobile ? 6 : 10} reducedMotion={reducedMotion} />

      <div
        ref={textReveal.ref}
        style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', textAlign: 'center', padding: '0 clamp(24px,6vw,64px)', marginBottom: '52px', ...textReveal.style }}
      >
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{ESPACO.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 24px', color: 'var(--color-ink, #34281B)' }}>
          {ESPACO.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{ESPACO.titleEm}</em>
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-ink-soft, #5C4C39)', margin: 0 }}>{ESPACO.body}</p>
      </div>

      <div ref={trackReveal.ref} style={{ position: 'relative', ...trackReveal.style }}>
        <div style={{ overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)', maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)' }}>
          <div
            data-tb-clinic-track="1"
            style={{ display: 'flex', gap: '20px', width: 'max-content', animation: reducedMotion ? 'none' : (isMobile ? 'tbClinicScroll 26s linear infinite' : 'tbClinicScroll 38s linear infinite') }}
          >
            {loopedPhotos.map((photo, i) => (
              <div key={i} style={{ flex: '0 0 auto', width: 'clamp(220px,26vw,300px)', aspectRatio: '3/4', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(173,139,84,0.35)', padding: '5px', background: 'var(--color-cream, #F7EFDF)' }}>
                <img src={photo.src} alt={photo.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
