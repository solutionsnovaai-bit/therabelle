import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, NAV_CTA_LABEL, BRAND_NAME, waGeneral } from '../content.js';

export default function Nav({ isMobile }) {
  const [navHidden, setNavHidden] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      if (!menuOpen) {
        if (y < 80) {
          setNavHidden(false);
        } else if (Math.abs(delta) > 8) {
          setNavHidden(delta > 0);
        }
      }
      setNavSolid(y > 60);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  const navBarStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
    padding: isMobile ? '18px 20px' : '24px clamp(20px,5vw,64px)',
    background: navSolid ? 'rgba(247,239,223,0.96)' : 'transparent',
    boxShadow: navSolid ? '0 1px 0 rgba(173,139,84,0.18)' : 'none',
    transform: navHidden ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform .35s ease, background .3s ease, box-shadow .3s ease',
  };

  const navLinkStyle = {
    textDecoration: 'none', color: 'var(--color-ink, #34281B)', fontSize: '13px', letterSpacing: '0.02em', whiteSpace: 'nowrap',
    borderBottom: '1px solid transparent', paddingBottom: '2px', transition: 'border-color .3s ease',
  };

  const mobileMenuLinkStyle = {
    textDecoration: 'none', color: 'var(--color-ink, #34281B)', fontSize: '15px', padding: '13px 4px',
    borderBottom: '1px solid rgba(173,139,84,0.15)',
  };

  return (
    <header style={navBarStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '19px', letterSpacing: '0.3em', color: 'var(--color-ink, #34281B)', whiteSpace: 'nowrap' }}>
          {BRAND_NAME}
        </div>

        {!isMobile && (
          <nav aria-label="Seções da página" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={navLinkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-gold, #AD8B54)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {!isMobile && (
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Jost',sans-serif", fontSize: '13px', letterSpacing: '0.05em', color: 'var(--color-ink, #34281B)',
                textDecoration: 'none', padding: '11px 22px', border: '1px solid rgba(52,40,27,0.5)', borderRadius: '999px',
                background: 'rgba(255,255,255,0.7)', transition: 'background .3s ease,color .3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-ink, #34281B)'; e.currentTarget.style.color = 'var(--color-cream, #F7EFDF)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = 'var(--color-ink, #34281B)'; }}
            >
              {NAV_CTA_LABEL}
            </a>
          )}

          {isMobile && (
            <button
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M5 5L19 19M19 5L5 19" stroke="var(--color-ink, #34281B)" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="var(--color-ink, #34281B)" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            marginTop: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px',
            background: 'var(--color-cream, #F7EFDF)', borderRadius: '4px', border: '1px solid rgba(173,139,84,0.25)',
            boxShadow: '0 18px 40px rgba(52,40,27,0.14)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={mobileMenuLinkStyle}>
              {link.label}
            </a>
          ))}
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: '14px', color: 'var(--color-cream, #F7EFDF)', background: 'var(--color-ink, #34281B)', textDecoration: 'none', padding: '14px 22px', borderRadius: '999px', textAlign: 'center', marginTop: '8px' }}
          >
            {NAV_CTA_LABEL}
          </a>
        </div>
      )}
    </header>
  );
}
