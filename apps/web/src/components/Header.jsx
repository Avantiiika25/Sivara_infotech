
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Hexagon, MessageCircle } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/crm-software', label: 'CRM Software' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
          : 'bg-white/50 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg text-white group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-bold text-xl z-10">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-foreground'}`}>
                Sivaraa Infotech
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-body font-medium">
                Sivaraa 360 Studio
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="header-active-link"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-5 font-body font-medium shadow-md hover:shadow-[0_0_15px_rgba(30,58,95,0.3)] transition-all duration-300 active:scale-[0.98]">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          <button
            className="lg:hidden z-50 text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-heading text-lg font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-100">
              <a href="https://wa.me/918421270360" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-600 font-medium">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <Button asChild className="w-full bg-primary text-primary-foreground py-6">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
