import { useState } from 'react';
import { ESPECIALISTAS } from '../content.js';
import GoldDust from './GoldDust.jsx';
import { useReveal } from '../hooks/useReveal.js';

function SpecialistCard({ person, reducedMotion }) {
  const reveal = useReveal({ reducedMotion });
  const [hover, setHover] = useState(false);

  return (
    <div ref={reveal.ref} style={reveal.style}>
      <div style={{ padding: '10px', background: 'var(--color-cream, #F7EFDF)', borderRadius: 'calc(2rem + 10px)', boxShadow: '0 20px 44px rgba(52,40,27,0.12)' }}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '2rem', overflow: 'hidden', transition: 'border-color .4s ease', border: '1px solid ' + (hover ? 'var(--color-gold, #AD8B54)' : 'rgba(173,139,84,0.2)') }}
        >
          <img
            src={person.photo}
            alt={person.photoAlt}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: person.objectPosition || 'center', transition: 'transform .9s ease-out', display: 'block', transform: hover ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(52,40,27,0.88) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: '28px', right: '28px', bottom: '26px' }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: '28px', margin: '0 0 8px', color: 'var(--color-cream, #F7EFDF)' }}>{person.name}</h3>
            <div style={{ width: '32px', height: '1px', background: 'var(--color-gold-light, #D8BD8A)', marginBottom: '8px' }} />
            <p style={{ fontSize: '11.5px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light, #D8BD8A)', margin: 0 }}>{person.role}</p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '14.5px', lineHeight: 1.75, color: 'var(--color-ink-soft, #5C4C39)', maxWidth: '400px', margin: '24px auto 0', textAlign: 'center' }}>{person.bio}</p>
    </div>
  );
}

export default function Especialistas({ isMobile, reducedMotion }) {
  const headerReveal = useReveal({ blur: true, reducedMotion });
  const padY = isMobile ? '72px' : '128px';

  return (
    <section id="especialistas" data-screen-label="Especialistas" style={{ position: 'relative', padding: padY + ' clamp(24px,6vw,64px)', background: 'var(--color-cream-deep, #EEE0C3)', overflow: 'hidden' }}>
      <GoldDust color="var(--color-gold-deep, #8A6B3A)" count={isMobile ? 6 : 10} reducedMotion={reducedMotion} />

      <div ref={headerReveal.ref} style={{ position: 'relative', textAlign: 'center', marginBottom: '56px', ...headerReveal.style }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold-deep, #8A6B3A)', margin: 0 }}>{ESPECIALISTAS.eyebrow}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 'clamp(1.9rem,4vw,2.9rem)', lineHeight: 1.2, margin: '16px 0 0', color: 'var(--color-ink, #34281B)' }}>
          {ESPECIALISTAS.titlePlain}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-deep, #8A6B3A)' }}>{ESPECIALISTAS.titleEm}</em>
        </h2>
      </div>

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>
        {ESPECIALISTAS.people.map((person) => (
          <SpecialistCard key={person.name} person={person} reducedMotion={reducedMotion} />
        ))}
      </div>
    </section>
  );
}
