import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoRequestForm from "@/components/DemoRequestForm";
import offerVideo from "@/assets/videos/offer.mp4";

import {
  CheckCircle2,
  Globe,
  Users,
  LayoutDashboard,
  CreditCard,
  Building2,
  BarChart3,
  ShieldCheck,
  Phone,
  Mail,
  MonitorSmartphone,
  BriefcaseBusiness
} from "lucide-react";

function CRMSoftwarePage() {

  const offerings = [
    "Online Plot Booking Availability",
    "Lead Management with CRM",
    "Agent Login & Commission Dashboard",
    "EMI & Loan Tracking",
    "Branded Plot Booking Website",
    "Role-Based Admin & Employee Access",
    "Smart Reports & Sales Dashboards"
  ];

  const benefits = [
    "Sell plots online 24/7",
    "Increase transparency with buyers",
    "Eliminate manual errors",
    "Monitor agents & team performance",
    "Accessible on desktop, tablet & mobile",
    "Customized for multiple projects & offices",
    "Go live in days — not weeks"
  ];

  return (
    <>
      <Helmet>
        <title>Plot Management CRM Software | Sivaraa Infotech</title>

        <meta
          name="description"
          content="All-In-One Plot Management CRM Software for Real Estate Developers, Plotting Projects & Sales Teams."
        />
      </Helmet>

      <Header />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden pt-40 pb-24 bg-gradient-to-br from-slate-950 via-[#081526] to-[#0f2f4f]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              text-cyan-400
              text-sm
              uppercase
              tracking-widest
            "
          >
            Plot Management CRM Software
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-black
              text-white
              leading-tight
            "
          >
            The Intelligent Plot
            <br />
            Management Ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              md:text-xl
              text-slate-300
            "
          >
            Complete CRM, Booking, Payment Tracking,
            Lead Management & Website Solution
            for Real Estate Developers.
          </motion.p>

        </div>

      </section>

      {/* CORE OFFERING */}

<section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/40 blur-[150px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-[150px] rounded-full" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-cyan-50
            border
            border-cyan-200
            text-cyan-600
            text-sm
            font-semibold
            mb-6
          "
        >
          🚀 Smart Plot Management Platform
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
        >
          Our Core Offering:
          <span className="block text-cyan-500 mt-2">
            All-in-One Platform
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 leading-relaxed mb-10"
        >
          A smart cloud-based Plot Management Software designed
          to manage bookings, customers, agents, inventory,
          payments and project operations from a single dashboard.
          Built specifically for Real Estate Developers and
          Plotting Projects.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">

          {offerings.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5
              }}
              whileHover={{
                y: -6,
                scale: 1.02
              }}
              className="
                group
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white
                border
                border-slate-200
                shadow-sm
                hover:border-cyan-300
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-50
                  flex
                  items-center
                  justify-center
                  group-hover:bg-cyan-500
                  transition-all
                  duration-300
                "
              >

                <CheckCircle2
                  className="
                    w-5
                    h-5
                    text-cyan-500
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                />

              </div>

              <span className="text-slate-700 font-medium text-sm">
                {item}
              </span>

            </motion.div>

          ))}

        </div>

      </motion.div>

      {/* RIGHT VIDEO */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        {/* Glow */}

        <div className="absolute -inset-8 bg-cyan-400/20 blur-[80px] rounded-full" />

        <motion.div
          whileHover={{
            scale: 1.02
          }}
          transition={{
            duration: 0.4
          }}
          className="
            relative
            rounded-[32px]
            overflow-hidden
            border
            border-cyan-200
            bg-white
            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
        >
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src={offerVideo} type="video/mp4" />
</video>
          
        </motion.div>

      </motion.div>

    </div>

  </div>

</section>

      {/* LALIT ROONGTA GROUP */}

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-white">

              PLOTS MANAGEMENT SOFTWARE

            </h2>

            <div className="w-24 h-1 bg-cyan-400 mx-auto my-5 rounded-full" />

            <p className="text-cyan-400 text-xl font-semibold">

              LALIT ROONGTA GROUP

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div
                className="
                  p-8
                  rounded-3xl
                  bg-white/5
                  border
                  border-cyan-500/10
                  backdrop-blur-xl
                "
              >

                <h3 className="text-2xl font-bold text-white mb-6">
                  Complete Plot Management Solution
                </h3>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  Discover how our Plot Management System
                  transforms the way developers manage projects,
                  bookings, customers and payments with a
                  centralized digital platform.
                </p>

                <div className="space-y-4">

                  {[
                    "Integrated 360° Virtual Tours",
                    "Real-time Plot Availability",
                    "Online Booking System",
                    "Customer Management Portal",
                    "Payment Tracking & EMI Management",
                    "Agent Commission Dashboard",
                    "Advanced Analytics & Reports"
                  ].map((item, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-200">
                        {item}
                      </span>
                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

            {/* RIGHT IFRAME */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div
                className="
                  p-4
                  rounded-[32px]
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10
                  border
                  border-cyan-400/20
                  backdrop-blur-xl
                  shadow-[0_0_100px_rgba(34,211,238,0.12)]
                "
              >

                <iframe
                  src="https://roongtagroup.blindersoe.tech/projects/plot-availability/1"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                  title="Lalit Roognta Group Plot Management System"
                  className="rounded-2xl bg-white"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* BENEFITS SECTION STARTS IN PART 2 */}

            {/* BENEFITS SECTION */}

<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 blur-[150px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 blur-[150px] rounded-full" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >

      <div
        className="
          inline-flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          bg-cyan-50
          border
          border-cyan-200
          text-cyan-600
          text-sm
          font-semibold
          shadow-sm
          mb-6
        "
      >
        ⭐ Why Developers Choose Us
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
        Built for Growth
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
        Everything you need to manage plots, automate sales,
        track customers and scale your real estate business
        efficiently from one intelligent platform.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: Globe,
          title: "Sell Plots Online 24/7",
          desc: "Enable customers to view and reserve plots anytime."
        },
        {
          icon: ShieldCheck,
          title: "Increase Transparency",
          desc: "Real-time inventory and booking visibility."
        },
        {
          icon: CheckCircle2,
          title: "Eliminate Manual Errors",
          desc: "Automated workflows reduce operational mistakes."
        },
        {
          icon: LayoutDashboard,
          title: "Monitor Team Performance",
          desc: "Track agent productivity and sales performance."
        },
        {
          icon: MonitorSmartphone,
          title: "All Device Access",
          desc: "Works seamlessly on mobile, tablet and desktop."
        },
        {
          icon: BriefcaseBusiness,
          title: "Manage Multiple Projects",
          desc: "Control all plotting projects from one dashboard."
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          desc: "Make data-driven decisions with smart reports."
        },
        {
          icon: Users,
          title: "Better Customer Experience",
          desc: "Provide faster responses and smoother processes."
        }
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              border
              border-slate-200
              p-7
              shadow-lg
              hover:shadow-2xl
              hover:border-cyan-300
              transition-all
              duration-500
            "
          >

            {/* Hover Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-100/0
                to-cyan-100/40
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            />

            <div className="relative z-10">

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-50
                  border
                  border-cyan-200
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:bg-cyan-500
                  transition-all
                  duration-500
                "
              >

                <Icon
                  className="
                    w-7
                    h-7
                    text-cyan-500
                    group-hover:text-white
                    transition-all
                    duration-500
                  "
                />

              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

      {/* WEBSITE & BRANDING INCLUDED */}

<section className="py-20 bg-gradient-to-b from-white via-cyan-50 to-slate-100 overflow-hidden">

  <div className="max-w-7xl mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >

      <div
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          text-white
          text-sm
          font-semibold
          shadow-lg
          mb-5
        "
      >
        🌐 Complete Digital Presence
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
        Website & Branding Included
      </h2>

      <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Your fully branded project portal equipped with lead generation,
        booking management, customer engagement tools and online project
        showcase capabilities.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-2 gap-5">

      {[
        "Project Listings by City / Type / Status",
        "Plot Availability Map & Booking System",
        "Loan Calculator",
        "Gallery, Team, Contact & Careers",
        "Privacy Policy, FAQs & Disclaimer",
        "Domain + Hosting + Email Setup",
        "Lead Collection Forms",
        "SEO Friendly Structure"
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08
          }}
          whileHover={{
            scale: 1.02,
            y: -4
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            bg-white
            border
            border-cyan-100
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          {/* Hover Glow */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-r
              from-cyan-500/5
              via-white
              to-blue-500/5
            "
          />

          <div className="relative flex items-center gap-4 p-5">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-cyan-500
                to-blue-500
                shadow-lg
                group-hover:rotate-6
                transition-all
                duration-300
                flex-shrink-0
              "
            >
              <Globe className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1">

              <h3
                className="
                  text-slate-800
                  font-semibold
                  leading-relaxed
                  group-hover:text-cyan-600
                  transition-colors
                  duration-300
                "
              >
                {item}
              </h3>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* SOFTWARE MODULES */}

<section className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 overflow-hidden">

  <div className="max-w-7xl mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-5">
        ⚙️ Powerful CRM Modules
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
        Software Modules Breakdown
      </h2>

      <p className="text-slate-400 max-w-3xl mx-auto">
        Every feature required to manage plotting projects,
        automate sales and streamline customer management
        from a single platform.
      </p>

    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Large Featured Card */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >

        <div className="h-full rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col md:flex-row">

          <div className="p-8 md:w-1/2">

            <Globe className="w-10 h-10 text-white mb-5" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Plot Inventory & Booking
            </h3>

            <p className="text-cyan-50 mb-6 text-sm leading-relaxed">
              Real-time plot availability system with booking,
              reservation management and interactive project layouts.
            </p>

            <div className="space-y-3">

              {[
                "Live Layout Availability",
                "Online Booking Engine",
                "Reservation Tracking",
                "Interactive Plot Maps"
              ].map((item, i) => (

                <div key={i} className="flex items-center gap-3">

                  <CheckCircle2 className="w-4 h-4 text-white" />

                  <span className="text-white text-sm">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="hidden md:flex md:w-1/2 items-center justify-center">

            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118"
              alt=""
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </motion.div>

      {/* Small Cards */}

      {[
        {
          icon: LayoutDashboard,
          title: "Lead CRM",
          color: "from-slate-800 to-slate-900"
        },
        {
          icon: CreditCard,
          title: "Payments",
          color: "from-cyan-600 to-cyan-700"
        },
        {
          icon: Users,
          title: "Agent Panel",
          color: "from-violet-600 to-purple-700"
        },
        {
          icon: Building2,
          title: "EMI & Loans",
          color: "from-slate-800 to-slate-900"
        },
        {
          icon: ShieldCheck,
          title: "Admin Dashboard",
          color: "from-cyan-600 to-blue-700"
        },
        {
          icon: BarChart3,
          title: "Smart Reports",
          color: "from-slate-800 to-slate-900"
        }
      ].map((module, index) => {

        const Icon = module.icon;

        return (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            className={`
              rounded-3xl
              p-6
              bg-gradient-to-br
              ${module.color}
              border
              border-white/10
              transition-all
              duration-500
            `}
          >

            <Icon className="w-10 h-10 text-white mb-5" />

            <h3 className="text-white font-bold text-lg mb-3">
              {module.title}
            </h3>

            <p className="text-white/80 text-sm">
              Advanced tools built for modern real estate
              sales and project management.
            </p>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

      {/* PRICING */}

<section className="py-16 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-6xl mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-semibold mb-4">
        🚀 Flexible Solutions
      </div>

      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3">
        Choose Your Plan
      </h2>

      <p className="text-slate-600 max-w-2xl mx-auto">
        Select the right CRM package for your plotting project and business growth.
      </p>

    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* STARTER */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="
          group
          bg-white
          rounded-3xl
          p-6
          border
          border-slate-200
          shadow-sm
          hover:shadow-xl
          hover:border-cyan-300
          transition-all
          duration-500
        "
      >

        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-4">
          <span className="text-xl">🌱</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Starter Plan
        </h3>

        <ul className="space-y-2 text-sm text-slate-600">

          <li>✓ Basic CRM</li>
          <li>✓ Lead Management</li>
          <li>✓ Booking System</li>
          <li>✓ Standard Website</li>
          <li>✓ Email Support</li>

        </ul>

      </motion.div>

      {/* PROFESSIONAL */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -10 }}
        className="
          group
          relative
          bg-gradient-to-br
          from-cyan-500
          via-cyan-400
          to-blue-500
          rounded-3xl
          p-6
          shadow-2xl
          overflow-hidden
        "
      >

        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-cyan-600 text-xs font-bold">
          POPULAR
        </div>

        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
          <span className="text-xl">🔥</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">
          Professional Plan
        </h3>

        <ul className="space-y-2 text-sm text-white/90">

          <li>✓ Advanced CRM</li>
          <li>✓ Agent Dashboard</li>
          <li>✓ Commission Tracking</li>
          <li>✓ Premium Website</li>
          <li>✓ Priority Support</li>

        </ul>

      </motion.div>

      {/* ENTERPRISE */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -8 }}
        className="
          group
          bg-white
          rounded-3xl
          p-6
          border
          border-slate-200
          shadow-sm
          hover:shadow-xl
          hover:border-cyan-300
          transition-all
          duration-500
        "
      >

        <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-4">
          <span className="text-xl">🏢</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Enterprise Plan
        </h3>

        <ul className="space-y-2 text-sm text-slate-600">

          <li>✓ Unlimited Projects</li>
          <li>✓ Full Automation</li>
          <li>✓ API Integrations</li>
          <li>✓ White Label CRM</li>
          <li>✓ Dedicated Support</li>

        </ul>

      </motion.div>

    </div>

  </div>

</section>
     {/* DEMO SECTION */}

<section className="py-16 bg-slate-950 relative overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    <div
      className="
        rounded-[36px]
        overflow-hidden
        border
        border-cyan-500/10
        bg-gradient-to-br
        from-slate-900
        via-slate-950
        to-black
        shadow-[0_0_80px_rgba(34,211,238,0.08)]
      "
    >

      <div className="grid lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div className="p-8 md:p-12 flex flex-col justify-center">

          <div className="inline-flex w-fit items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
            🚀 Free Live Demonstration
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
            Ready To Transform
            <span className="block text-cyan-400">
              Your Plot Business?
            </span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Schedule a free live demo and discover how our
            Plot Management CRM helps automate sales,
            booking management, customer tracking,
            payment collection and project reporting.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Call Us
                </p>

                <p className="text-white font-semibold">
                  +91 8412972366
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email Us
                </p>

                <p className="text-white font-semibold break-all">
                  sivaraainfotech@gmail.com
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}

        <div
          className="
            relative
            min-h-[550px]
            flex
            items-center
            justify-center
            p-6
          "
        >

          {/* Background Image */}

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          {/* Form Card */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-lg
              bg-white
              rounded-3xl
              p-6 md:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
          >

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request Demo
            </h3>

            <p className="text-slate-500 text-sm mb-6">
              Fill out the form and our team will contact you shortly.
            </p>

            <DemoRequestForm />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      <Footer />

    </>
  );
}

export default CRMSoftwarePage;
