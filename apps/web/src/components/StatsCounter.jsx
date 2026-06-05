
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function StatsCounter({ end, suffix = '', prefix = '', label, duration = 2000 }) {
  const { count, startAnimation } = useCounterAnimation(end, duration);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3, once: true });

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#2D7FF9] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}

export default StatsCounter;
