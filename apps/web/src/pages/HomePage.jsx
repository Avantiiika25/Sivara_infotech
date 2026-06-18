import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import hero1 from "@/assets/images/hero1.png";
import { Camera, Database, Focus, Video, Layers, Users, ChevronDown } from 'lucide-react';

// Portfolio Image Asset Registries
import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";
import w5 from "@/assets/images/w5.png";
import w7 from "@/assets/images/w7.png";
import w8 from "@/assets/images/w8.png";
import w9 from "@/assets/images/w9.png";
import w10 from "@/assets/images/w10.png";
import w17 from "@/assets/images/w17.png";
import w18 from "@/assets/images/w18.png";
import w20 from "@/assets/images/w20.png";

// Industry Theme Image Asset Registries
import ind1 from "@/assets/images/ind1.png";
import ind2 from "@/assets/images/ind2.png";
import ind3 from "@/assets/images/ind3.png";
import ind4 from "@/assets/images/ind4.png";
import ind5 from "@/assets/images/ind5.png";
import ind6 from "@/assets/images/ind6.png";
import ind7 from "@/assets/images/ind7.png";

function HomePage() {
  const { displayedText } = useTypingEffect('Immersive Digital Experiences for Modern Real Estate', 50);
  const [activeTab, setActiveTab] = useState('real-estate');
  const [heroPhase, setHeroPhase] = useState(0);

  // Modal Interactive States
  const [showTourModal, setShowTourModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openTour = (project) => {
    setSelectedTour(project);
    setShowTourModal(true);
  };

  const closeTour = () => {
    setShowTourModal(false);
    setSelectedTour(null);
  };

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
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, -20, -60]);

  // Track scroll status to update overlay contextual headers dynamically
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setHeroPhase(0);
    else if (latest >= 0.25 && latest < 0.55) setHeroPhase(1);
    else setHeroPhase(2);
  });

  // Smooth Scroll Parallax setups for body sections
  const { scrollY } = useScroll();
  const yIntroText = useTransform(scrollY, [400, 1200], [0, -20]);

  // Magnetic Hover Configurations
  const { ref: btnRef1, position: pos1 } = useMagneticHover(15);
  const { ref: btnRef2, position: pos2 } = useMagneticHover(15);

  const industries = [
    { title: "Real Estate", image: ind1 },
    { title: "Education", image: ind2 },
    { title: "Healthcare", image: ind3 },
    { title: "Government Projects", image: ind4 },
    { title: "Retail", image: ind5 },
    { title: "Exhibitions", image: ind6 },
    { title: "Plotting", image: ind7 },

    
  ];

  const services = [
    { icon: Camera, title: '360° Virtual Experiences', description: 'High-resolution immersive walkthroughs that let buyers explore every detail.' },
    { icon: Database, title: 'Plot Management CRM', description: 'Intelligent ecosystem to manage inventory, track leads, and close sales.' },
    { icon: Focus, title: 'Interactive Smart Maps', description: 'Detailed geographic visualization with live availability status.' }
  ];

  const projects = [
    { id: 1, title: "Samraat Apna Ghar", category: "real-estate", client: "Samraat Group", description: "Interactive residential property virtual tour.", image: w1, tourUrl: "https://app.cloudpano.com/tours/RlO6rgfJS/" },
    { id: 2, title: "Riddhi Exotica", category: "real-estate", client: "Riddhi Group", description: "Luxury residential project walkthrough.", image: w2, tourUrl: "https://app.cloudpano.com/tours/DA7EYiOJE/" },
    { id: 3, title: "ABH Industrial Plots Phase 2", category: "plotting", client: "ABH Group", description: "Industrial plotting virtual tour.", image: w3, tourUrl: "https://app.cloudpano.com/tours/-hGPxaR2U/" },
    { id: 4, title: "URBAN SYTES GROUP PLOTS", category: "plotting", client: "Urban Sytes", description: "Premium NA plotting project.", image: w4, tourUrl: "https://app.cloudpano.com/tours/fr6K6w0y1/" },
    { id: 13, title: "Growth Euphoria Riverside", category: "plotting", client: "Growth Euphoria", description: "Premium riverside plotting.", image: w5, tourUrl: "https://app.cloudpano.com/tours/YK7DG8-XF/" },
    { id: 15, title: "Trinity Plots", category: "plotting", client: "Trinity", description: "Premium plotting project.", image: w7, tourUrl: "https://app.cloudpano.com/tours/RLpY4XWm1/" },
    { id: 16, title: "Nature Village", category: "plotting", client: "Nature Village", description: "Nature inspired plotting development.", image: w20, tourUrl: "https://app.cloudpano.com/tours/EqmVLBIkIWvD/" },
    { id: 17, title: "Aura Interior", category: "interior", client: "Aura Interior", description: "Luxury interior virtual walkthrough.", image: w8, tourUrl: "https://app.cloudpano.com/tours/1ZSdkI9lP/" },
    { id: 18, title: "CREDAI 2025", category: "expo", client: "CREDAI", description: "Property exhibition virtual tour.", image: ind6, tourUrl: "https://app.cloudpano.com/tours/9h3FCyAmi/" },
    { id: 19, title: "MAHA TECH", category: "expo", client: "MAHA TECH", description: "Technology expo showcase.", image: w9, tourUrl: "https://app.cloudpano.com/tours/8-H3Ahf06/" },
    { id: 20, title: "IIID Exhibition", category: "expo", client: "IIID", description: "Interior design exhibition.", image: w10, tourUrl: "https://app.cloudpano.com/tours/Het-5DGip/" },
    { id: 24, title: "CREDAI Shelter Expo 2024", category: "expo", client: "CREDAI Nashik", description: "Property expo walkthrough.", image: ind6, tourUrl: "https://app.cloudpano.com/tours/9h3FCyAmi/" },
    { id: 28, title: "Nashik Ganga Ghat", category: "government", client: "Government Project", description: "Tourism and heritage showcase.", image: ind4, tourUrl: "https://app.cloudpano.com/tours/XSmWGW3e6/" },
    { id: 29, title: "Trimbakeshwar", category: "government", client: "Government Project", description: "Religious tourism virtual tour.", image: w17, tourUrl: "https://app.cloudpano.com/tours/eeGGt6LeW/" },
    { id: 30, title: "Ranji Match Golf Club", category: "government", client: "Sports Authority", description: "Sports event virtual coverage.", image: w18, tourUrl: "https://app.cloudpano.com/tours/dEETujGAt/" }
  ];

  const categories = [
    { id: 'plotting', name: 'Plotting & NA Projects' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'expo', name: 'Exhibitions & Events' },
    { id: 'government', name: 'Government & Heritage' }
  ];

  const Counter = ({ end, suffix }) => {
    const { count, startAnimation } = useCounterAnimation(end, 2000);
    const [ref, isVisible] = useScrollReveal({ threshold: 0.3, once: true });

    useEffect(() => {
      if (isVisible && count === 0) {
        startAnimation();
      }
    }, [isVisible, count, startAnimation]);

    return (
      <span ref={ref} className="text-4xl lg:text-5xl font-sans font-extrabold text-cyan-400 tabular-nums tracking-tighter block mb-1">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="bg-[#0B0F19] text-gray-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      <Helmet>
        <title>Sivaraa Infotech | Immersive PropTech & 360° Studio</title>
        <meta name="description" content="Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure." />
      </Helmet>

      <Header />

      {/* ========================================================================= */}
      {/* 1. HERO PARALLAX SECTION                                                 */}
      {/* ========================================================================= */}
      <section ref={containerRef} className="relative h-[180vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          <motion.div style={{ scale: aerialScale, opacity: aerialOpacity }} className="absolute inset-0 w-full h-full z-0">
            <img 
              src="https://images.pexels.com/photos/19227282/pexels-photo-19227282.jpeg" 
              alt="Aerial Real Estate" 
              className="w-full h-full object-cover brightness-[0.45]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-transparent to-[#0B0F19]" />
          </motion.div>

          <motion.div style={{ scale: cameraScale, opacity: cameraOpacity, x: lensZoomX }} className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={hero1} alt="Premium Camera Lens Setup" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div style={{ y: textY }} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
            <div className="min-h-[120px] flex items-center justify-center mb-2">
              {heroPhase === 0 && (
                <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight">
                  {displayedText}<span className="text-cyan-400 animate-pulse ml-1">|</span>
                </motion.h1>
              )}
              {heroPhase === 1 && (
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl lg:text-6xl font-black text-cyan-400 leading-tight tracking-tight">
                  Zooming Through Innovation
                </motion.h1>
              )}
              {heroPhase === 2 && (
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  Unveiling the Aerial Blueprint
                </motion.h1>
              )}
            </div>

            <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto tracking-wide drop-shadow-md">
              Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div ref={btnRef1} animate={{ x: pos1.x, y: pos1.y }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black rounded-full px-6 py-5 text-sm font-bold shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">
                  <Link to="/portfolio" className="flex items-center">Explore Portfolio</Link>
                </Button>
              </motion.div>
              <motion.div ref={btnRef2} animate={{ x: pos2.x, y: pos2.y }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-md hover:bg-white text-white hover:text-black rounded-full px-6 py-5 text-sm font-semibold border-white/20 hover:border-white transition-all">
                  <Link to="/crm-software">Schedule Demo</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-20">
            <ChevronDown className="w-5 h-5 animate-bounce text-cyan-400" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTRO SECTION                                                         */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] text-gray-900 relative z-20 overflow-hidden -mt-2">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50/40 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div style={{ y: yIntroText }} className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/80 shadow-sm">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span className="text-gray-800 font-extrabold tracking-widest text-[9px] uppercase">Next-Gen PropTech Ecosystem</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-tight">
                Engineering <br />Immersive Reality <br />
                <span className="relative inline-block mt-1">
                  <span className="absolute inset-x-0 bottom-1 h-2 bg-cyan-100 -z-10" />
                  For Modern Real Estate
                </span>
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                At Sivaraa Infotech, we blend flawless architectural precision with cinematic spatial artistry and intelligent software engineering. We construct full-scale interactive digital twins that empower decision-making.
              </p>

              <div className="pt-2">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl px-6 py-5 text-xs font-bold shadow-md shadow-cyan-600/20 transition-all">
                  <Link to="/services">Explore Structural Solutions</Link>
                </Button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Interactive 360° Tours', desc: 'Photorealistic VR-ready walkthroughs with smart live hotspots.', icon: Camera, bg: 'bg-cyan-950 text-white' },
                { title: 'Smart Plot Architecture', desc: 'Geographic layout maps syncing real-time availability workflows.', icon: Focus, bg: 'bg-cyan-950 text-white' },
                { title: 'Proprietary CRM Engines', desc: 'Centralized lead ecosystems built to monitor sales speed.', icon: Database, bg: 'bg-cyan-950 text-white' },
                { title: 'Cinematic Drone Matrix', desc: 'High-fidelity FPV aerial contexts and property boundary maps.', icon: Video, bg: 'bg-cyan-950 text-white' }
              ].map((item, i) => {
                const IconComponent = item.icon;
                const isDark = item.bg.includes('cyan-950');
                return (
                  <div key={i} className={`p-6 rounded-xl border ${isDark ? 'border-transparent' : 'border-gray-200/70'} ${item.bg} shadow-md flex flex-col justify-between h-48 hover:border-cyan-500/30 transition-all duration-300 group`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-cyan-500 text-cyan-950' : 'bg-gray-50 text-gray-700 group-hover:bg-cyan-50 group-hover:text-cyan-600'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`font-black text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className={`text-[11px] mt-1 leading-relaxed ${isDark ? 'text-cyan-200/70' : 'text-gray-500'}`}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INDUSTRIES EMPOWERED SECTION                                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-14 bg-gradient-to-b from-white via-cyan-50/40 to-white relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto font-medium">
              Delivering immersive digital experiences across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-xl shadow-sm border border-slate-100 bg-white ${
                  index === 3 || index === 6 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="w-full h-48 sm:h-52 overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:from-cyan-950/90" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white text-base font-bold tracking-wide group-hover:text-cyan-300 transition-colors duration-200">
                    {industry.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
      {/* ========================================================================= */}
      {/* 5. STATS COUNTER SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="py-12 relative overflow-hidden bg-cyan-950 text-white border-y border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-white/5 items-center text-center">
            <div className="pt-2 md:pt-0"><Counter end={100} suffix="+" /><p className="font-bold tracking-widest text-[9px] uppercase text-cyan-500/80 mt-0.5">Projects Delivered</p></div>
            <div className="pt-2 md:pt-0"><Counter end={50} suffix="+" /><p className="font-bold tracking-widest text-[9px] uppercase text-cyan-500/80 mt-0.5">Happy Clients</p></div>
            <div className="pt-2 md:pt-0"><Counter end={5} suffix="+" /><p className="font-bold tracking-widest text-[9px] uppercase text-cyan-500/80 mt-0.5">Years of Innovation</p></div>
            <div className="pt-2 md:pt-0"><Counter end={100} suffix="%" /><p className="font-bold tracking-widest text-[9px] uppercase text-cyan-500/80 mt-0.5">Satisfaction</p></div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED MASTERPIECES SECTION                                         */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#0B0F19] text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6 border-b border-white/5 pb-6">
            <div className="text-center sm:text-left">
              <span className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-1 block">Curated Work</span>
              <h2 className="text-3xl font-black tracking-tight text-white">Featured Projects</h2>
            </div>
            
            {/* INLINED FIXED DARK-MODE TAB FILTER COMPONENT */}
            <div className="flex items-center justify-center bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shadow-2xl max-w-full overflow-x-auto">
              <div className="flex flex-wrap sm:flex-nowrap gap-1">
                {categories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`
                        relative
                        px-4
                        py-2
                        rounded-lg
                        text-xs
                        font-bold
                        tracking-wide
                        transition-colors
                        duration-300
                        whitespace-nowrap
                        ${isActive ? 'text-black font-extrabold' : 'text-slate-400 hover:text-white'}
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="homeActiveFilter"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 block">
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {projects
              .filter(p => p.category === activeTab)
              .map((proj, i) => (
                <motion.div 
                  key={proj.id} 
                  layout 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-slate-900 to-slate-950/60 p-2 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <ProjectCard 
                    {...proj} 
                    delay={i * 0.04} 
                    onViewTour={() => openTour(proj)} 
                  />
                </motion.div>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-xl px-8 py-5 text-xs font-bold transition-all">
              <Link to="/portfolio">Explore Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE CALL TO ACTION (CTA) SECTION                              */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-cyan-950 to-slate-950 text-white z-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
            
            <div className="lg:col-span-8 space-y-2">
              <span className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase block">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Ready to Transform <br className="hidden md:block"/>Property Marketing?
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-end">
              <Button asChild size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 rounded-xl px-6 py-5 text-xs font-bold shadow-md transition-all w-full text-center">
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 text-white border-white/10 hover:bg-white/10 rounded-xl px-6 py-5 text-xs font-semibold transition-all w-full text-center">
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INTERACTIVE PORTFOLIO VIRTUAL TOUR DIALOG MODAL                       */}
      {/* ========================================================================= */}
      {showTourModal && selectedTour && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-[1400px] h-[85vh] rounded-2xl overflow-hidden bg-slate-950 border border-white/5 shadow-2xl">
            
            <div className="absolute top-4 left-4 z-40 flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/5 text-white backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h2 className="text-xs font-black text-slate-100 leading-none uppercase tracking-wide">
                  {selectedTour.title}
                </h2>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">
                  {selectedTour.client}
                </p>
              </div>
            </div>

            <button
              onClick={closeTour}
              className="absolute top-4 right-4 z-50 w-8 h-8 rounded-lg bg-slate-900 border border-white/5 text-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-xs"
            >
              ✕
            </button>

            <iframe
              src={selectedTour.tourUrl}
              title={selectedTour.title}
              className="w-full h-full bg-slate-950"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default HomePage;