import { useMemo } from 'react';

// Deterministic gold-dust configs (no Math.random — stable across renders/hydration)
const GOLD_DUST_CONFIGS = [
  { left: 6, top: 18, size: 3, op: 0.22, blur: 0, dur: 16, delay: -3, drift: 8, rise: -42 },
  { left: 14, top: 62, size: 2, op: 0.16, blur: 1, dur: 19, delay: -9, drift: -6, rise: -34 },
  { left: 22, top: 34, size: 4, op: 0.24, blur: 1, dur: 21, delay: -5, drift: 10, rise: -55 },
  { left: 31, top: 78, size: 2, op: 0.14, blur: 0, dur: 15, delay: -11, drift: -8, rise: -30 },
  { left: 40, top: 12, size: 3, op: 0.2, blur: 1, dur: 18, delay: -2, drift: 6, rise: -48 },
  { left: 49, top: 55, size: 2, op: 0.18, blur: 0, dur: 22, delay: -14, drift: -10, rise: -38 },
  { left: 58, top: 28, size: 4, op: 0.26, blur: 1, dur: 17, delay: -7, drift: 9, rise: -50 },
  { left: 66, top: 70, size: 2, op: 0.15, blur: 0, dur: 20, delay: -4, drift: -7, rise: -32 },
  { left: 74, top: 20, size: 3, op: 0.22, blur: 1, dur: 14, delay: -10, drift: 7, rise: -44 },
  { left: 82, top: 60, size: 2, op: 0.17, blur: 0, dur: 19, delay: -1, drift: -9, rise: -36 },
  { left: 90, top: 40, size: 3, op: 0.2, blur: 1, dur: 16, delay: -6, drift: 8, rise: -46 },
  { left: 12, top: 46, size: 2, op: 0.16, blur: 0, dur: 21, delay: -13, drift: -5, rise: -33 },
  { left: 54, top: 84, size: 3, op: 0.19, blur: 1, dur: 18, delay: -8, drift: 6, rise: -40 },
  { left: 96, top: 15, size: 2, op: 0.15, blur: 0, dur: 15, delay: -12, drift: -6, rise: -28 },
  { left: 3, top: 88, size: 2, op: 0.18, blur: 0, dur: 17, delay: -16, drift: 7, rise: -36 },
  { left: 27, top: 8, size: 3, op: 0.2, blur: 1, dur: 20, delay: -3, drift: -8, rise: -52 },
  { left: 36, top: 92, size: 2, op: 0.14, blur: 0, dur: 15, delay: -18, drift: 9, rise: -30 },
  { left: 45, top: 38, size: 4, op: 0.25, blur: 1, dur: 22, delay: -9, drift: -6, rise: -58 },
  { left: 63, top: 8, size: 2, op: 0.16, blur: 0, dur: 18, delay: -15, drift: 6, rise: -34 },
  { left: 71, top: 92, size: 3, op: 0.2, blur: 1, dur: 19, delay: -6, drift: -9, rise: -42 },
  { left: 87, top: 78, size: 2, op: 0.17, blur: 0, dur: 16, delay: -19, drift: 8, rise: -32 },
  { left: 97, top: 52, size: 3, op: 0.22, blur: 1, dur: 21, delay: -4, drift: -7, rise: -48 },
];

/**
 * Floating gold dust particles used as ambient decoration across sections.
 * @param {{ color: string, count: number, reducedMotion: boolean }} props
 */
export default function GoldDust({ color, count = GOLD_DUST_CONFIGS.length, reducedMotion = false }) {
  const dots = useMemo(() => GOLD_DUST_CONFIGS.slice(0, count), [count]);

  return (
    <>
      {dots.map((d, i) => (
        <div
          key={i}
          data-tb-dust="1"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: d.left + '%',
            top: d.top + '%',
            width: (d.size + 2) + 'px',
            height: (d.size + 2) + 'px',
            borderRadius: '50%',
            background: color,
            opacity: Math.min(0.55, d.op * 1.8),
            boxShadow: '0 0 ' + (d.size * 2) + 'px ' + color,
            filter: d.blur ? ('blur(' + d.blur + 'px)') : 'none',
            pointerEvents: 'none',
            animation: reducedMotion ? 'none' : ('tbDustFloat ' + d.dur + 's ease-in-out ' + d.delay + 's infinite alternate'),
            '--tb-drift': d.drift + 'px',
            '--tb-rise': d.rise + 'px',
          }}
        />
      ))}
    </>
  );
}
