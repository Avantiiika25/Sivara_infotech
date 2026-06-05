import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        relative overflow-hidden
        backdrop-blur-xl
        bg-white/5
        border border-cyan-400/20
        rounded-3xl
        p-6
        group
        transition-all
        duration-500
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10">
        <div
          className="
            w-14 h-14
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            flex items-center justify-center
            text-cyan-400
            mb-5
            group-hover:bg-cyan-500
            group-hover:text-white
            group-hover:rotate-6
            transition-all duration-500
          "
        >
          <Icon className="w-7 h-7" />
        </div>

        <h4 className="text-xl font-bold text-foreground mb-3">
          {title}
        </h4>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;