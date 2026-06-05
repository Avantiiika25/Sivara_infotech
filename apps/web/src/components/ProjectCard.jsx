
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProjectCard({ image, title, category, description, client, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl border border-border h-[400px] cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground bg-primary rounded-full mb-4 shadow-sm">
            {category}
          </span>
          
          <h3 className="text-2xl font-heading font-bold mb-2">
            {title}
          </h3>
          
          <p className="text-sm text-gray-200 mb-4 font-body tracking-wide font-medium">
            Client: {client}
          </p>
          
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
              {description}
            </p>
            <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold transition-all duration-300 group/btn shadow-lg">
              <span>View 360° Tour</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
