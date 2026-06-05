
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 shadow-[0_10px_30px_rgba(30,58,95,0.3)] hover:shadow-[0_15px_40px_rgba(30,58,95,0.4)] transition-all duration-300 group">
            <Link to="/contact" className="flex items-center gap-3">
              <Calendar className="w-5 h-5 group-hover:animate-icon-pulse" />
              <span className="font-semibold text-lg">Book Demo</span>
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
