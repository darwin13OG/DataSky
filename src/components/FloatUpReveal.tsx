import React, { useEffect, useRef, useState } from 'react';

interface FloatUpRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  distancePx?: number;
}

export const FloatUpReveal: React.FC<FloatUpRevealProps> = ({
  children,
  delayMs = 0,
  className = '',
  distancePx = 28
}) => {
  // On mobile touch devices, initialize as visible immediately to eliminate all scroll jank / tirones
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouch) return true;
    }
    return false;
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px 100px 0px' // Pre-reveal before crossing boundary
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none'
      } ${className}`}
      style={{
        transform: isVisible ? 'translateY(0px)' : `translateY(${distancePx}px)`,
        transitionDelay: `${delayMs}ms`
      }}
    >
      {children}
    </div>
  );
};
