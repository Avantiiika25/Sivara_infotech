import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import ind1 from "@/assets/images/ind1.png";
import ind2 from "@/assets/images/ind2.png";
import ind3 from "@/assets/images/ind3.png";
import ind4 from "@/assets/images/ind4.png";
import ind5 from "@/assets/images/ind5.png";
import ind6 from "@/assets/images/ind6.png";
import ind7 from "@/assets/images/ind7.png";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import v2 from "../assets/videos/v2.mp4";
import v1 from "../assets/videos/v1.mp4";

import i1 from "@/assets/images/i1.png";
import {
  Eye,
  Target,
  Award,
  Lightbulb,
  HeartHandshake as Handshake,
  Heart,
  Camera,
  Database,
  Monitor,
  ShieldCheck,
} from "lucide-react";

 const industries = [
  {
    title: "Real Estate",
    image: ind1,
  },
  {
    title: "Education",
    image: ind2,
  },
  {
    title: "Healthcare",
    image: ind3,
  },
  {
    title: "Government Projects",
    image: ind4,
  },
  {
    title: "Retail",
    image: ind5,
  },
  {
    title: "Exhibitions",
    image: ind6,
  },
  {
    title: "Tourism & Hospitality",
    image: ind7,
  },
];

gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const [storyRef, storyVisible] = useScrollReveal();
  const { displayedText } = useTypingEffect(
    "Creating Immersive Digital Experiences",
    50
  );

  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <>
      <Helmet>
        <title>About Us | Sivaraa Infotech</title>
      </Helmet>

      <Header />

      {/* HERO SECTION */}

