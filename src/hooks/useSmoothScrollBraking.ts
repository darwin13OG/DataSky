import { useEffect, useRef } from 'react';

/**
 * Hook that adds kinetic damping / cushioning when scrolling rapidly toward the
 * top or bottom edges of the page, preventing harsh abrupt boundary collisions.
 */
export function useSmoothScrollBraking() {
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const isBraking = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleWheel = (e: WheelEvent) => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const delta = e.deltaY;

      // When rapidly approaching the very top (within 140px) scrolling upward
      if (currentScrollY <= 140 && delta < -35 && !isBraking.current) {
        // Soften and cushion the approach
        isBraking.current = true;
        e.preventDefault();

        const startY = currentScrollY;
        const targetY = 0;
        const startTime = performance.now();
        const duration = 400; // ms

        const easeOutCubic = (t: number) => --t * t * t + 1;

        const animateBrake = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);

          window.scrollTo(0, startY + (targetY - startY) * easedProgress);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animateBrake);
          } else {
            isBraking.current = false;
          }
        };

        animationFrameId = requestAnimationFrame(animateBrake);
      }

      // When rapidly approaching the bottom (within 140px) scrolling downward
      const distanceFromBottom = documentHeight - (currentScrollY + windowHeight);
      if (distanceFromBottom <= 140 && delta > 35 && !isBraking.current) {
        isBraking.current = true;
        e.preventDefault();

        const startY = currentScrollY;
        const targetY = documentHeight - windowHeight;
        const startTime = performance.now();
        const duration = 400;

        const easeOutCubic = (t: number) => --t * t * t + 1;

        const animateBrake = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);

          window.scrollTo(0, startY + (targetY - startY) * easedProgress);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animateBrake);
          } else {
            isBraking.current = false;
          }
        };

        animationFrameId = requestAnimationFrame(animateBrake);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);
}
