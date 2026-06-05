
import React from 'react';
import { motion } from 'framer-motion';

function FilterTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 glassmorphism rounded-full w-fit mx-auto">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;
