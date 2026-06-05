
import { useState, useEffect, useRef } from 'react';

export function useCounterAnimation(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isAnimating, end, duration, start]);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return { count, startAnimation, counterRef };
}
