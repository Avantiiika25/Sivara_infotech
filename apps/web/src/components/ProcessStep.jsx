
import React from 'react';
import { motion } from 'framer-motion';

function ProcessStep({ number, title, description, isLast, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="relative flex gap-8 pb-16"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-16 h-16 rounded-2xl glassmorphism bg-[#181818] flex items-center justify-center border-primary/30 text-primary shadow-[0_0_20px_rgba(0,168,107,0.2)]">
          {Icon ? <Icon className="w-7 h-7" /> : <span className="font-heading font-bold text-xl">{number}</span>}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
        )}
      </div>
      <div className="flex-grow pt-2">
        <span className="text-primary font-secondary font-medium tracking-widest text-xs uppercase mb-2 block">Step 0{number}</span>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProcessStep;
