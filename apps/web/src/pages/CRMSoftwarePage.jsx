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

      <section className="py-24 bg-slate-950 border-t border-cyan-500/10">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-semibold mb-5">
              ⭐ Why Developers Choose Us
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Key Benefits
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Powerful tools designed to simplify operations,
              increase sales efficiency and provide complete
              project visibility.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Globe,
                title: "Sell Plots Online 24/7"
              },
              {
                icon: ShieldCheck,
                title: "Increase Transparency"
              },
              {
                icon: CheckCircle2,
                title: "Eliminate Manual Errors"
              },
              {
                icon: LayoutDashboard,
                title: "Monitor Team Performance"
              },
              {
                icon: MonitorSmartphone,
                title: "Desktop, Tablet & Mobile"
              },
              {
                icon: BriefcaseBusiness,
                title: "Multi Project Management"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics"
              },
              {
                icon: Users,
                title: "Better Customer Experience"
              }
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    group
                    p-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-cyan-500/10
                    hover:border-cyan-400/30
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      mb-5
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* WEBSITE & BRANDING INCLUDED */}

      <section className="py-24 bg-slate-900">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-semibold mb-5">
              🌐 Complete Digital Presence
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Website & Branding Included
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto">
              Your fully branded project portal with all tools
              required to generate leads, manage bookings and
              showcase availability online.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
                  p-6
                  rounded-3xl
                  bg-slate-950
                  border
                  border-cyan-500/10
                  text-center
                "
              >

                <Globe className="w-6 h-6 text-cyan-400 mx-auto mb-4" />

                <p className="text-slate-200 text-sm">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* SOFTWARE MODULES START IN PART 3 */}
            {/* SOFTWARE MODULES */}

      <section className="py-24 bg-slate-950 border-t border-cyan-500/10">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-semibold mb-5">
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

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: Globe,
                title: "Plot Inventory & Booking",
                items: [
                  "Live layout with booking status",
                  "Track reservations",
                  "Online booking engine",
                  "Interactive plot availability"
                ]
              },
              {
                icon: LayoutDashboard,
                title: "Lead Management CRM",
                items: [
                  "Lead source tracking",
                  "Follow-up reminders",
                  "Sales funnel management",
                  "Agent-wise lead assignment"
                ]
              },
              {
                icon: CreditCard,
                title: "Customer & Payment Tracking",
                items: [
                  "KYC & customer records",
                  "Installment tracking",
                  "Auto reminders",
                  "Receipt generation"
                ]
              },
              {
                icon: Users,
                title: "Agent Panel & Commission Tracker",
                items: [
                  "Agent login access",
                  "Commission calculator",
                  "Performance reports",
                  "Lead ownership tracking"
                ]
              },
              {
                icon: Building2,
                title: "Loans & EMI Management",
                items: [
                  "Loan approval workflow",
                  "Bank coordination",
                  "EMI schedules",
                  "Payment history"
                ]
              },
              {
                icon: ShieldCheck,
                title: "Admin & Employee Dashboard",
                items: [
                  "Role-based permissions",
                  "Staff monitoring",
                  "Attendance overview",
                  "Department reporting"
                ]
              },
              {
                icon: BarChart3,
                title: "Smart Reporting",
                items: [
                  "Real-time sales charts",
                  "Revenue reports",
                  "Agent performance",
                  "Project analytics"
                ]
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
                  className="
                    p-8
                    rounded-3xl
                    bg-white/5
                    border
                    border-cyan-500/10
                    hover:border-cyan-400/30
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-5">
                    {module.title}
                  </h3>

                  <div className="space-y-3">

                    {module.items.map((item, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />

                        <span className="text-slate-300 text-sm">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="py-24 bg-slate-900">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Choose Your Plan
            </h2>

            <p className="text-slate-400">
              Select the perfect solution for your business
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/10">

              <h3 className="text-2xl font-bold text-white mb-3">
                Starter
              </h3>

              <p className="text-cyan-400 text-4xl font-black mb-6">
                ₹49,999
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>• Basic CRM</li>
                <li>• Lead Management</li>
                <li>• Booking System</li>
                <li>• Standard Website</li>
                <li>• Email Support</li>
              </ul>

            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-400 relative">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Professional
              </h3>

              <p className="text-cyan-400 text-4xl font-black mb-6">
                ₹99,999
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>• Advanced CRM</li>
                <li>• Agent Dashboard</li>
                <li>• Commission Tracking</li>
                <li>• Premium Website</li>
                <li>• Priority Support</li>
              </ul>

            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-cyan-500/10">

              <h3 className="text-2xl font-bold text-white mb-3">
                Enterprise
              </h3>

              <p className="text-cyan-400 text-4xl font-black mb-6">
                Custom
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>• Unlimited Projects</li>
                <li>• Full Automation</li>
                <li>• API Integrations</li>
                <li>• White Label CRM</li>
                <li>• Dedicated Support</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* DEMO SECTION */}

      <section className="py-24 bg-slate-950 border-t border-cyan-500/10">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>

              <h2 className="text-4xl font-black text-white mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-slate-400 mb-8">
                Book a free demo and see how our Plot Management
                CRM can automate your sales process.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">
                    +91 8412972366
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">
                    info@sivaraainfotech.com
                  </span>
                </div>

              </div>

            </div>

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
              <DemoRequestForm />
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default CRMSoftwarePage;