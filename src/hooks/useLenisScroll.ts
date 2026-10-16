import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling with physical momentum, damping,
 * and fluid inertia across BOTH desktop (wheel) and mobile devices (touch).
 */
export function useLenisScroll() {
  useEffect(() => {
    // Respect user's accessibility preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with syncTouch enabled for mobile devices
    const lenis = new Lenis({
      duration: 1.4, // Softer, more luxurious glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.88, // Gentle mouse wheel increments
      
      // Touch damping on mobile devices
      syncTouch: true, // Activates Lenis momentum on touchscreens
      syncTouchLerp: 0.08, // Buttery smooth follow and damping
      touchInertiaExponent: 1.85, // Natural physical coasting when swiping
      touchMultiplier: 1.55, // Responsive finger travel distance
      
      infinite: false
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Synchronize anchor links (#proyectos, #equipo, #contacto, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element as HTMLElement, {
              offset: -55,
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
