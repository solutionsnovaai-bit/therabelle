import { useEffect, useRef, useState } from 'react';
import { HERO, SPECIALTY_WORDS, waGeneral } from '../content.js';

export default function Hero({ isMobile, reducedMotion }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const parallaxCurrent = useRef({ x: 0, y: 0 });
  const parallaxTarget = useRef({ x: 0, y: 0 });
  const parallaxEnabled = useRef(false);

  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [specialtyPhase, setSpecialtyPhase] = useState('visible');

  // parallax rAF loop (desktop pointer-fine only, respects reduced motion)
  useEffect(() => {
    const isDesktopPointer = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    parallaxEnabled.current = isDesktopPointer && !reducedMotion;

    let rafId;
    const tick = () => {
      if (parallaxEnabled.current) {
        parallaxCurrent.current.x += (parallaxTarget.current.x - parallaxCurrent.current.x) * 0.09;
        parallaxCurrent.current.y += (parallaxTarget.current.y - parallaxCurrent.current.y) * 0.09;
        if (bgRef.current) {
          bgRef.current.style.transform = 'scale(1.07) translate(' + (parallaxCurrent.current.x * 14) + 'px,' + (parallaxCurrent.current.y * 14) + 'px)';
        }
        if (textRef.current) {
          textRef.current.style.transform = 'translate(' + (parallaxCurrent.current.x * -6) + 'px,' + (parallaxCurrent.current.y * -6) + 'px)';
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [reducedMotion]);

  // rotating "especialistas em ___" word
  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setSpecialtyPhase('out');
      const outTimeout = setTimeout(() => {
        setSpecialtyIndex((i) => (i + 1) % SPECIALTY_WORDS.length);
        setSpecialtyPhase('preenter');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setSpecialtyPhase('visible'));
        });
      }, 260);
      return () => clearTimeout(outTimeout);
    }, 2600);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const onMouseMove = (e) => {
    if (!parallaxEnabled.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    parallaxTarget.current = {
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    };
  };
  const onMouseLeave = () => { parallaxTarget.current = { x: 0, y: 0 }; };

  const heroBgUrl = isMobile ? HERO.bgMobile : HERO.bgDesktop;

  const specialtyWordBase = { display: 'inline-block', fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: '17px', color: 'var(--color-ink, #34281B)', borderBottom: '1px solid var(--color-gold, #AD8B54)', paddingBottom: '1px' };
  const specialtyWordStyle = specialtyPhase === 'out'
    ? { ...specialtyWordBase, opacity: 0, transform: 'translateY(-12px)', filter: 'blur(4px)', transition: 'opacity .26s ease, transform .26s ease, filter .26s ease' }
    : specialtyPhase === 'preenter'
    ? { ...specialtyWordBase, opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)', transition: 'none' }
    : { ...specialtyWordBase, opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)', transition: 'opacity .32s ease-out, transform .32s ease-out, filter .32s ease-out' };

  return (
    <section
      data-screen-label="Hero"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: isMobile ? 'flex-end' : 'center' }}
    >
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, backgroundImage: `url(${heroBgUrl})`,
          backgroundSize: 'cover', backgroundPosition: isMobile ? 'top center' : 'right center', backgroundRepeat: 'no-repeat',
          transform: isMobile ? 'none' : 'scale(1.07)', willChange: 'transform',
        }}
      />

      {/* sentinel: WhatsAppFab watches this to know when the hero has scrolled past */}
      <div id="hero-sentinel" style={{ position: 'absolute', top: '85%', left: 0, width: '1px', height: '1px' }} aria-hidden="true" />

      <div
        ref={textRef}
        style={isMobile
          ? { padding: '0 24px 64px', width: '100%', position: 'relative', zIndex: 2 }
          : { padding: '110px 0 0 6vw', maxWidth: '52%', position: 'relative', zIndex: 2, willChange: 'transform' }}
      >
        <p style={{ fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-ink, #34281B)', margin: 0, fontWeight: 500 }}>
          {HERO.eyebrow}
        </p>

        <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(2.4rem,6vw,4.2rem)', lineHeight: 1.12, margin: '18px 0 22px', color: 'var(--color-ink, #34281B)', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: '0.26em', rowGap: '0.05em' }}>
          {HERO.titleWords.map((word, i) => (
            <span
              key={i}
              data-tb-word="1"
              style={{
                display: 'inline-block',
                opacity: reducedMotion ? 1 : 0,
                animation: reducedMotion ? 'none' : 'tbWordReveal .6s ease forwards',
                animationDelay: (120 + i * 90) + 'ms',
              }}
            >
              {word}
            </span>
          ))}
          <em style={{ fontStyle: 'italic', color: 'var(--color-ink, #34281B)', borderBottom: '1px solid var(--color-gold, #AD8B54)', paddingBottom: '2px', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: '0.22em', rowGap: '0.05em' }}>
            {HERO.titleEmWords.map((word, i) => (
              <span
                key={i}
                data-tb-word="1"
                style={{
                  display: 'inline-block',
                  opacity: reducedMotion ? 1 : 0,
                  animation: reducedMotion ? 'none' : 'tbWordReveal .6s ease forwards',
                  animationDelay: (120 + (HERO.titleWords.length + i) * 90) + 'ms',
                }}
              >
                {word}
              </span>
            ))}
          </em>
        </h1>

        <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--color-ink, #34281B)', maxWidth: '440px', margin: '0 0 34px', fontWeight: 500 }}>
          {HERO.subtitle}
        </p>

        {reducedMotion ? (
          <p style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '18px 0 26px', flexWrap: 'wrap' }}>
            <span aria-hidden="true" style={{ display: 'inline-block', width: '40px', height: '1px', background: 'var(--color-gold, #AD8B54)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink, #34281B)', fontWeight: 500 }}>
              {HERO.specialtyLabelStatic}
            </span>
          </p>
        ) : (
          <>
            <p aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '18px 0 26px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-block', width: '40px', height: '1px', background: 'var(--color-gold, #AD8B54)' }} />
              <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink, #34281B)', fontWeight: 500 }}>
                {HERO.specialtyLabel}
              </span>
              <span style={{ display: 'inline-block', minWidth: isMobile ? '190px' : '250px', height: '1.3em', lineHeight: '1.3em', overflow: 'hidden', position: 'relative', verticalAlign: 'middle' }}>
                <span style={specialtyWordStyle}>{SPECIALTY_WORDS[specialtyIndex]}</span>
              </span>
            </p>
            <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
              {HERO.srOnlySpecialties}
            </span>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px' }}>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '14px', letterSpacing: '0.03em', color: 'var(--color-cream, #F7EFDF)', background: 'var(--color-ink, #34281B)', textDecoration: 'none', padding: '16px 34px', borderRadius: '999px', transition: 'background .3s ease,transform .2s ease', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold-deep, #8A6B3A)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-ink, #34281B)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            {HERO.primaryCta}
          </a>
          <a href="#procedimentos" style={{ fontSize: '14px', color: 'var(--color-ink, #34281B)', textDecoration: 'none', borderBottom: '1px solid var(--color-gold, #AD8B54)', paddingBottom: '3px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
            {HERO.secondaryCta} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
