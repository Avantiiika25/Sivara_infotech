
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

function TestimonialCard({ name, role, company, text, rating = 5, avatar, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 rounded-3xl relative h-full flex flex-col group"
    >
      <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-secondary/20 transition-colors duration-500" />
      
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
        ))}
      </div>
      
      <p className="text-foreground/90 leading-relaxed mb-8 flex-grow font-body text-lg italic">
        "{text}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
          <img src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00A86B&color=fff`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
