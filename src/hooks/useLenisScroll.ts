import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Performs a natural smooth scroll that starts instantly (no slow start)
 * and decelerates with a gentle, cushioned stop.
 * Uses Cubic Ease-Out: 1 - (1 - t)^3.
 */
export function smoothScrollToElement(targetId: string) {
  const cleanId = targetId.replace(/^#/, '');
  const element = document.getElementById(cleanId);
  if (!element) return;

  const headerOffset = 70;
  const targetY = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const startY = window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) return;

  // Duration between 650ms and 950ms: responsive, starts immediately, stops gently
  const duration = Math.min(Math.max(Math.abs(distance) * 0.45, 650), 950);
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Cubic ease-out: starts immediately at high velocity, then decelerates smoothly
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function useLenisScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (!isTouchDevice) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        syncTouch: false,
        infinite: false,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }
      rafId = requestAnimationFrame(raf);
    }

    // Intercept internal anchor clicks to trigger instant-start smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#' && href.length > 1) {
          e.preventDefault();
          smoothScrollToElement(href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);
}
