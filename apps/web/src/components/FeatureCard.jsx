import React from "react";
import { motion } from "framer-motion";

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        backdrop-blur-xl
        border
        border-cyan-500/20
        bg-white/5
        p-8
        transition-all
        duration-500
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]
      "
    >
      {/* Animated Glow Background */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-blue-500/10
        "
      />

      {/* Animated Top Border */}
      <div
        className="
          absolute
          top-0
          left-[-100%]
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          group-hover:left-full
          transition-all
          duration-1000
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          className="
            relative
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500/15
            to-blue-500/15
            border
            border-cyan-400/20
            flex
            items-center
            justify-center
            text-cyan-400
            mb-6
          "
        >
          <Icon className="w-8 h-8" />

          {/* Pulse Ring */}
          <span
            className="
              absolute
              inset-0
              rounded-2xl
              border
              border-cyan-400/20
              animate-ping
              opacity-20
            "
          />
        </motion.div>

        {/* Title */}
        <h3
          className="
            text-xl
            font-bold
            text-foreground
            mb-4
            transition-colors
            duration-300
            group-hover:text-cyan-400
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-muted-foreground
            leading-relaxed
          "
        >
          {description}
        </p>

        {/* Bottom Glow Line */}
        <div
          className="
            mt-6
            h-[2px]
            w-0
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            group-hover:w-full
            transition-all
            duration-500
          "
        />
      </div>

      {/* Floating Cyan Orb */}
      <div
        className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          rounded-full
          bg-cyan-500/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
        "
      />
    </motion.div>
  );
}

export default FeatureCard;