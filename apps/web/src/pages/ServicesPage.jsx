
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessStep from '@/components/ProcessStep';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Search, PenTool, Video, Code2, CheckSquare, Rocket, Video as VideoIcon, Server, BarChart3, Headphones as HeadphonesIcon, Camera, Database, Map, Plane, Layers, Users } from 'lucide-react';

function ServicesPage() {
  const { displayedText } = useTypingEffect('Our Services', 50);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const deepServices = [
    { icon: Camera, title: '360° Virtual Experiences', description: 'High-fidelity panoramic tours.', features: ['4K/8K Capture', 'Virtual Staging', 'Web & Mobile Ready'], image: 'https://images.unsplash.com/photo-1619842799356-06c1c91c9d18' },
    { icon: Database, title: 'Plot Management CRM', description: 'Complete sales ecosystem for real estate.', features: ['Live Inventory', 'Lead Tracking', 'Payment Gateway'], image: 'https://images.unsplash.com/photo-1571832725367-7b7a782fe3aa' },
    { icon: Map, title: 'Interactive Smart Maps', description: 'Geospatial visualization of projects.', features: ['GIS Integration', 'Plot Availability', 'Custom POIs'], image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b' },
    { icon: Plane, title: 'Drone Cinematics', description: 'Aerial mapping and professional video.', features: ['4K Drone Video', 'Site Mapping', 'Progress Tracking'], image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Sivaraa Infotech</title>
        <meta name="description" content="Comprehensive immersive digital solutions for modern real estate. 360 tours, CRMs, Interactive Maps." />
      </Helmet>
      
      <Header />

      <section className="relative pt-40 pb-20 bg-muted overflow-hidden border-b border-gray-200 text-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-20 scale-110"
          >
            <source src="https://cdn.pixabay.com/video/2020/02/24/32888-394885655_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-muted via-transparent to-muted" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-heading">
            {displayedText}<span className="text-primary animate-pulse">|</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Comprehensive immersive digital solutions for modern real estate.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {deepServices.map((srv, i) => (
              <ServiceCard key={i} {...srv} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-muted-foreground font-medium">A streamlined workflow ensuring precision delivery.</p>
          </motion.div>
          <div className="space-y-4">
            <ProcessStep icon={Search} number="1" title="Discovery & Consultation" description="Understanding your unique property needs and defining the project scope." delay={0.1} />
            <ProcessStep icon={PenTool} number="2" title="Strategy & Planning" description="Formulating the capture plan, shot lists, and CRM architecture." delay={0.2} />
            <ProcessStep icon={Video} number="3" title="Capture & Production" description="On-site panoramic and drone capture with 8K precision." delay={0.3} />
            <ProcessStep icon={Code2} number="4" title="Development & Integration" description="Stitching imagery, building interactive maps, and coding the CRM backend." delay={0.4} />
            <ProcessStep icon={CheckSquare} number="5" title="Testing & Optimization" description="Rigorous QA across devices, ensuring smooth WebGL rendering and zero bugs." delay={0.5} />
            <ProcessStep icon={Rocket} number="6" title="Launch & Support" isLast description="Deployment to production servers and ongoing technical support." delay={0.6} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center text-foreground">Additional Services</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={VideoIcon} title="Event Coverage" description="Digital documentation of corporate events." delay={0.1} />
            <FeatureCard icon={Server} title="API Integration" description="Connecting our tools with your existing stack." delay={0.2} />
            <FeatureCard icon={BarChart3} title="Analytics Dashboard" description="Deep insights into virtual tour traffic." delay={0.3} />
            <FeatureCard icon={HeadphonesIcon} title="24/7 Support" description="Dedicated maintenance and troubleshooting." delay={0.4} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
