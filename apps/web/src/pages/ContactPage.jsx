
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
        pt-40
        pb-28
        overflow-hidden
        bg-slate-950
      "
      >

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
              w-full
              h-full
              object-cover
              opacity-10
              scale-110
            "
          >
            <source
              src="https://cdn.pixabay.com/video/2016/09/21/5320-183786499_large.mp4"
              type="video/mp4"
            />
          </video>

        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div
              className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              text-sm
              font-semibold
              mb-6
            "
            >
              Let's Build Something Amazing
            </div>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              text-white
              mb-6
            "
            >
              {displayedText}
              <span className="text-cyan-400 animate-pulse">
                |
              </span>
            </h1>

            <p
              className="
              max-w-3xl
              mx-auto
              text-slate-400
              text-lg
              md:text-xl
            "
            >
              Discuss your project, request a demo,
              or get a custom proposal tailored to
              your business.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-24 bg-slate-950">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="mb-8">

                <h2 className="text-4xl font-black text-white mb-4">
                  Get In Touch
                </h2>

                <p className="text-slate-400">
                  We are here to help you transform
                  your business with technology.
                </p>

              </div>

              <div className="space-y-6">

                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 8421270360"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "sivaraainfotech@gmail.com"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "India"
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    value: "Mon - Sat | 9AM - 6PM"
                  }
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1
                      }}
                      className="
                        flex
                        items-center
                        gap-5
                        p-5
                        rounded-3xl
                        bg-white/5
                        border
                        border-cyan-500/10
                        hover:border-cyan-400/30
                        transition-all
                        duration-500
                      "
                    >

                      <div
                        className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-cyan-500/10
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div>

                        <h3 className="text-white font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-slate-400">
                          {item.value}
                        </p>

                      </div>

                    </motion.div>

                  );
                })}

              </div>

            </motion.div>

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-cyan-500/20
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              "
            >

              <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-10" />

              <div className="relative z-10 p-8 md:p-10">

                <ContactForm />

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-slate-900">

        <div className="max-w-4xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >

            <h2 className="text-4xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-400">
              Answers to common questions.
            </p>

          </motion.div>

          <FAQAccordion faqs={faqs} />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ContactPage;

