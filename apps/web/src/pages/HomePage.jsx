
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustryCard from '@/components/IndustryCard';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
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
  const { displayedText } = useTypingEffect('Immersive Digital Experiences for Modern Real Estate', 60);
  const [activeTab, setActiveTab] = useState('residential');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

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
    { image: 'https://images.unsplash.com/photo-1608152910023-8e0fc76bdfe5', title: 'The Sapphire Residences', category: 'residential', client: 'Apex Developers', description: 'A complete 360° walkthrough of a luxury penthouse.' },
    { image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef', title: 'Verde Valley Estates', category: 'plotting', client: 'Green Earth', description: 'Drone mapping and interactive CRM integration for 200+ plots.' },
    { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c', title: 'Nexus Tech Park', category: 'commercial', client: 'Nexus Corp', description: 'Commercial office space virtual presentation.' }
  ];

  const Counter = ({ end, suffix }) => {
    const { count, startAnimation } = useCounterAnimation(end, 2000);
    const [ref, isVisible] = useScrollReveal({ threshold: 0.5, once: true });
    
    if (isVisible && count === 0) startAnimation();

    return (
      <span ref={ref} className="text-5xl lg:text-7xl font-heading font-bold text-primary tabular-nums tracking-tighter">
        {count}{suffix}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>Sivaraa Infotech | Immersive PropTech & 360° Studio</title>
        <meta name="description" content="Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover scale-110"
            poster="https://images.unsplash.com/photo-1590077112998-1c74ba433063"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40131-424917415_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(30,58,95,0.8)]"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random() * 0.5 + 0.2
                }}
                animate={{ 
                  y: [null, Math.random() * -100 - 50],
                  opacity: [null, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto font-heading">
              {displayedText}
              <span className="text-white animate-pulse ml-1">|</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
              Transforming property marketing through intelligent virtual experiences, immersive tours and smart digital infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.div ref={btnRef1} animate={{ x: pos1.x, y: pos1.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-7 text-lg font-semibold shadow-[0_0_20px_rgba(30,58,95,0.4)] transition-all active:scale-[0.98] group">
                  <Link to="/portfolio">Explore Portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </motion.div>
              <motion.div ref={btnRef2} animate={{ x: pos2.x, y: pos2.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-primary rounded-lg px-8 py-7 text-lg font-semibold border-white/30 transition-all active:scale-[0.98]">
                  <Link to="/crm-software">Schedule Demo</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white relative z-10 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
              <img src="https://images.unsplash.com/photo-1649402265028-897cef6fb977" alt="Immersive Technology Showcase" className="relative rounded-3xl border border-gray-200 shadow-2xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">The Future of Property Presentation Starts Here</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                We blend architectural precision with cinematic artistry and robust software engineering. Sivaraa Infotech delivers end-to-end digital twins and CRM ecosystems that turn passive viewers into active buyers.
              </p>
              <ul className="space-y-4 mb-10">
                {['Interactive 360° Virtual Tours', 'Smart Plot Visualization', 'Real-Time CRM Intelligence', 'Drone Cinematic Mapping', 'Data-Driven Conversion Tools'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground font-semibold"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary"><CheckCircle2Icon className="w-4 h-4" /></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 font-semibold shadow-md">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Industries We Empower</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Tailored immersive experiences across diverse sectors.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => <IndustryCard key={i} {...ind} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Immersive Solutions</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Button asChild variant="outline" className="border-gray-200 text-foreground hover:bg-muted rounded-lg font-semibold group">
                <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, i) => (
              <ServiceCard key={i} {...srv} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div><Counter end={100} suffix="+" /><p className="mt-4 font-semibold uppercase tracking-wider text-sm opacity-90">Projects Delivered</p></div>
            <div><Counter end={40} suffix="+" /><p className="mt-4 font-semibold uppercase tracking-wider text-sm opacity-90">Happy Clients</p></div>
            <div><Counter end={5} suffix="+" /><p className="mt-4 font-semibold uppercase tracking-wider text-sm opacity-90">Years Innovation</p></div>
            <div><Counter end={98} suffix="%" /><p className="mt-4 font-semibold uppercase tracking-wider text-sm opacity-90">Client Satisfaction</p></div>
          </div>
        </div>
      </section>
      

      {/* Featured Projects */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Featured Masterpieces</h2>
            <FilterTabs categories={categories} activeCategory={activeTab} onCategoryChange={setActiveTab} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.filter(p => activeTab === 'residential' ? true : p.category === activeTab).map((proj, i) => (
              <ProjectCard key={i} {...proj} delay={i * 0.1} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="bg-white border border-gray-200 text-foreground hover:bg-muted rounded-lg px-8 py-6 font-semibold shadow-sm">
              <Link to="/portfolio">Explore Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y2 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-90 scale-110"
            poster="https://images.unsplash.com/photo-1620886217193-f229f77cde12"
          >
            <source src="https://cdn.pixabay.com/video/2016/09/21/5320-183786499_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-bold mb-8 text-glow-blue">
            Ready to Transform Property Marketing?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-10 py-7 text-lg font-semibold shadow-lg transition-all active:scale-[0.98]">
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary rounded-lg px-10 py-7 text-lg font-semibold border-white/30">
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function CheckCircle2Icon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
}

export default HomePage;
