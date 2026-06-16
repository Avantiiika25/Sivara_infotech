import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { useEffect } from 'react'; // 1. Make sure useEffect is imported at the very top of your file
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustryCard from '@/components/IndustryCard';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import FilterTabs from '@/components/FilterTabs';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { 
  Building2, Map, Home, Hotel, GraduationCap, Calendar, 
  Camera, Database, Focus, Video, Layers, Users, ArrowRight, ChevronDown 
} from 'lucide-react';

function HomePage() {
  const { displayedText } = useTypingEffect('Immersive Digital Experiences for Modern Real Estate', 50);
  const [activeTab, setActiveTab] = useState('residential');
  const [heroPhase, setHeroPhase] = useState(0); // For handling text switches over camera zoom

  // Master Scroll Reference for Hero Parallax
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Lens Zoom & Cinematic Sequence Transforms
  const cameraScale = useTransform(scrollYProgress, [0, 0.4], [1, 4.5]);
  const cameraOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
  const lensZoomX = useTransform(scrollYProgress, [0, 0.4], ["0%", "0%"]);
  
  const aerialScale = useTransform(scrollYProgress, [0.3, 0.7], [1.3, 1]);
  const aerialOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, -50, -150]);

  // Track scroll status to update overlay contextual headers dynamically
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setHeroPhase(0);
    else if (latest >= 0.25 && latest < 0.55) setHeroPhase(1);
    else setHeroPhase(2);
  });

  // Smooth Scroll Parallax setups for body sections
  const { scrollY } = useScroll();
  const yIntroImg = useTransform(scrollY, [400, 1500], [0, 120]);
  const yIntroText = useTransform(scrollY, [400, 1500], [0, -40]);
  const yServices = useTransform(scrollY, [1500, 3000], [50, -50]);
  const yCTA = useTransform(scrollY, [3200, 4500], [-80, 80]);

  // Magnetic Hover Configurations
  const { ref: btnRef1, position: pos1 } = useMagneticHover(15);
  const { ref: btnRef2, position: pos2 } = useMagneticHover(15);

  const industries = [
    { icon: Home, title: 'Real Estate', description: 'Showcase luxury properties with interactive virtual tours.' },
    { icon: Map, title: 'Plotting', description: 'Interactive layout mapping for seamless plot booking.' },
    { icon: Building2, title: 'Commercial', description: 'Present office spaces and retail environments remotely.' },
    { icon: Hotel, title: 'Hospitality', description: 'Immersive previews of hotels, resorts, and amenities.' },
    { icon: GraduationCap, title: 'Education', description: 'Virtual campus tours for prospective students worldwide.' },
    { icon: Calendar, title: 'Events', description: 'Digital documentation of exhibitions and large events.' }
  ];

  const services = [
    { icon: Camera, title: '360° Virtual Experiences', description: 'High-resolution immersive walkthroughs that let buyers explore every detail.', features: ['4K/8K Resolution', 'Interactive Hotspots', 'VR Ready'] },
    { icon: Database, title: 'Plot Management CRM', description: 'Intelligent ecosystem to manage inventory, track leads, and close sales.', features: ['Real-time Inventory', 'Automated Workflows', 'Agent Dashboards'] },
    { icon: Focus, title: 'Interactive Smart Maps', description: 'Detailed geographic visualization with live availability status.', features: ['Custom Cartography', 'Live Status Sync', 'Lead Capture'] },
    { icon: Video, title: 'Drone Cinematics', description: 'Breathtaking aerial photography and cinematic video production.', features: ['FPV Fly-throughs', 'Site Progress', 'Neighborhood Context'] },
    { icon: Layers, title: 'Digital Property Layouts', description: '2D & 3D floor plans that help buyers visualize spatial flow.', features: ['Architectural Precision', 'Furnished Renders', 'Interactive Views'] },
    { icon: Users, title: 'Event Virtual Coverage', description: 'Extend the life of your physical events with full 360° digital twins.', features: ['Booth Mapping', 'Speaker Integration', 'Global Access'] }
  ];

  const categories = [
    { value: 'residential', label: 'Residential' },
    { value: 'plotting', label: 'Plotting' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'government', label: 'Government' }
  ];

  const projects = [
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', title: 'The Sapphire Residences', category: 'residential', client: 'Apex Developers', description: 'A complete 360° walkthrough of a luxury penthouse.' },
    { image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80', title: 'Verde Valley Estates', category: 'plotting', client: 'Green Earth', description: 'Drone mapping and interactive CRM integration for 200+ plots.' },
    { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', title: 'Nexus Tech Park', category: 'commercial', client: 'Nexus Corp', description: 'Commercial office space virtual presentation.' }
  ];

  

// Micro-component for counter wrapper
const Counter = ({ end, suffix }) => {
  const { count, startAnimation } = useCounterAnimation(end, 2000);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3, once: true });

  // 2. Wrap the animation trigger inside useEffect
  useEffect(() => {
    if (isVisible && count === 0) {
      startAnimation();
    }
  }, [isVisible, count, startAnimation]); // Only run when these values change

  return (
    <span ref={ref} className="text-5xl lg:text-7xl font-sans font-extrabold text-cyan-400 tabular-nums tracking-tighter block mb-2">
      {count}{suffix}
    </span>
  );
};
  // Shared Framer variants for staggered sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0B0F19] text-gray-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      <Helmet>
        <title>Sivaraa Infotech | Immersive PropTech & 360° Studio</title>
        <meta name="description" content="Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure." />
      </Helmet>

      <Header />

      {/* --- HERO PARALLAX VIEWPORT CONTAINER --- */}
      <section ref={containerRef} className="relative h-[250vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Phase 2: Aerial View Layer (Appears behind/inside the lens zoom sequence) */}
          <motion.div 
            style={{ scale: aerialScale, opacity: aerialOpacity }} 
            className="absolute inset-0 w-full h-full z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
              alt="Aerial Real Estate" 
              className="w-full h-full object-cover brightness-[0.45]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-transparent to-[#0B0F19]" />
          </motion.div>

          {/* Phase 1: Camera Lens Mask Layer */}
          <motion.div 
            style={{ scale: cameraScale, opacity: cameraOpacity, x: lensZoomX }} 
            className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80" 
              alt="Premium Camera Lens Setup" 
              className="w-full h-full object-cover transform transition-transform duration-300"
            />
          </motion.div>

          {/* Core Interactive Messaging Layout overlay */}
          <motion.div style={{ y: textY }} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
            <div className="min-h-[140px] flex items-center justify-center mb-4">
              {heroPhase === 0 && (
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight max-w-5xl tracking-tight"
                >
                  {displayedText}
                  <span className="text-cyan-400 animate-pulse ml-1">|</span>
                </motion.h1>
              )}
              {heroPhase === 1 && (
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-black text-cyan-400 leading-tight tracking-tight"
                >
                  Zooming Through Innovation
                </motion.h1>
              )}
              {heroPhase === 2 && (
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
                >
                  Unveiling the Aerial Blueprint
                </motion.h1>
              )}
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-normal tracking-wide drop-shadow-md">
              Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.div ref={btnRef1} animate={{ x: pos1.x, y: pos1.y }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black rounded-full px-8 py-7 text-base font-bold shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 active:scale-[0.98] group">
                  <Link to="/portfolio">Explore Portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </motion.div>
              <motion.div ref={btnRef2} animate={{ x: pos2.x, y: pos2.y }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-md hover:bg-white text-white hover:text-black rounded-full px-8 py-7 text-base font-semibold border-white/20 hover:border-white transition-all transform hover:scale-105 active:scale-[0.98]">
                  <Link to="/crm-software">Schedule Demo</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Indicator Nudge */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20">
            <span className="text-xs tracking-widest uppercase font-medium">Scroll to Lens Zoom</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-cyan-400" />
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION (LIGHT THEME) --- */}
      <section className="py-28 bg-white text-gray-900 relative z-20 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Parallax Shift Controlled Graphic Container */}
            <motion.div style={{ y: yIntroImg }} className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-cyan-100/70 blur-3xl rounded-full" />
              <div className="relative overflow-hidden rounded-2xl group border border-gray-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649402265028-897cef6fb977?auto=format&fit=crop&w=1200&q=80" 
                  alt="Immersive Technology Showcase" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>

            <motion.div style={{ y: yIntroText }} className="order-1 lg:order-2">
              <span className="text-cyan-600 font-extrabold tracking-widest text-xs uppercase mb-3 block">Next-Gen Architecture</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
                The Future of Property Presentation Starts Here
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-normal">
                We blend architectural precision with cinematic artistry and robust software engineering. Sivaraa Infotech delivers end-to-end digital twins and CRM ecosystems that turn passive viewers into active buyers.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Interactive 360° Virtual Tours', 'Smart Plot Visualization', 'Real-Time CRM Intelligence', 'Drone Cinematic Mapping'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-[#0B0F19] hover:bg-[#1A2338] text-white rounded-full px-8 py-6 font-semibold shadow-md transition-all">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- INDUSTRIES EMPOWERED (DARK UI) --- */}
      <section className="py-28 bg-[#0B0F19] text-white relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.span variants={itemVariants} className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-2 block">Versatile Application</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black tracking-tight mb-4">Industries We Empower</motion.h2>
            <motion.p variants={itemVariants} className="text-base text-gray-400 max-w-xl mx-auto">Tailored immersive experiences optimized across diverse sectors.</motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] rounded-xl">
                <IndustryCard {...ind} delay={i * 0.05} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES MATRIX (LIGHT UI WITH CYAN ACCENTS) --- */}
      <section className="py-28 bg-gray-50 text-gray-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <span className="text-cyan-600 font-extrabold tracking-widest text-xs uppercase mb-3 block">Our Core Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Immersive Proptech Solutions</h2>
            </div>
            <Button asChild variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white rounded-full font-semibold group transition-all">
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>

          <motion.div style={{ y: yServices }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm p-1 rounded-2xl hover:shadow-md transition-shadow">
                <ServiceCard {...srv} delay={i * 0.05} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- STATS COUNTER COUNTERWEIGHT (DARK CYAN BANNER) --- */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-cyan-950 via-[#0B0F19] to-cyan-950 text-white border-y border-cyan-500/10 z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0,transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="border-r border-white/5 last:border-none"><Counter end={100} suffix="+" /><p className="font-medium tracking-wider text-xs uppercase text-gray-400">Projects Delivered</p></div>
            <div className="border-r border-white/5 last:border-none"><Counter end={40} suffix="+" /><p className="font-medium tracking-wider text-xs uppercase text-gray-400">Happy Clients</p></div>
            <div className="border-r border-white/5 last:border-none"><Counter end={5} suffix="+" /><p className="font-medium tracking-wider text-xs uppercase text-gray-400">Years of Innovation</p></div>
            <div className="border-r border-white/5 last:border-none"><Counter end={98} suffix="%" /><p className="font-medium tracking-wider text-xs uppercase text-gray-400">Client Satisfaction</p></div>
          </div>
        </div>
      </section>

      {/* --- FEATURED MASTERPIECES (DARK UI) --- */}
      <section className="py-28 bg-[#0B0F19] text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-2 block">Curated Work</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-8">Featured Masterpieces</h2>
            <div className="inline-block bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
              <FilterTabs categories={categories} activeCategory={activeTab} onCategoryChange={setActiveTab} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.filter(p => activeTab === 'residential' ? true : p.category === activeTab).map((proj, i) => (
              <motion.div 
                key={i} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl border border-white/5 bg-gray-900/40 hover:border-cyan-500/30 transition-all duration-300"
              >
                <ProjectCard {...proj} delay={i * 0.05} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="border-white/10 hover:border-cyan-400 text-white hover:bg-cyan-500 hover:text-black rounded-full px-8 py-6 font-semibold transition-all shadow-sm">
              <Link to="/portfolio">Explore Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE ACTION CALL (LIGHT ULTRA-CYAN ACCENT THEME) --- */}
      <section className="relative py-36 overflow-hidden bg-cyan-900 text-white z-20">
        <motion.div style={{ y: yCTA }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620886217193-f229f77cde12?auto=format&fit=crop&w=1920&q=80" 
            alt="Virtual Reality Landscape Context" 
            className="w-full h-full object-cover opacity-20 transform scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-cyan-950/80 mix-blend-multiply" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-3 block">Get Started</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 drop-shadow-sm leading-tight">
            Ready to Transform <br/>Property Marketing?
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-cyan-950 hover:bg-cyan-400 hover:text-black rounded-full px-10 py-7 text-base font-bold shadow-xl transform hover:scale-105 active:scale-[0.98] transition-all">
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 rounded-full px-10 py-7 text-base font-semibold transition-all">
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;






