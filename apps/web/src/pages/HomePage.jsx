import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
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
import hero1 from "@/assets/images/hero1.png";
import ind42 from "@/assets/images/ind4.png";
import { 
  Building2, Map, Home, Hotel, GraduationCap, Calendar, 
  Camera, Database, Focus, Video, Layers, Users, ArrowRight, ChevronDown 
} from 'lucide-react';

// Portfolio Image Asset Registries
import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";
import w5 from "@/assets/images/w5.png";
import w6 from "@/assets/images/w6.png";
import w7 from "@/assets/images/w7.png";
import w8 from "@/assets/images/w8.png";
import w9 from "@/assets/images/w9.png";
import w10 from "@/assets/images/w10.png";
import w11 from "@/assets/images/w11.png";
import w12 from "@/assets/images/w12.png";
import w13 from "@/assets/images/w13.png";
import w14 from "@/assets/images/w14.png";
import w15 from "@/assets/images/w15.png";
import w16 from "@/assets/images/w16.png";
import w17 from "@/assets/images/w17.png";
import w18 from "@/assets/images/w18.png";
import w19 from "@/assets/images/w19.png";
import w20 from "@/assets/images/w20.png";

// Industry Theme Image Asset Registries
import ind3 from "@/assets/images/ind3.png";
import ind4 from "@/assets/images/ind4.png";
import ind5 from "@/assets/images/ind5.png";
import ind6 from "@/assets/images/ind6.png";

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
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'plotting', label: 'Plotting Projects' },
    { value: 'interior', label: 'Interior Design' },
    { value: 'expo', label: 'Exhibitions & Expo' },
    { value: 'government', label: 'Government' }
  ];

  // Master Portfolio Pool
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

  // Micro-component for counter wrapper
  const Counter = ({ end, suffix }) => {
    const { count, startAnimation } = useCounterAnimation(end, 2000);
    const [ref, isVisible] = useScrollReveal({ threshold: 0.3, once: true });

    useEffect(() => {
      if (isVisible && count === 0) {
        startAnimation();
      }
    }, [isVisible, count, startAnimation]);

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

      {/* ========================================================================= */}
      {/* 1. HERO PARALLAX SECTION                                                  */}
      {/* ========================================================================= */}
      <section ref={containerRef} className="relative h-[250vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Phase 2: Aerial View Layer */}
          <motion.div 
            style={{ scale: aerialScale, opacity: aerialOpacity }} 
            className="absolute inset-0 w-full h-full z-0"
          >
            <img 
              src="https://images.pexels.com/photos/19227282/pexels-photo-19227282.jpeg" 
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
              src={hero1}
              alt="Premium Camera Lens Setup"
              className="w-full h-full object-cover transform transition-transform duration-300"
            />
          </motion.div>
          
          {/* Core Interactive Messaging Layout overlay */}
          <motion.div style={{ textY }} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
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
      {/* --- END HERO PARALLAX SECTION --- */}


      {/* ========================================================================= */}
      {/* 2. INTRO SECTION (LIGHT CAROUSEL & CONTENT UI)                            */}
      {/* ========================================================================= */}
      <section className="py-28 bg-white text-gray-900 relative z-20 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Content Presentation Layout */}
            <motion.div style={{ y: yIntroText }} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-cyan-700 font-bold tracking-wider text-xs uppercase">Next-Gen PropTech Ecosystem</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Engineering Immersive Reality <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  For Modern Real Estate
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
                At Sivaraa Infotech, we blend flawless architectural precision with cinematic spatial artistry and intelligent software engineering. We don't just display layouts—we construct full-scale interactive digital twins that empower decision-making.
              </p>
              
              {/* Feature Grid Framework */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-8">
                {[
                  { title: 'Interactive 360° Tours', desc: 'Photorealistic VR-ready walkthroughs with smart live hotspots.', icon: Camera },
                  { title: 'Smart Plot Architecture', desc: 'Geographic layout maps syncing real-time availability workflows.', icon: Focus },
                  { title: 'Proprietary CRM Engines', desc: 'Centralized lead ecosystems built to monitor sales speed.', icon: Database },
                  { title: 'Cinematic Drone Matrix', desc: 'High-fidelity FPV aerial contexts and property boundary maps.', icon: Video }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-cyan-50/30 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100/80 flex items-center justify-center text-cyan-600 flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Button asChild className="bg-[#0B0F19] hover:bg-[#1A2338] text-white rounded-full px-8 py-6 font-semibold shadow-xl hover:shadow-cyan-900/10 transition-all transform active:scale-95">
                  <Link to="/services">Explore Structural Solutions</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Automated Smooth Image Slider */}
            <motion.div style={{ y: yIntroImg }} className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px]">
              {/* Ambient Depth Orbs */}
              <div className="absolute -inset-6 bg-cyan-200/40 blur-3xl rounded-full z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-dashed border-gray-200/60 rounded-3xl pointer-events-none z-0 animate-[spin_120s_linear_infinite]" />
              
              {/* Master Carousel Box Component Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xl bg-gray-900 z-10 group">
                <IntroCarouselImages />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* --- END INTRO SECTION --- */}


      {/* ========================================================================= */}
      {/* 3. INDUSTRIES EMPOWERED SECTION (DARK UI)                                 */}
      {/* ========================================================================= */}
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
      {/* --- END INDUSTRIES EMPOWERED SECTION --- */}


      {/* ========================================================================= */}
      {/* 4. SERVICES MATRIX SECTION (LIGHT UI)                                     */}
      {/* ========================================================================= */}
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
      {/* --- END SERVICES MATRIX SECTION --- */}


      {/* ========================================================================= */}
      {/* 5. STATS COUNTER SECTION                                                 */}
      {/* ========================================================================= */}
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
      {/* --- END STATS COUNTER SECTION --- */}


      {/* ========================================================================= */}
      {/* 6. FEATURED MASTERPIECES SECTION (DARK UI)                                */}
      {/* ========================================================================= */}
      <section className="py-28 bg-[#0B0F19] text-white relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-extrabold tracking-widest text-xs uppercase mb-2 block">Curated Work</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-8">Featured Masterpieces</h2>
            <div className="inline-block bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
              <FilterTabs categories={categories} activeCategory={activeTab} onCategoryChange={setActiveTab} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects
              .filter(p => p.category === activeTab)
              .map((proj, i) => (
                <motion.div 
                  key={proj.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.93 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-3xl border border-cyan-500/5 bg-slate-900/40 p-1 hover:border-cyan-400/30 transition-all duration-500"
                >
                  <ProjectCard 
                    {...proj} 
                    delay={i * 0.05} 
                    onViewTour={() => openTour(proj)} 
                  />
                </motion.div>
              ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="border-white/10 hover:border-cyan-400 text-white hover:bg-cyan-500 hover:text-black rounded-full px-8 py-6 font-semibold transition-all shadow-sm">
              <Link to="/portfolio">Explore More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* --- END FEATURED MASTERPIECES SECTION --- */}


      {/* ========================================================================= */}
      {/* 7. INTERACTIVE CALL TO ACTION (CTA) SECTION                              */}
      {/* ========================================================================= */}
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
            <Button asChild size="lg" className="bg-white text-cyan-950 hover:bg-cyan-400 hover:text-black rounded-full px-10 py-7 text-base font-bold shadow-xl transform scale-105 active:scale-[0.98] transition-all">
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 rounded-full px-10 py-7 text-base font-semibold transition-all">
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* --- END INTERACTIVE CALL TO ACTION (CTA) SECTION --- */}


      {/* ========================================================================= */}
      {/* 8. INTERACTIVE PORTFOLIO VIRTUAL TOUR DIALOG MODAL                        */}
      {/* ========================================================================= */}
      {showTourModal && selectedTour && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3">
          <div className="relative w-full max-w-[1700px] h-[95vh] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            
            {/* Information Header Block */}
            <div className="absolute top-4 left-4 z-40 flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-white backdrop-blur-md shadow-lg">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <h2 className="text-sm font-bold text-slate-100 leading-none">
                  {selectedTour.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedTour.client}
                </p>
              </div>
            </div>

            {/* Modal Exit Action Control */}
            <button
              onClick={closeTour}
              className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-slate-900 border border-slate-800 text-slate-200 shadow-lg flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:border-red-600 hover:text-white transition-all duration-300"
            >
              ✕
            </button>

            {/* Panoramic Frame Presentation Viewport */}
            <iframe
              src={selectedTour.tourUrl}
              title={selectedTour.title}
              className="w-full h-full bg-slate-950"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {/* --- END VIRTUAL TOUR DIALOG MODAL --- */}

      <Footer />
    </div>
  );
}

// ========================================================================= 
// SUB-COMPONENT: REFACTORED SECURE CAROUSEL IMAGE LAYER                     
// ========================================================================= 
function IntroCarouselImages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1649402265028-897cef6fb977?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(sliderTimer);
  }, [slides.length]);

  return (
    <>
      {slides.map((src, index) => {
        if (index !== currentSlide) return null;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={src} 
              alt={`Property Presentation Slide ${index + 1}`} 
              className="w-full h-full object-cover brightness-[0.9]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent mix-blend-multiply" />
          </motion.div>
        );
      })}

      {/* Pagination Dot Markers Tracker Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentSlide(dotIndex)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              dotIndex === currentSlide ? "w-6 bg-cyan-400" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Navigate to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;