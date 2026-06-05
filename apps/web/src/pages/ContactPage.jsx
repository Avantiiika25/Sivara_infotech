
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';

function ContactPage() {
  const { displayedText } = useTypingEffect('Contact Us', 50);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const faqs = [
    { question: 'How long does a 360° tour take to create?', answer: 'Typically 3-5 days from photography to final delivery, depending on project scale.' },
    { question: 'What equipment and technology do you use?', answer: 'We use professional 8K 360° cameras, advanced drone systems, and robust WebGL rendering engines.' },
    { question: 'Can I update or modify my tour after publishing?', answer: 'Yes, hotspots, text, and media can be updated dynamically without re-rendering the entire tour.' },
    { question: 'Do you provide hosting and maintenance?', answer: 'Yes, we provide high-speed AWS cloud hosting and ongoing maintenance SLA packages.' },
    { question: 'What is the typical project timeline?', answer: 'Small projects wrap in a week, while complex CRM deployments take 2-4 weeks.' },
    { question: 'Do you offer custom integrations?', answer: 'Absolutely. We build custom API hooks to connect our CRM to your legacy systems.' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Sivaraa Infotech</title>
        <meta name="description" content="Let's discuss your project and create something amazing together." />
      </Helmet>

      <Header />

      <section className="relative pt-40 pb-20 bg-muted border-b border-gray-200 text-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-20 scale-110"
          >
            <source src="https://cdn.pixabay.com/video/2016/09/21/5320-183786499_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-muted via-transparent to-muted" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-heading">
            {displayedText}<span className="text-primary animate-pulse">|</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Reach Out</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Phone", text: "+91 8421270360" },
                  { icon: Mail, title: "Email", text: "sivaraainfotech@gmail.com" },
                  { icon: MapPin, title: "Address", text: "India" },
                  { icon: Clock, title: "Business Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5 group-hover:animate-icon-pulse"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-gray-100 shadow-xl p-10 rounded-3xl">
               <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FAQAccordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
