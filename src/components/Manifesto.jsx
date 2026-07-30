import { MANIFESTO } from '../content.js';
import SectionGlow from './SectionGlow.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Manifesto({ isMobile, reducedMotion }) {
  const reveal = useReveal({ reducedMotion });
  const padY = isMobile ? '72px' : '128px';

  return (
    <section data-screen-label="Manifesto" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'var(--color-cream, #F7EFDF)', overflow: 'hidden' }}>
      <SectionGlow position={{ top: '-40px', right: '-40px' }} size={420} color="rgba(173,139,84,0.35)" />
      <div ref={reveal.ref} style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', textAlign: 'center', ...reveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{MANIFESTO.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 26px', color: 'var(--color-ink, #34281B)' }}>
          {MANIFESTO.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{MANIFESTO.titleEm}</em>
        </h2>
        {MANIFESTO.paragraphs.map((p, i) => (
          <p key={i} style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-ink-soft, #5C4C39)', margin: i === MANIFESTO.paragraphs.length - 1 ? 0 : '0 0 20px' }}>{p}</p>
        ))}
      </div>
    </section>
  );
}
