
import React from 'react';
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
