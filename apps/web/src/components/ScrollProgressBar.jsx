import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-950/20 backdrop-blur-xs z-[100] w-full">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 origin-left shadow-[0_1px_15px_rgba(6,182,212,0.7),_0_0_4px_rgba(6,182,212,0.4)] rounded-r-full"
        style={{ scaleX }}
      />
    </div>
  );
}