import { useEffect, useState } from 'react';

/** Tracks `prefers-reduced-motion: reduce` reactively. */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
    };
  }, []);

  return reduced;
}
