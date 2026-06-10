import React from 'react';
import { Helmet } from 'react-helmet';
import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion';
import heroVideo from '@/assets/videos/s1.mp4';
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
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Layers
} from 'lucide-react';

function ServicesPage() {

  const { displayedText } = useTypingEffect('Our Services', 50);

  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY,[0,1000],[0,250]);
  const blob1 = useTransform(scrollY,[0,1200],[0,-150]);
  const blob2 = useTransform(scrollY,[0,1200],[0,150]);

  const deepServices = [
    {
      icon: Camera,
      title: '360° Virtual Experiences',
      description:
        'High-fidelity panoramic tours and immersive walkthroughs.',
      video:
        'https://www.pexels.com/download/video/27965580/'
    },
    {
      icon: Database,
      title: 'Plot Management CRM',
      description:
        'Complete sales ecosystem for modern real estate businesses.',
      video:
        'https://www.pexels.com/download/video/30783663/'
    },
    {
      icon: Map,
      title: 'Interactive Smart Maps',
      description:
        'Visualize and manage properties with intelligent mapping.',
      video:
        'https://www.pexels.com/download/video/5220470/'
    },
    {
      icon: Plane,
      title: 'Drone Cinematics',
      description:
        'Professional aerial mapping and cinematic footage.',
      video:
        'https://www.pexels.com/download/video/12901480/'
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

        <motion.div
          style={{ y: blob1 }}
          animate={{
            x:[0,80,0],
            y:[0,-50,0]
          }}
          transition={{
            duration:12,
            repeat:Infinity
          }}
          className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          style={{ y: blob2 }}
          animate={{
            x:[0,-80,0],
            y:[0,50,0]
          }}
          transition={{
            duration:15,
            repeat:Infinity
          }}
          className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[120px]"
        />

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
    src={heroVideo}
    type="video/mp4"
  />
</video>
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

          <motion.div
            initial={{ opacity:0, y:80 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
          >

            <span className="px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm tracking-widest uppercase">
              Digital Innovation
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              {displayedText}
              <span className="text-cyan-400 animate-pulse">|</span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Creating immersive digital experiences through
              Virtual Tours, Smart Maps, Drone Technology,
              CRM Platforms and Enterprise Solutions.
            </p>

          </motion.div>

        </div>

      </section>

      {/* SMALL PREMIUM BANNER */}

      <section className="relative py-10 bg-black border-y border-cyan-500/20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {[
              {
                icon: Globe,
                title:'Global Reach'
              },
              {
                icon: Sparkles,
                title:'Premium Design'
              },
              {
                icon: ShieldCheck,
                title:'Enterprise Security'
              },
              {
                icon: Layers,
                title:'Scalable Solutions'
              }
            ].map((item,index)=>(

              <motion.div
                key={index}
                whileHover={{
                  y:-6,
                  scale:1.03
                }}
                className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-2xl p-5 flex items-center gap-4"
              >

                <item.icon className="w-8 h-8 text-cyan-400"/>

                <span className="text-white font-medium">
                  {item.title}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHAT WE OFFER */}

      <section className="relative py-20 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 blur-3xl opacity-40 rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 blur-3xl opacity-40 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          <motion.div
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8 }}
            className="text-center mb-14"
          >

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              What We Offer
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 text-slate-900">
              Premium Digital Solutions
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-slate-600">
              Technology, branding, mapping intelligence,
              automation and immersive digital experiences.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {deepServices.map((service,index)=>(

              <motion.div
                key={index}
                initial={{ opacity:0,y:80 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{
                  duration:0.8,
                  delay:index*0.15
                }}
                whileHover={{
                  y:-10
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  bg-black
                  border
                  border-cyan-500/20
                  shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
              >

                <div className="relative h-64 overflow-hidden">

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  >
                    <source src={service.video} />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                </div>

                <div className="p-7">

                  <service.icon className="w-10 h-10 text-cyan-400 mb-4"/>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300">
                    {service.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* PREMIUM PROCESS SECTION */}

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950">

        {/* Background Glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity
          }}
          className="absolute top-20 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <span className="text-cyan-400 tracking-[0.3em] uppercase text-sm font-semibold">
              Workflow
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
              Our Process
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-slate-400">
              Every project follows a proven workflow
              focused on speed, precision and growth.
            </p>

          </motion.div>

          {/* Timeline */}

          <div className="relative">

            {/* Animated Line */}

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeOut"
              }}
              className="
                hidden md:block
                absolute
                left-8
                top-0
                w-[3px]
                bg-gradient-to-b
                from-cyan-400
                via-cyan-500
                to-transparent
              "
            />

            {[
              {
                icon: Search,
                title: "Discovery & Consultation",
                desc: "Understanding business goals, customer journey and technical requirements."
              },
              {
                icon: PenTool,
                title: "Strategy & Planning",
                desc: "Creating a roadmap, architecture and execution framework."
              },
              {
                icon: Video,
                title: "Production & Content",
                desc: "Capturing drone footage, virtual tours and digital assets."
              },
              {
                icon: Code2,
                title: "Development",
                desc: "Building websites, CRM systems, portals and smart solutions."
              },
              {
                icon: CheckSquare,
                title: "Testing & Optimization",
                desc: "Ensuring flawless performance, speed and user experience."
              },
              {
                icon: Rocket,
                title: "Launch & Growth",
                desc: "Deployment, marketing integration and continuous scaling."
              }
            ].map((step, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
                className="
                  relative
                  flex
                  gap-5
                  md:gap-8
                  mb-8
                "
              >

                {/* Icon */}

                <div className="relative z-20">

                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(34,211,238,0)",
                        "0 0 30px rgba(34,211,238,0.5)",
                        "0 0 0px rgba(34,211,238,0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-black
                      border
                      border-cyan-500/30
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <step.icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </motion.div>

                </div>

                {/* Content */}

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02
                  }}
                  className="
                    flex-1
                    backdrop-blur-xl
                    bg-white/5
                    border
                    border-cyan-500/20
                    rounded-3xl
                    p-6
                    hover:border-cyan-400/50
                    hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]
                    transition-all
                    duration-500
                  "
                >

                  <span className="text-cyan-400 text-xs uppercase tracking-[0.3em]">
                    Step 0{index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ADDITIONAL SERVICES */}

      <section className="relative py-20 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 blur-3xl rounded-full opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >

            <span className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
              More Solutions
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900">
              Additional Services
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-slate-600">
              Complete digital ecosystem solutions
              designed to scale businesses faster.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: VideoIcon,
                title: "Event Coverage",
                desc: "Professional photography and cinematic videography."
              },
              {
                icon: Server,
                title: "API Integration",
                desc: "Connect platforms, CRM systems and applications."
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Track performance, leads and engagement."
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 Support",
                desc: "Dedicated support and ongoing maintenance."
              }
            ].map((item,index)=>(

              <motion.div
                key={index}
                initial={{
                  opacity:0,
                  y:40
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                viewport={{ once:true }}
                transition={{
                  duration:0.6,
                  delay:index*0.1
                }}
                whileHover={{
                  y:-8,
                  scale:1.03
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-black
                  border
                  border-cyan-500/20
                  p-7
                  group
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">

                  <div className="
                    w-16 h-16
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-500/20
                    flex items-center justify-center
                    mb-5
                  ">
                    <item.icon
                      size={30}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* STATS STRIP */}

      <section className="relative py-10 bg-black border-y border-cyan-500/20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {[
              { value:"100+", label:"Projects" },
              { value:"50+", label:"Clients" },
              { value:"24/7", label:"Support" },
              { value:"99%", label:"Success Rate" }
            ].map((item,index)=>(

              <motion.div
                key={index}
                whileHover={{ scale:1.05 }}
                className="p-4"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.label}
                </p>
              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* PREMIUM CTA */}

      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-slate-950 to-cyan-950">

        <motion.div
          animate={{
            x:[0,80,0],
            y:[0,-50,0]
          }}
          transition={{
            duration:10,
            repeat:Infinity
          }}
          className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x:[0,-80,0],
            y:[0,50,0]
          }}
          transition={{
            duration:12,
            repeat:Infinity
          }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[120px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

          <motion.div
            initial={{
              opacity:0,
              y:50
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{ once:true }}
            transition={{
              duration:0.8
            }}
          >

            <span className="
              inline-flex
              px-6
              py-2
              rounded-full
              border
              border-cyan-500/30
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-xs
            ">
              Let's Build Together
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready To Transform
              <br />
              Your Digital Presence?
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-slate-300 text-lg">
              From immersive virtual tours to enterprise CRM systems,
              we help brands create powerful digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <motion.a
                whileHover={{
                  scale:1.05
                }}
                whileTap={{
                  scale:0.95
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
                  shadow-[0_0_40px_rgba(6,182,212,0.4)]
                "
              >
                Start Your Project
                <ArrowRight size={18}/>
              </motion.a>

              <motion.a
                whileHover={{
                  scale:1.05
                }}
                whileTap={{
                  scale:0.95
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
                  border-cyan-500/30
                  text-cyan-300
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
