
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PricingCard({ title, price, period, features, isPopular, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative h-full ${isPopular ? 'z-10' : 'z-0'}`}
    >
      <div className={`h-full bg-white rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${
        isPopular ? 'border-2 border-primary shadow-xl -translate-y-4' : 'border border-gray-200 shadow-sm hover:shadow-md'
      }`}>
        
        {isPopular && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white bg-primary rounded-full uppercase tracking-widest shadow-md">
            Recommended
          </span>
        )}

        <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-center">{title}</h3>
        
        <div className="flex items-baseline justify-center gap-2 mb-8 border-b border-gray-100 pb-8">
          <span className="text-4xl font-heading font-bold text-foreground">{price}</span>
          {period && <span className="text-muted-foreground font-medium">{period}</span>}
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-foreground/80 font-medium">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className={`w-full py-6 text-lg font-semibold transition-all duration-300 active:scale-[0.98] ${
          isPopular 
            ? 'bg-primary hover:bg-primary/90 text-white shadow-md' 
            : 'bg-muted hover:bg-gray-200 text-foreground'
        }`}>
          Select {title}
        </Button>
      </div>
    </motion.div>
  );
}

export default PricingCard;
