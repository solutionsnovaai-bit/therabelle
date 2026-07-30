import { useState } from 'react';
import { CTA_FINAL, waGeneral } from '../content.js';
import GoldDust from './GoldDust.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function CtaFinal({ isMobile, reducedMotion }) {
  const reveal = useReveal({ blur: true, reducedMotion });
  const padY = isMobile ? '72px' : '128px';
  const [hover, setHover] = useState(false);

  return (
    <section data-screen-label="CTA final" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'linear-gradient(160deg, #4A3524 0%, #382717 55%, #2C1F13 100%)', overflow: 'hidden', textAlign: 'center' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(216,189,138,0.22), transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(216,189,138,0.18) 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)', pointerEvents: 'none' }} />
      <GoldDust color="var(--color-gold-light, #D8BD8A)" count={isMobile ? 8 : 22} reducedMotion={reducedMotion} />

      <div ref={reveal.ref} style={{ position: 'relative', maxWidth: '640px', margin: '0 auto', ...reveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-light, #D8BD8A)', margin: 0 }}>{CTA_FINAL.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 30px', color: 'var(--color-cream, #F7EFDF)' }}>
          {CTA_FINAL.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-light, #D8BD8A)' }}>{CTA_FINAL.titleEm}</em>
        </h2>
        <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: '18px', lineHeight: 1.7, color: 'rgba(247,239,223,0.8)', margin: '0 0 40px' }}>&ldquo;{CTA_FINAL.quote}&rdquo;</p>
        <a
          href={waGeneral}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ fontSize: '14.5px', color: 'var(--color-ink, #34281B)', background: hover ? 'var(--color-gold-light, #D8BD8A)' : 'var(--color-gold, #AD8B54)', textDecoration: 'none', padding: '17px 36px', borderRadius: '999px', transition: 'background .3s ease,transform .2s ease', display: 'inline-block', transform: hover ? 'scale(1.02)' : 'scale(1)' }}
        >
          {CTA_FINAL.ctaLabel}
        </a>
      </div>
    </section>
  );
}
