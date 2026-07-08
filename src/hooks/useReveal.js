import { useEffect, useRef, useState } from 'react';

/**
 * Fade + rise (optionally blur) reveal-on-scroll, backed by an IntersectionObserver.
 * Mirrors the [data-reveal] / [data-reveal-blur] behavior from the original build.
 */
export function useReveal({ blur = false, reducedMotion = false } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: reducedMotion
      ? 'none'
      : blur
      ? 'opacity .7s ease, transform .7s ease, filter .7s ease'
      : 'opacity .7s ease, transform .7s ease',
    ...(blur ? { filter: visible ? 'blur(0px)' : 'blur(6px)' } : {}),
  };

  return { ref, style, visible };
}
