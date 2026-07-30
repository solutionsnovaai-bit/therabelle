import { HEROINAS } from '../content.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Heroinas({ isMobile, reducedMotion }) {
  const photoReveal = useReveal({ reducedMotion });
  const textReveal = useReveal({ reducedMotion });
  const padY = isMobile ? '72px' : '128px';

  return (
    <section data-screen-label="Duas especialistas" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'var(--color-cream, #F7EFDF)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '360px 1fr', gap: isMobile ? '32px' : '56px', alignItems: 'center', maxWidth: '1080px', margin: '0 auto' }}>
        <div
          ref={photoReveal.ref}
          style={{ padding: '10px', background: 'var(--color-cream, #F7EFDF)', borderRadius: '2rem', boxShadow: '0 20px 44px rgba(52,40,27,0.12)', ...photoReveal.style }}
        >
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: '1.35rem', overflow: 'hidden', border: '1px solid rgba(173,139,84,0.2)' }}>
            <img src={HEROINAS.photo} alt={HEROINAS.photoAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
          </div>
        </div>
        <div ref={textReveal.ref} style={textReveal.style}>
          <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{HEROINAS.eyebrow}</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 18px', color: 'var(--color-ink, #34281B)' }}>
            {HEROINAS.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{HEROINAS.titleEm}</em>
          </h2>
          {HEROINAS.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-ink-soft, #5C4C39)', margin: i === HEROINAS.paragraphs.length - 1 ? 0 : '0 0 18px' }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
