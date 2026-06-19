import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import PageLoader from './components/PageLoader';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorGlow from './components/CursorGlow';

import PageTransition from './components/PageTransition';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CRMSoftwarePage from './pages/CRMSoftwarePage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/crm-software" element={<PageTransition><CRMSoftwarePage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={
          <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-muted text-center">
              <div>
                <h1 className="text-7xl font-bold text-primary mb-4 font-heading">404</h1>
                <p className="text-xl text-muted-foreground mb-8 font-medium">Page not found</p>
                <a href="/" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md">
                  Return Home
                </a>
              </div>
            </div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Dynamically load public/favicon.png and mask it to a circle inside the tab
  useEffect(() => {
    const img = new Image();
    img.src = '/favicon.png'; // Pulls directly from public folder root
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const size = Math.max(img.width, img.height);
      
      canvas.width = size;
      canvas.height = size;
      
      if (ctx) {
        // Draw circular mask boundary
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        // Render centered icon asset within the rounded path
        ctx.drawImage(img, (size - img.width) / 2, (size - img.height) / 2, img.width, img.height);
        
        // Inject canvas stream back to raw DOM header elements
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        link.type = 'image/png';
        link.href = canvas.toDataURL('image/png');
      }
    };
  }, []);

  return (
    <Router>
      <PageLoader />
      <ScrollProgressBar />
      <CursorGlow />
      <ScrollToTop />
      
      <Toaster position="top-right" theme="light" richColors />
      <AnimatedRoutes />
     
      <WhatsAppButton />
    </Router>
  );
}

export default App;