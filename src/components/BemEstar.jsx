import { useState } from 'react';
import { BEM_ESTAR, waFor } from '../content.js';
import { useReveal } from '../hooks/useReveal.js';

function TherapyCard({ item, num }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={waFor(item.name)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none', color: 'inherit', background: hover ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)',
        border: '1px solid ' + (hover ? 'var(--color-gold-deep, #8A6B3A)' : 'rgba(138,107,58,0.22)'), borderRadius: '2px',
        padding: '36px 30px 30px', display: 'flex', flexDirection: 'column', minHeight: '200px',
        transition: 'border-color .3s ease, transform .3s ease, background .3s ease',
        transform: hover ? 'translateY(-4px)' : 'none',
      }}
    >
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '13px', color: 'var(--color-gold-deep, #8A6B3A)', letterSpacing: '0.1em', marginBottom: '18px' }}>{num}</span>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: '21px', lineHeight: 1.25, margin: '0 0 12px', color: 'var(--color-ink, #34281B)' }}>{item.name}</h3>
      <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 auto' }}>{item.desc}</p>
      <span style={{ fontSize: '13px', color: 'var(--color-gold-deep, #8A6B3A)', marginTop: '20px', borderTop: '1px solid rgba(138,107,58,0.22)', paddingTop: '16px' }}>Saber mais →</span>
    </a>
  );
}

export default function BemEstar({ isMobile, reducedMotion }) {
  const introReveal = useReveal({ blur: true, reducedMotion });
  const gridReveal = useReveal({ reducedMotion });
  const padY = isMobile ? '72px' : '128px';

  return (
    <section id="bem-estar" data-screen-label="Bem-estar" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'linear-gradient(160deg, #F2E6C8 0%, #EAD8B8 55%, #E0C79D 100%)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(138,107,58,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'radial-gradient(ellipse at center, black, transparent 78%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 78%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '440px', height: '440px', background: 'radial-gradient(circle, rgba(193,126,94,0.18), transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', right: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)', pointerEvents: 'none' }} />

      <div ref={introReveal.ref} style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', textAlign: 'center', ...introReveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{BEM_ESTAR.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 24px', color: 'var(--color-ink, #34281B)' }}>
          {BEM_ESTAR.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{BEM_ESTAR.titleEm}</em>
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 52px' }}>{BEM_ESTAR.intro}</p>
      </div>

      <div ref={gridReveal.ref} style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto', ...gridReveal.style }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: '28px' }}>
          {BEM_ESTAR.items.map((item, i) => (
            <TherapyCard key={item.name} item={item} num={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </section>
  );
}
