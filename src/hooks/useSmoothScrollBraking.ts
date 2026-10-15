import { useEffect } from 'react';

/**
 * Hook that smoothly decelerates rapid scrolling near the top and bottom boundaries
 * at a steady, fixed controlled velocity, preventing sudden jarring impacts.
 */
export function useSmoothScrollBraking() {
  useEffect(() => {
    let animId: number | null = null;
    let isBraking = false;

    const smoothGlideTo = (targetY: number, fixedSpeed: number = 8) => {
      if (isBraking) return;
      isBraking = true;

      const step = () => {
        const currentY = window.scrollY;
        const diff = targetY - currentY;

        if (Math.abs(diff) <= 1) {
          window.scrollTo(0, targetY);
          isBraking = false;
          animId = null;
          return;
        }

        // Constant steady fixed velocity with soft arrival
        const move = Math.sign(diff) * Math.min(Math.abs(diff), fixedSpeed);
        window.scrollTo(0, currentY + move);
        animId = requestAnimationFrame(step);
      };

      animId = requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const delta = e.deltaY;

      // Approaching top rapidly
      if (scrollY <= 90 && delta < -25 && !isBraking) {
        e.preventDefault();
        smoothGlideTo(0, 6);
      }

      // Approaching bottom rapidly
      const distFromBottom = docHeight - (scrollY + windowHeight);
      if (distFromBottom <= 90 && delta > 25 && !isBraking) {
        e.preventDefault();
        smoothGlideTo(docHeight - windowHeight, 6);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);
}
