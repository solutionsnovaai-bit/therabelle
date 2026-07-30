/**
 * Subtle radial dot-grid glow used as a corner accent on section backgrounds.
 * @param {{ position: object, size: number, color: string }} props
 */
export default function SectionGlow({ position, size = 400, color = 'rgba(173,139,84,0.3)' }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: '22px 22px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        pointerEvents: 'none',
        ...position,
      }}
    />
  );
}