<section className="relative min-h-[82vh] lg:min-h-[88vh] overflow-hidden pt-28 md:pt-32">

  {/* Video Background */}

  <motion.video
    style={{ y: heroY }}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover scale-110"
  >
    <source src={v1} type="video/mp4" />
  </motion.video>

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-slate-950/85 to-[#02131F]/80" />

  {/* Animated Cyan Glow */}

  <motion.div
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
  />

  <motion.div
    animate={{
      scale: [1.1, 1.4, 1.1],
      opacity: [0.15, 0.4, 0.15],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
    }}
    className="absolute right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[120px]"
  />

  <div className="relative z-20 max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[75vh]">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6 backdrop-blur-lg">

          Premium 8K Virtual Tour Technology

        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">

          {displayedText}
          <span className="text-cyan-400 animate-pulse">|</span>

        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">

          India's leading immersive technology company delivering
          360° Virtual Tours, Drone Mapping and Interactive Digital Experiences.

        </p>

        {/* FEATURE BOXES */}

        <div className="flex flex-wrap gap-4">

          <div className="group px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-500">

            <h4 className="text-cyan-400 text-xl font-bold">
              8K
            </h4>

            <p className="text-sm text-slate-400">
              VR Capture
            </p>

          </div>

          <div className="group px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-500">

            <h4 className="text-cyan-400 text-xl font-bold">
              360°
            </h4>

            <p className="text-sm text-slate-400">
              Virtual Tours
            </p>

          </div>

          <div className="group px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-500">

            <h4 className="text-cyan-400 text-xl font-bold">
              Drone
            </h4>

            <p className="text-sm text-slate-400">
              Mapping
            </p>

          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE CAMERA */}

      <div className="relative flex justify-center items-center mt-10 lg:mt-0">

        {/* RING 1 */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[250px] md:w-[420px] h-[250px] md:h-[420px] rounded-full border border-cyan-400/20"
        />

        {/* RING 2 */}

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[200px] md:w-[340px] h-[200px] md:h-[340px] rounded-full border border-cyan-400/10"
        />

        {/* CAMERA REVEAL */}

        <motion.img
          src={i1}
          alt="Insta360 Pro 2 Camera"
          initial={{
            opacity: 0,
            y: 250,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            scale: 1,
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            opacity: {
              duration: 1.2,
            },
            y: {
              duration: 5,
              repeat: Infinity,
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
            },
            scale: {
              duration: 1.2,
            },
          }}
          className="relative z-20
          w-[220px]
          sm:w-[280px]
          md:w-[360px]
          lg:w-[450px]
          xl:w-[520px]
          object-contain
          drop-shadow-[0_0_60px_rgba(34,211,238,0.5)]"
        />

        {/* FLOATING INFO CARD */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="hidden md:block absolute top-12 right-0 bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-5 py-3"
        >

          <h4 className="text-cyan-300 font-semibold">
            Insta360 Pro 2
          </h4>

          <p className="text-xs text-slate-400">
            Professional 8K VR Camera
          </p>

        </motion.div>

        {/* FLOATING INFO CARD */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="hidden md:block absolute bottom-16 left-0 bg-black/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-5 py-3"
        >

          <h4 className="text-cyan-300 font-semibold">
            Spatial Capture
          </h4>

          <p className="text-xs text-slate-400">
            Immersive Digital Twin
          </p>

        </motion.div>

      </div>

    </div>

  </div>

  {/* BOTTOM FADE */}

  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/30 to-transparent" />

</section>
    {/* STORY SECTION */}

<section className="relative py-20 lg:py-24 overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071220] to-[#0D0D0D]" />

  {/* Cyan Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-16 items-center"
    >

      {/* VIDEO SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >

        {/* Glow */}
        <div className="absolute -inset-8 bg-cyan-500/10 blur-[100px] rounded-full" />

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[24px] border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.15)]"
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-[420px]
              md:h-[520px]
              lg:h-[620px]
              object-cover
            "
          >
            <source src={v2} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-cyan-500/5" />

        </motion.div>

      </motion.div>

      {/* CONTENT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:pl-4"
      >

        <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm mb-5">
          About Sivaraa Infotech
        </span>

        <h2
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-white
            leading-tight
            mb-6
          "
        >
          Creating Immersive
          <span className="block text-cyan-400">
            Digital Experiences
          </span>
        </h2>

        <p className="text-white/70 text-lg leading-relaxed mb-5">
          We help businesses showcase properties, campuses,
          exhibitions and destinations through premium
          virtual tours and digital experiences.
        </p>

        <p className="text-white/60 leading-relaxed mb-8">
          Combining 8K VR technology, web development,
          drone mapping and digital marketing into one
          complete solution.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            px-7
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            shadow-lg
            shadow-cyan-500/30
            hover:shadow-cyan-400/50
            transition-all
            duration-300
          "
        >
          View Portfolio
        </motion.button>

      </motion.div>

    </motion.div>

  </div>

</section>

     {/* MISSION & VISION - PREMIUM GLASSMORPHISM */}

<section className="relative py-24 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#07131d] via-[#0B1722] to-[#07131d]" />

  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">

    {/* Section Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <span className="inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-5">
        What Drives Us
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
        Mission & Vision
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto">
        Building immersive digital experiences that transform
        how businesses connect with people.
      </p>
    </motion.div>

    {/* Cards */}

    <div
      className="
      grid
      lg:grid-cols-2
      gap-8
      perspective-[1200px]
    "
    >

      {/* MISSION */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotateX: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.03,
          rotateY: -3,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >

        {/* Gradient Sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Animated Icon */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            w-20 h-20
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            flex items-center justify-center
            mb-8
          "
        >
          <Target className="w-10 h-10 text-cyan-400" />
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-5">
          Our Mission
        </h3>

        <p className="text-slate-300 leading-relaxed">
          To empower businesses with immersive virtual tours,
          aerial mapping, digital marketing and technology
          solutions that improve visibility, engagement and growth.
        </p>

      </motion.div>

      {/* VISION */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotateX: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        whileHover={{
          scale: 1.03,
          rotateY: 3,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >

        {/* Gradient Sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Animated Eye */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            w-20 h-20
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            flex items-center justify-center
            mb-8
          "
        >
          <Eye className="w-10 h-10 text-cyan-400" />
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-5">
          Our Vision
        </h3>

        <p className="text-slate-300 leading-relaxed">
          To become India's leading immersive technology company,
          transforming how organizations showcase spaces,
          experiences and opportunities in the digital world.
        </p>

      </motion.div>

    </div>

  </div>

</section>
{/* Featured Portfolio Showcase */}
<section className="relative py-20 md:py-28 bg-gradient-to-b from-cyan-50 via-white to-cyan-50 overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
        🌐 Portfolio Showcase
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Explore one of our large-scale interactive plotting and land
        development projects through a fully immersive 360° experience.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-6">
          Urban Sytes – Plot Layout Tours
        </h3>

        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          Experience an entire plotted development through a single
          immersive virtual tour. Users can navigate multiple plots,
          switch between locations, explore aerial perspectives,
          and understand the complete project from anywhere.
        </p>

        <div className="space-y-4">

          {[
            "Multiple Plots In One Interactive Tour",
            "Plot-by-Plot 360° Walkthroughs",
            "Drone Aerial Views & Mapping",
            "Integrated Digital Layout Navigation",
            "Smooth Navigation Between Sections",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-cyan-100 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                ✓
              </div>
              <span className="font-medium text-slate-700">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <span className="px-5 py-3 bg-cyan-600 text-white rounded-full font-medium">
            📍 Industry: Real Estate & Land Development
          </span>

          <a
            href="https://view.sivaraa360studio.com/group/Plotsnsk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-cyan-600 transition-all duration-300"
          >
            Explore Full Tour →
          </a>

        </div>
      </motion.div>

      {/* RIGHT IFRAME */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >

        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-[32px] blur-2xl opacity-30"></div>

        <div className="relative bg-white rounded-[28px] overflow-hidden shadow-2xl border border-cyan-100">

          <iframe
            src="https://view.sivaraa360studio.com/group/Plotsnsk"
            title="Urban Sytes Virtual Tour"
            className="w-full h-[350px] md:h-[500px] lg:h-[550px]"
            loading="lazy"
            allowFullScreen
          />

        </div>

      </motion.div>

    </div>
  </div>
</section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16"
          >
            Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Award}
              title="Excellence"
              description="Delivering premium quality in every project."
            />

            <FeatureCard
              icon={Lightbulb}
              title="Innovation"
              description="Constantly exploring new technologies."
            />

            <FeatureCard
              icon={Handshake}
              title="Trust"
              description="Building long-term client relationships."
            />

            <FeatureCard
              icon={Heart}
              title="Passion"
              description="Driven by creativity and customer success."
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}

<section className="relative py-24 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#04111f] to-[#020617]" />

  <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
  <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}n
      className="text-center mb-20"
    >
      <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
        Our Technology
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Technology Stack
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mt-5">
        Powered by immersive capture technology, cloud infrastructure,
        interactive experiences and enterprise-grade security.
      </p>
    </motion.div>

    {/* Floating Glass Layers */}

    <div className="grid lg:grid-cols-3 gap-8">

      {[
        {
          icon: Camera,
          title: "360° Cameras",
          subtitle: "Frontend Layer",
          text: "Professional 8K panoramic capture systems and immersive imaging.",
          glow: "cyan"
        },
        {
          icon: Monitor,
          title: "Virtual Tours",
          subtitle: "Experience Layer",
          text: "Interactive property walkthroughs and immersive web experiences.",
          glow: "violet"
        },
        {
          icon: Database,
          title: "Cloud Systems",
          subtitle: "Backend Layer",
          text: "Secure cloud infrastructure with scalable deployment architecture.",
          glow: "cyan"
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2,
            duration: 0.8
          }}
          animate={{
            y: [0, -15, 0]
          }}
          whileHover={{
            y: -20,
            scale: 1.03,
            rotateX: 8,
            rotateY: 5
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }
          }}
          className="group perspective-[1200px]"
        >

          <div
            className="
            relative
            h-full
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-10
            overflow-hidden
            transition-all
            duration-700
            group-hover:border-cyan-400/50
            group-hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
          "
          >

            {/* Isometric Glass Top Layer */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-56 h-56 bg-cyan-500/20 blur-[100px]" />

              <div className="absolute bottom-0 right-0 w-44 h-44 bg-violet-500/20 blur-[90px]" />

            </div>

            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500/20
              to-violet-500/20
              border
              border-cyan-400/20
              flex
              items-center
              justify-center
              mb-8
            "
            >
              <item.icon className="w-10 h-10 text-cyan-300" />
            </motion.div>

            <span className="text-cyan-400 text-sm uppercase tracking-widest">
              {item.subtitle}
            </span>

            <h3 className="text-3xl font-bold text-white mt-3 mb-4">
              {item.title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {item.text}
            </p>

            {/* Floating Dots */}
            <div className="absolute right-6 top-6 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse delay-200" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-500" />
            </div>

          </div>

        </motion.div>
      ))}

    </div>

    {/* Security Layer */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-12"
    >
      <div className="max-w-3xl mx-auto">

        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
          className="
          group
          relative
          rounded-[32px]
          border
          border-cyan-400/20
          bg-white/[0.04]
          backdrop-blur-2xl
          p-10
          overflow-hidden
          hover:border-cyan-400/50
          hover:shadow-[0_0_80px_rgba(34,211,238,0.2)]
          transition-all
          duration-700
        "
        >

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

          <div className="relative flex flex-col md:flex-row items-center gap-6">

            <ShieldCheck className="w-16 h-16 text-cyan-400" />

            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Data Security
              </h3>

              <p className="text-slate-400">
                Enterprise-grade protection, encrypted storage,
                cloud backups and secure infrastructure ensuring
                maximum reliability for every project.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </motion.div>

  </div>

</section>

     
{/* Industries */}
<section className="py-20 lg:py-24 bg-gradient-to-b from-white via-cyan-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
        Industries We Serve
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Delivering immersive digital experiences across diverse industries.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {industries.map((industry, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className={`group relative overflow-hidden rounded-3xl shadow-lg
          ${
            index === 3 || index === 6
              ? "sm:col-span-2 lg:col-span-2"
              : ""
          }`}
        >
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              {industry.title}
            </h3>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* Premium CTA */}
<section className="relative overflow-hidden py-20 md:py-28 px-4 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="absolute top-10 right-10 w-32 h-32 md:w-52 md:h-52 rounded-full border border-cyan-400/20"
  />

  <div className="relative z-10 max-w-6xl mx-auto">

    <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-20 text-center">

      <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-6">
        Digital Solutions • Virtual Tours • Web Development
      </span>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        Elevate Your Business
        <br />
        With Smart Digital Experiences
      </h2>

      <p className="max-w-3xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed mb-10">
        From immersive virtual tours and drone mapping to modern websites
        and digital branding, we help businesses create impactful online
        experiences that attract, engage, and convert customers.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        {/* Contact Page */}
        <Button
          asChild
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-6 rounded-xl"
        >
          <Link to="/contact">
            Get Free Consultation
          </Link>
        </Button>

        {/* Services Page */}
        <Button
          asChild
          variant="outline"
          className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 rounded-xl"
        >
          <Link to="/services">
            Explore Services
          </Link>
        </Button>

      </div>

    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default AboutPage;