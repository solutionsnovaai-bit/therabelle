import { useEffect, useState } from 'react';

/** Tracks the mobile breakpoint (max-width: 767px) reactively. */
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
    };
  }, []);

  return isMobile;
}
