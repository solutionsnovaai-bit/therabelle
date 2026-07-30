import { useRef, useState } from 'react';
import { PROCEDIMENTOS, waFor } from '../content.js';
import { useReveal } from '../hooks/useReveal.js';

function DesktopCard({ item, num, isLast, reducedMotion }) {
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
        gridColumn: isLast ? '2' : 'auto',
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
  const carouselRef = useRef(null);
  const cardWidthPx = useRef(0);
  const [activeDot, setActiveDot] = useState(0);

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    if (!cardWidthPx.current && el.firstChild) {
      cardWidthPx.current = el.firstChild.offsetWidth + 16;
    }
    if (cardWidthPx.current) {
      const idx = Math.round(el.scrollLeft / cardWidthPx.current);
      if (idx !== activeDot) setActiveDot(idx);
    }
  };

  return (
    <section id="procedimentos" data-screen-label="Estética avançada" style={{ position: 'relative', padding: padY + ' 0', background: 'var(--color-cream, #F7EFDF)', overflow: 'hidden' }}>
      <div ref={headerReveal.ref} style={{ padding: '0 clamp(24px,6vw,64px)', textAlign: 'center', marginBottom: '56px', ...headerReveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{PROCEDIMENTOS.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 0', color: 'var(--color-ink, #34281B)' }}>
          {PROCEDIMENTOS.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{PROCEDIMENTOS.titleEm}</em>
        </h2>
      </div>

      {isMobile ? (
        <>
          <div ref={carouselRef} onScroll={onCarouselScroll} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', padding: '0 12vw 8px 12px', WebkitOverflowScrolling: 'touch' }}>
            {PROCEDIMENTOS.items.map((item) => (
              <a
                key={item.name}
                href={waFor(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: '0 0 78vw', scrollSnapAlign: 'start', textDecoration: 'none', color: 'inherit', background: 'var(--color-cream, #F7EFDF)', border: '1px solid rgba(173,139,84,0.25)', borderRadius: '4px', padding: '28px 24px', display: 'flex', flexDirection: 'column', minHeight: '220px' }}
              >
                {item.badge && (
                  <span style={{ alignSelf: 'flex-start', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink, #34281B)', background: 'var(--color-gold-light, #D8BD8A)', padding: '4px 10px', borderRadius: '999px', marginBottom: '14px' }}>{item.badge}</span>
                )}
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: '22px', margin: '0 0 10px' }}>{item.name}</h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--color-ink-soft, #5C4C39)', margin: '0 0 auto' }}>{item.desc}</p>
                <span style={{ fontSize: '13px', color: 'var(--color-gold-deep, #8A6B3A)', marginTop: '16px' }}>Saber mais →</span>
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', marginTop: '20px' }}>
            {PROCEDIMENTOS.items.map((_, i) => (
              <span key={i} style={{ width: '6px', height: '6px', borderRadius: '999px', background: i === activeDot ? 'var(--color-gold-deep, #8A6B3A)' : 'rgba(173,139,84,0.3)', display: 'inline-block' }} />
            ))}
          </div>
        </>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px', maxWidth: '1180px', margin: '0 auto', padding: '0 clamp(24px,6vw,64px)' }}>
          {PROCEDIMENTOS.items.map((item, i) => (
            <DesktopCard key={item.name} item={item} num={String(i + 1).padStart(2, '0')} isLast={i === PROCEDIMENTOS.items.length - 1} reducedMotion={reducedMotion} />
          ))}
        </div>
      )}
    </section>
  );
}
