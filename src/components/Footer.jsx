import { FOOTER } from '../content.js';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-ink, #34281B)', padding: '36px clamp(24px,6vw,64px) calc(36px + env(safe-area-inset-bottom))', textAlign: 'center', borderTop: '1px solid rgba(216,189,138,0.15)' }}>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '16px', letterSpacing: '0.2em', color: 'var(--color-gold-light, #D8BD8A)', margin: '0 0 10px' }}>{FOOTER.brand}</p>
      <p style={{ fontSize: '13px', color: 'rgba(247,239,223,0.55)', margin: '0 0 4px' }}>{FOOTER.address}</p>
      <p style={{ fontSize: '13px', color: 'rgba(247,239,223,0.55)', margin: '0 0 18px' }}>{FOOTER.hours}</p>
      <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,239,223,0.45)', margin: 0 }}>{FOOTER.credit}</p>
    </footer>
  );
}
