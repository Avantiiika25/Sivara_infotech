import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessStep from '@/components/ProcessStep';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import { useTypingEffect } from '@/hooks/useTypingEffect';

import {
  Search,
  PenTool,
  Video,
  Code2,
  CheckSquare,
  Rocket,
  Video as VideoIcon,
  Server,
  BarChart3,
  Headphones as HeadphonesIcon,
  Camera,
  Database,
  Map,
  Plane,
  ArrowRight
} from 'lucide-react';

function ServicesPage() {
  const { displayedText } = useTypingEffect('Our Services', 50);

  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const blob1 = useTransform(scrollY, [0, 1200], [0, -150]);
  const blob2 = useTransform(scrollY, [0, 1200], [0, 150]);

  const deepServices = [
    {
      icon: Camera,
      title: '360° Virtual Experiences',
      description: 'High-fidelity panoramic tours and immersive walkthroughs.',
      features: [
        '4K/8K Capture',
        'Virtual Staging',
        'Web & Mobile Ready'
      ],
      image:
        'https://images.unsplash.com/photo-1619842799356-06c1c91c9d18'
    },
    {
      icon: Database,
      title: 'Plot Management CRM',
      description: 'Complete sales ecosystem for modern real estate businesses.',
      features: [
        'Live Inventory',
        'Lead Tracking',
        'Payment Gateway'
      ],
      image:
        'https://images.unsplash.com/photo-1571832725367-7b7a782fe3aa'
    },
    {
      icon: Map,
      title: 'Interactive Smart Maps',
      description: 'Visualize and manage properties with intelligent mapping.',
      features: [
        'GIS Integration',
        'Plot Availability',
        'Custom POIs'
      ],
      image:
        'https://images.unsplash.com/photo-1524661135-423995f22d0b'
    },
    {
      icon: Plane,
      title: 'Drone Cinematics',
      description: 'Professional aerial mapping and cinematic footage.',
      features: [
        '4K Drone Video',
        'Site Mapping',
        'Progress Tracking'
      ],
      image:
        'https://images.unsplash.com/photo-1508614589041-895b88991e3e'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Sivaraa Infotech</title>

        <meta
          name="description"
          content="Immersive digital solutions including virtual tours, CRM systems, drone mapping, GIS solutions and branding."
        />
      </Helmet>

      <Header />

      {/* HERO SECTION */}

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-cyan-950 flex items-center justify-center">

        {/* Animated Blobs */}

        <motion.div
          style={{ y: blob1 }}
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
          className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          style={{ y: blob2 }}
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
          className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[120px]"
        />

        {/* Video Background */}

        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 scale-110"
          >
            <source
              src="https://cdn.pixabay.com/video/2020/02/24/32888-394885655_large.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm tracking-widest uppercase">
              Digital Innovation
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              {displayedText}
              <span className="text-cyan-400 animate-pulse">|</span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
              Creating immersive digital experiences through
              Virtual Tours, Smart Maps, Drone Technology,
              CRM Platforms and Enterprise Solutions.
            </p>
          </motion.div>
                  </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="relative py-28 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              What We Offer
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4">
              Premium Digital Solutions
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-lg">
              We combine immersive technology, digital transformation,
              mapping intelligence, and software solutions to help
              businesses grow faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {deepServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15
                }}
              >
                <ServiceCard
                  {...service}
                  delay={index * 0.15}
                />
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}

      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950">

        {/* Glow Background */}

        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8
            }}
            className="text-center mb-24"
          >
            <span className="text-cyan-400 font-semibold tracking-widest uppercase">
              Workflow
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
              Our Process
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-slate-400 text-lg">
              A refined system built for precision,
              speed, scalability and flawless execution.
            </p>
          </motion.div>

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent hidden md:block"></div>

            <ProcessStep
              icon={Search}
              number="1"
              title="Discovery & Consultation"
              description="Understanding your project goals, business objectives and technical requirements."
              delay={0.1}
            />

            <ProcessStep
              icon={PenTool}
              number="2"
              title="Strategy & Planning"
              description="Designing the roadmap, workflow structure and implementation plan."
              delay={0.2}
            />

            <ProcessStep
              icon={Video}
              number="3"
              title="Capture & Production"
              description="Executing panoramic photography, drone mapping and content production."
              delay={0.3}
            />

            <ProcessStep
              icon={Code2}
              number="4"
              title="Development & Integration"
              description="Building platforms, CRM systems, interactive experiences and smart maps."
              delay={0.4}
            />

            <ProcessStep
              icon={CheckSquare}
              number="5"
              title="Testing & Optimization"
              description="Performance testing, QA verification and user experience refinement."
              delay={0.5}
            />

            <ProcessStep
              icon={Rocket}
              number="6"
              title="Launch & Growth"
              description="Deployment, monitoring, analytics and ongoing support."
              isLast
              delay={0.6}
            />

          </div>

        </div>
      </section>
            {/* ADDITIONAL SERVICES */}

      <section className="relative py-28 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 blur-3xl rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 blur-3xl rounded-full opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              More Solutions
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900">
              Additional Services
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-lg">
              Beyond virtual tours and CRM solutions, we provide
              complete digital infrastructure for businesses and
              real estate developers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <FeatureCard
              icon={VideoIcon}
              title="Event Coverage"
              description="Professional event photography, videography and digital documentation."
              delay={0.1}
            />

            <FeatureCard
              icon={Server}
              title="API Integration"
              description="Connect your CRM, website and applications seamlessly."
              delay={0.2}
            />

            <FeatureCard
              icon={BarChart3}
              title="Analytics Dashboard"
              description="Track user engagement, lead generation and project performance."
              delay={0.3}
            />

            <FeatureCard
              icon={HeadphonesIcon}
              title="24/7 Support"
              description="Dedicated technical assistance and continuous maintenance."
              delay={0.4}
            />

          </div>

        </div>
      </section>

      {/* PREMIUM CTA */}

      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-slate-950 to-cyan-950">

        {/* Animated Glow Effects */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
          className="absolute top-10 left-20 w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
          className="absolute bottom-10 right-20 w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[120px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">

          <motion.div
            initial={{
              opacity: 0,
              y: 60
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8
            }}
          >

            <span className="px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 uppercase tracking-widest text-sm">
              Let's Build Together
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready To Transform
              <br />
              Your Digital Presence?
            </h2>

            <p className="mt-8 text-slate-300 text-lg max-w-3xl mx-auto">
              From immersive virtual tours to enterprise-grade CRM systems,
              Sivaraa Infotech helps businesses create modern digital
              experiences that drive engagement and growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <motion.a
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-cyan-500
                  text-white
                  font-semibold
                  shadow-[0_0_30px_rgba(6,182,212,0.4)]
                  hover:bg-cyan-400
                  transition-all
                "
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                href="/portfolio"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  border
                  border-cyan-400/40
                  text-cyan-300
                  font-semibold
                  hover:bg-cyan-500/10
                  transition-all
                "
              >
                View Portfolio
              </motion.a>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;