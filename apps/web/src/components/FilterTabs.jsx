import React from 'react';
import { motion } from 'framer-motion';

function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange
}) {
  return (
    <div
      className="
        flex
        /* Stack vertically on mobile, row on tablet/desktop */
        flex-col
        sm:flex-row
        flex-wrap
        items-center
        justify-center
        /* Responsive gap and margin padding spacing */
        gap-3
        p-2
        w-full
        max-w-7xl
        mx-auto
      "
    >
      {/* Quick Sort Descriptive Tag Header Line */}
      <div className="flex items-center gap-2 px-2 py-1 text-white-900 select-none sm:mr-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
        
      </div>

      {/* Categories Wrap Container Track */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
        {categories.map((category) => {
          const isActive = activeCategory === category.value;

          return (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`
                relative
                overflow-hidden
                /* Responsive fluid padding scaling across screen resolutions */
                px-5
                sm:px-6
                py-2
                sm:py-2.5
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                tracking-wide
                transition-all
                duration-300
                transform
                hover:scale-105
                border
                ${
                  isActive
                    ? 'text-white border-transparent'
                    : 'text-slate-700 bg-white border-slate-200/90 hover:text-cyan-600 hover:border-cyan-200'
                }
              `}
            >
              {/* Active Background - Cyan Accent Layer */}
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-cyan-500
                    shadow-md
                    shadow-cyan-500/10
                  "
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                  }}
                />
              )}

              {/* Hover Dynamic Alpha Layer */}
              {!isActive && (
                <span
                  className="
                    absolute
                    inset-0
                    bg-cyan-50/50
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-300
                    ease-out
                    hover:scale-x-100
                    rounded-full
                    -z-10
                  "
                />
              )}

              {/* Label */}
              <span className="relative z-10 block whitespace-nowrap">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterTabs;