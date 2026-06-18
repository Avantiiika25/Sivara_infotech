import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

// Imported local asset logo directly
import logo from '../assets/images/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Keep screen scrollable but allow dropdown control
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/crm-software', label: 'CRM' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  // Animation variants for dropdown items
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.06
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.25, ease: 'easeInOut', when: "afterChildren" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-md py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ==================== BIG EMBEDDED LOGO (NO GLOW WRAPPER) ==================== */}
          {/* ==================== ADAPTIVE LOGO WITH STATE-DEPENDENT BACKING ==================== */}
<Link to="/" className="relative flex items-center z-50 select-none group">
  <div 
    className={`relative flex items-center justify-center px-0 py-0 rounded-lg transition-all duration-300 ease-out ${
      isScrolled 
        ? 'bg-transparent border-transparent shadow-none' 
        : 'bg-white border border-slate-100 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.08)]'
    }`}
  >
    <img 
      src={logo} // Make sure your local asset points to logo.jpg
      alt="Sivaraa Infotech" 
      className="w-24 h-12 sm:w-36 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      loading="eager"
    />
  </div>
</Link>

          {/* ==================== DESKTOP NAVIGATION BAR ==================== */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-xs font-black uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path)
                    ? (isScrolled ? 'text-cyan-600' : 'text-white')
                    : (isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/80 hover:text-white')
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <motion.span
                    layoutId="slim-underline"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isScrolled ? 'bg-cyan-600' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ==================== DESKTOP CALL TO ACTION ==================== */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className={`text-xs font-black tracking-widest uppercase rounded-lg px-6 py-5 h-auto border-2 transition-all duration-300 active:scale-95 ${
                isScrolled
                  ? 'bg-slate-900 border-slate-900 hover:bg-cyan-600 hover:border-cyan-600 text-white shadow-md'
                  : 'bg-white border-white text-slate-900 hover:bg-transparent hover:text-white shadow-lg'
              }`}
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* ==================== MOBILE/TABLET MENU TRIGGER ==================== */}
          <button
            className={`lg:hidden z-50 p-2 rounded-xl border transition-all duration-200 active:scale-95 ${
              isScrolled 
                ? 'bg-white border-slate-200 text-slate-800' 
                : 'bg-white/10 border-white/20 backdrop-blur-sm text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ==================== COMPACT TRANSPARENT MOBILE DROPDOWN ==================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl flex flex-col p-5 gap-4 lg:hidden z-40 overflow-hidden"
          >
            {/* Animated Header/Logo info inside menu container */}
            <motion.div variants={itemVariants} className="flex items-center justify-center pb-2 border-b border-slate-900/10">
              <img src={logo} alt="Sivaraa" className="w-14 h-14 object-contain" />
            </motion.div>

            {/* Menu Links Layer */}
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`group flex items-center justify-between py-3 px-4 rounded-xl font-black text-sm tracking-wider uppercase transition-all duration-200 ${
                      isActive(link.path) 
                        ? 'text-cyan-600 bg-slate-900/5' 
                        : 'text-slate-900 hover:text-cyan-600 hover:bg-slate-900/5'
                    }`}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">{link.label}</span>
                    {isActive(link.path) ? (
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions Layer (Stagger-animated along with menu items) */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2 pt-3 border-t border-slate-900/10">
              <a 
                href="https://wa.me/918421270360" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
              <Button asChild className="w-full bg-slate-900 hover:bg-cyan-600 text-white py-6 text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-200">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;