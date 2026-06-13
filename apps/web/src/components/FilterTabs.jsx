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
        flex-wrap
        justify-center
        gap-3
        p-3
        bg-cyan-50
        border
        border-cyan-200
        rounded-full
        w-fit
        mx-auto
        shadow-lg
        shadow-cyan-100/50
      "
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.value}
            onClick={() =>
              onCategoryChange(category.value)
            }
            className={`
              relative
              overflow-hidden
              px-6
              md:px-7
              py-3
              rounded-full
              text-sm
              font-semibold
              tracking-wide
              transition-all
              duration-500
              transform
              hover:scale-105
              ${
                isActive
                  ? 'text-white'
                  : 'text-slate-700 hover:text-white'
              }
            `}
          >
            {/* Active Background */}
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-cyan-400
                  to-blue-500
                  shadow-lg
                  shadow-cyan-500/30
                "
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30
                }}
              />
            )}

            {/* Hover Black Animation */}
            {!isActive && (
              <span
                className="
                  absolute
                  inset-0
                  bg-black
                  scale-x-0
                  origin-left
                  transition-transform
                  duration-500
                  ease-out
                  hover:scale-x-100
                  rounded-full
                "
              />
            )}

            {/* Label */}
            <span className="relative z-10">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;