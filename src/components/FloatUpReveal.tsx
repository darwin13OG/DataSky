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
  distancePx = 36
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 pointer-events-none'
      } ${className}`}
      style={{
        transform: isVisible ? 'translateY(0px)' : `translateY(${distancePx}px)`,
        transitionDelay: `${delayMs}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};
