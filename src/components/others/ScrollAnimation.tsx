import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  repeat?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className, threshold, repeat=false }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            ref.current?.classList.add('visible');
            ref.current?.classList.remove('hidden');
        } else if (repeat) {
            ref.current?.classList.add('hidden');
            ref.current?.classList.remove('visible');
        }
    },
      { threshold: threshold || 0.1 } // Active when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`${className || 'scroll-fade'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
