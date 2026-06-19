
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';

import {
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion';

import { useTypingEffect } from '@/hooks/useTypingEffect';

function ContactPage() {

  const { displayedText } = useTypingEffect(
    'Contact Us',
    50
  );

  const { scrollY } = useScroll();

  const y1 = useTransform(
    scrollY,
    [0, 1000],
    [0, 250]
  );

  const faqs = [
    {
      question: 'How long does a 360° tour take to create?',
      answer: 'Typically 3-5 days from photography to final delivery.'
    },
    {
      question: 'What equipment and technology do you use?',
      answer: 'We use professional 8K cameras, drone systems and advanced rendering engines.'
    },
    {
      question: 'Can I update my virtual tour later?',
      answer: 'Yes, hotspots, media and content can be updated anytime.'
    },
    {
      question: 'Do you provide hosting and maintenance?',
      answer: 'Yes, we provide hosting, maintenance and support packages.'
    },
    {
      question: 'What is the project timeline?',
      answer: 'Most projects are completed within 1-4 weeks depending on scope.'
    },
    {
      question: 'Do you offer custom CRM integrations?',
      answer: 'Yes, we provide custom CRM and API integrations.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Contact Us | Sivaraa Infotech
        </title>

        <meta
          name="description"
          content="Get in touch with Sivaraa Infotech for CRM software, virtual tours, website development and digital solutions."
        />
      </Helmet>

      <Header />

     {/* HERO */}

<section
  className="
  relative
  min-h-[75vh]
  flex
  items-center
  justify-center
  overflow-hidden
  bg-slate-950
"
>

  {/* Video Background */}

  <motion.div
    className="absolute inset-0"
    style={{ y: y1 }}
  >

    <video
      autoPlay
      muted
      loop
      playsInline
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-[0.12]
        scale-110
      "
    >
      <source
        src="https://cdn.pixabay.com/video/2016/09/21/5320-183786499_large.mp4"
        type="video/mp4"
      />
    </video>

  </motion.div>

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950" />

  {/* Cyan Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="
      absolute
      top-20
      left-10
      w-80
      h-80
      bg-cyan-500/20
      rounded-full
      blur-[140px]
    "
  />

  <motion.div
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="
      absolute
      bottom-10
      right-10
      w-[400px]
      h-[400px]
      bg-blue-500/10
      rounded-full
      blur-[160px]
    "
  />

  {/* Grid Pattern */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.04]
      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      bg-[size:70px_70px]
    "
  />

  {/* Content */}

  <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2.5
        rounded-full
        bg-white/5
        backdrop-blur-xl
        border
        border-cyan-500/20
        text-cyan-400
        text-sm
        font-semibold
        mb-8
      "
      >
       Let's Build
      </div>

      {/* Heading */}

      <h1
        className="
        text-5xl
        md:text-7xl
        lg:text-8xl
        font-black
        leading-none
        mb-6
      "
      >
        <span className="text-white">
          {displayedText}
        </span>

        <span className="text-cyan-400 animate-pulse">
          |
        </span>
      </h1>

      {/* Subheading */}

      <p
        className="
        max-w-3xl
        mx-auto
        text-slate-300
        text-lg
        md:text-xl
        leading-relaxed
        mb-10
      "
      >
        Have a project in mind?
        Need a CRM solution, Website Development,
        Virtual Tour, Digital Marketing or Custom
        Software Development?

        <span className="text-cyan-400 font-medium">
          {" "}Let's discuss your requirements and create something extraordinary.
        </span>
      </p>

      {/* CTA Buttons */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-4
      "
      >

        <a
          href="#contact-form"
          className="
            px-8
            py-4
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-[0_0_40px_rgba(34,211,238,0.35)]
          "
        >
          Get Free Consultation
        </a>

        <a
          href="tel:+918421270360"
          className="
            px-8
            py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            text-white
            font-semibold
            hover:bg-white/10
            transition-all
            duration-300
          "
        >
          Call Now
        </a>

      </div>

    </motion.div>

  </div>

  {/* Bottom Fade */}

  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

</section>
    
{/* CONTACT SECTION */}

<section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[160px] rounded-full" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    <div
      className="
      grid
      lg:grid-cols-[420px,1fr]
      gap-8
      items-stretch
    "
    >

      {/* LEFT PANEL */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-cyan-500
          via-cyan-600
          to-blue-600
          p-8
          text-white
          shadow-[0_20px_80px_rgba(34,211,238,0.25)]
        "
      >

        <div className="absolute inset-0 bg-[url('/contact-pattern.png')] bg-cover opacity-10" />

        <div className="relative z-10">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl text-sm font-semibold mb-6">
            📞 Contact Information
          </div>

          <h2 className="text-4xl font-black mb-4">
            Get In Touch
          </h2>

          <p className="text-cyan-50/90 leading-relaxed mb-10">
            Let's discuss your CRM software,
            website development, virtual tour,
            branding or digital transformation project.
          </p>

          <div className="space-y-5">

            {[
              {
                icon: Phone,
                title: "Phone Number",
                value: "+91 8421270360"
              },
              {
                icon: Mail,
                title: "Email Address",
                value: "sivaraainfotech@gmail.com"
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Nashik, Maharashtra"
              },
              {
                icon: Clock,
                title: "Business Hours",
                value: "Mon - Sat | 9AM - 6PM"
              }
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    x: 5
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                  "
                >

                  <div
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-white/15
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>

                    <p className="text-sm text-white/70">
                      {item.title}
                    </p>

                    <p className="font-semibold">
                      {item.value}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </motion.div>

      {/* RIGHT PANEL */}

      <motion.div
        id="contact-form"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-white
          border
          border-slate-200
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >

        {/* Background Image */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.05]
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000')"
          }}
        />

        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-100 blur-[100px] rounded-full" />

        <div className="relative z-10 p-6 md:p-10">

          <div className="mb-8">

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
              🚀 Request Free Consultation
            </div>

            <h3 className="text-3xl font-black text-cyan-900 mb-3">
              Send Us A Message
              
            </h3>

            <p className="text-slate-600">
              Fill out the form and our team will
              get back to you shortly.
            </p>

          </div>

          <ContactForm />

        </div>

      </motion.div>

    </div>

  </div>

</section>

      {/* FAQ SECTION */}

<section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-950 overflow-hidden">

  {/* Background Effects */}

  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full" />

  <div className="max-w-5xl mx-auto px-4 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >

      <div
        className="
        inline-flex
        items-center
        px-5
        py-2
        rounded-full
        bg-cyan-50
        border
        border-cyan-200
        text-cyan-700
        text-sm
        font-semibold
        mb-6
      "
      >
        ❓ Frequently Asked Questions
      </div>

      <h2
        className="
        text-4xl
        md:text-5xl
        font-black
        text-slate-900
        mb-5
      "
      >
        Got Questions?
      </h2>

      <p
        className="
        max-w-2xl
        mx-auto
        text-slate-600
        text-lg
        leading-relaxed
      "
      >
        Find answers to the most common questions
        about our CRM software, website development,
        virtual tours, digital marketing and custom
        technology solutions.
      </p>

    </motion.div>

    {/* FAQ Container */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >

      {/* Decorative Glow */}

      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100 blur-[100px] rounded-full" />

      <div className="relative z-10 p-6 md:p-10">

        <FAQAccordion faqs={faqs} />

      </div>

    </motion.div>

    

  </div>

</section>

      <Footer />
    </>
  );
}

export default ContactPage;

