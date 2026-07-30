import { useState } from 'react';
import { PROCEDIMENTOS, waFor } from '../content.js';
import { useReveal } from '../hooks/useReveal.js';

function ProcedureCard({ item, num, isLast, isMobile, reducedMotion }) {
  const reveal = useReveal({ reducedMotion });
  const [hover, setHover] = useState(false);

  return (
    <a
      ref={reveal.ref}
      href={waFor(item.name)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...reveal.style,
        transition: reveal.style.transition + ', border-color .3s ease, transform .3s ease, box-shadow .3s ease',
        textDecoration: 'none', color: 'inherit', background: 'var(--color-cream, #F7EFDF)',
        border: '1px solid ' + (hover ? 'var(--color-gold, #AD8B54)' : 'rgba(173,139,84,0.18)'), borderRadius: '2px', padding: '36px 32px 30px',
        display: 'flex', flexDirection: 'column', minHeight: '236px', position: 'relative',
        gridColumn: (isLast && !isMobile) ? '2' : 'auto',
        transform: hover ? 'translateY(-4px)' : reveal.style.transform,
        boxShadow: hover ? '0 18px 40px rgba(52,40,27,0.08)' : 'none',
      }}
    >
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '13px', color: 'var(--color-gold-light, #D8BD8A)', letterSpacing: '0.1em', marginBottom: '18px' }}>{num}</span>
      {item.badge && (
        <span style={{ position: 'absolute', top: '32px', right: '32px', fontSize: '9.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink, #34281B)', background: 'var(--color-gold-light, #D8BD8A)', padding: '4px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>{item.badge}</span>
      )}
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: '21px', lineHeight: 1.25, margin: '0 0 12px' }}>{item.name}</h3>
      <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 auto' }}>{item.desc}</p>
      <span style={{ fontSize: '13px', color: 'var(--color-gold-deep, #8A6B3A)', marginTop: '20px', borderTop: '1px solid rgba(173,139,84,0.18)', paddingTop: '16px' }}>Saber mais →</span>
    </a>
  );
}

export default function EsteticaAvancada({ isMobile, reducedMotion }) {
  const headerReveal = useReveal({ blur: true, reducedMotion });
  const padY = isMobile ? '72px' : '128px';

  return (
    <section id="procedimentos" data-screen-label="Estética avançada" style={{ position: 'relative', padding: padY + ' 0', background: 'var(--color-cream, #F7EFDF)', overflow: 'hidden' }}>
      <div ref={headerReveal.ref} style={{ padding: '0 clamp(24px,6vw,64px)', textAlign: 'center', marginBottom: '56px', ...headerReveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{PROCEDIMENTOS.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 0', color: 'var(--color-ink, #34281B)' }}>
          {PROCEDIMENTOS.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{PROCEDIMENTOS.titleEm}</em>
        </h2>
      </div>

      <div style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto', padding: '0 clamp(24px,6vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '28px' }}>
          {PROCEDIMENTOS.items.map((item, i) => (
            <ProcedureCard key={item.name} item={item} num={String(i + 1).padStart(2, '0')} isLast={i === PROCEDIMENTOS.items.length - 1} isMobile={isMobile} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
