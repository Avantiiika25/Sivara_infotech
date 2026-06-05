
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import DemoRequestForm from '@/components/DemoRequestForm';
import FeatureCard from '@/components/FeatureCard';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { CheckCircle2, Box, Users, CreditCard, LayoutDashboard, Globe } from 'lucide-react';

function CRMSoftwarePage() {
  const { displayedText } = useTypingEffect('The Intelligent Plot Management Ecosystem', 50);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const features = [
    { icon: Globe, title: 'Integrated Booking Website', description: 'Whitelabel consumer portal synced with your inventory.' },
    { icon: Box, title: 'Smart Inventory Management', description: 'Real-time color-coded plot availability.' },
    { icon: Users, title: 'Lead Automation', description: 'Auto-assign leads from Facebook/Google to agents.' },
    { icon: CreditCard, title: 'Payment Tracking', description: 'EMI schedules, receipts, and payment gateway integration.' },
    { icon: LayoutDashboard, title: 'Agent Dashboard', description: 'Dedicated portal for agents to track follow-ups.' },
    { icon: Users, title: 'Client Follow-up', description: 'Automated SMS and email reminders.' }
  ];

  return (
    <>
      <Helmet>
        <title>Plot Management CRM | Sivaraa Infotech</title>
        <meta name="description" content="All-in-One Platform for Real Estate Plot Management & Sales." />
      </Helmet>

      <Header />

      <section className="relative pt-40 pb-32 overflow-hidden bg-primary text-white text-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-30 scale-110 mix-blend-overlay"
          >
            <source src="https://cdn.pixabay.com/video/2020/03/19/33909-399932780_large.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6 min-h-[120px] md:min-h-[80px] font-heading leading-tight">
            {displayedText}<span className="text-white animate-pulse">|</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-blue-100 font-medium mb-10">
            All-in-One Platform for Real Estate Plot Management & Sales.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Everything You Need to Scale</h2>
              <ul className="space-y-6">
                {['Online Plot Booking System', 'Intelligent Lead Management', 'Agent Performance Dashboard', 'EMI & Loan Tracking', 'Role-based Access Control', 'Automated Reports & Analytics'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-muted rounded-3xl" />
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
              >
                <img src="https://images.unsplash.com/photo-1562155558-86d95c70d453" alt="CRM Dashboard" className="w-full h-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Core Modules</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Investment Plans</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <PricingCard title="Starter" price="₹49,999" period="one-time" features={['Up to 100 plots', 'Basic lead management', 'Single agent dashboard', 'Standard website']} isPopular={false} delay={0.1} />
            <PricingCard title="Growth" price="₹99,999" period="one-time" features={['Up to 500 plots', 'Advanced lead management', 'Multiple agents', 'Premium website with 360°', 'Payment gateway']} isPopular={true} delay={0.2}/>
            <PricingCard title="Enterprise" price="Custom" features={['Unlimited plots', 'Full CRM suite', 'Unlimited agents', 'Custom API integrations', 'White-label']} isPopular={false} delay={0.3}/>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-4">Request a Demo</h2>
            <p className="text-lg text-muted-foreground font-medium">See how our CRM can transform your real estate operations.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <DemoRequestForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CRMSoftwarePage;
