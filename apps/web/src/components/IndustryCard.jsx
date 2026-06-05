
import React from 'react';
import { motion } from 'framer-motion';

function IndustryCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
    >
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-2xl transition-colors duration-500 z-10 pointer-events-none" />
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

      <div className="relative z-20">
        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground mb-6 group-hover:text-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default IndustryCard;
