
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ServiceCard({ icon: Icon, title, description, features, image, delay = 0 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-border transition-all duration-500 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {image && (
        <div className="h-48 overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow relative" style={{ transform: "translateZ(30px)" }}>
        <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(30,58,95,0.3)] group-hover:scale-110 ${image ? 'absolute -top-7 right-8 shadow-md border-4 border-white' : ''}`}>
          <Icon className="w-6 h-6 group-hover:animate-icon-pulse" />
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3 mt-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features && (
          <ul className="space-y-3 mt-auto mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-100">
           <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto font-semibold group/btn">
             Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
           </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
