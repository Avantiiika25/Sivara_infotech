import React from "react";
import { motion } from "framer-motion";

function ProcessStep({
  number,
  title,
  description,
  isLast,
  icon: Icon,
  delay = 0,
}) {
  const isEven = Number(number) % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? 80 : -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className="relative flex items-start gap-6 pb-16 group"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center relative">
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          className="
            relative z-10
            w-20 h-20
            rounded-3xl
            bg-gradient-to-br
            from-cyan-500
            via-cyan-400
            to-blue-500
            flex items-center justify-center
            text-white
            shadow-[0_0_30px_rgba(6,182,212,0.45)]
          "
        >
          {Icon ? (
            <Icon className="w-8 h-8" />
          ) : (
            <span className="font-bold text-xl">
              {number}
            </span>
          )}

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-3xl border border-cyan-300 animate-ping opacity-20"></div>
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: delay + 0.2,
            }}
            className="
              w-[3px]
              bg-gradient-to-b
              from-cyan-400
              via-cyan-500
              to-transparent
              mt-4
            "
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        className="
          flex-grow
          rounded-3xl
          bg-white
          border border-cyan-100
          shadow-lg
          hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]
          p-8
          transition-all
          duration-500
          relative
          overflow-hidden
        "
      >
        {/* Hover Glow */}
        <div
          className="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            bg-gradient-to-br
            from-cyan-500/5
            via-transparent
            to-blue-500/5
          "
        />

        <div className="relative z-10">
          <span
            className="
              inline-block
              px-4 py-1
              rounded-full
              bg-cyan-100
              text-cyan-700
              text-xs
              font-semibold
              tracking-widest
              uppercase
              mb-4
            "
          >
            Step 0{number}
          </span>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProcessStep;