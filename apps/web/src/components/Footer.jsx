import React from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: '360° Virtual Tours', path: '/services' },
    { name: 'Plot Management CRM', path: '/crm-software' },
    { name: 'Drone Shoots', path: '/services' },
    { name: 'Interactive Maps', path: '/services' },
    { name: 'Digital Layouts', path: '/services' },
    { name: 'Event Virtual Coverage', path: '/services' }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/people/Sivaraa-Infotech/61569787983923/?mibextid=wwXIfr&rdid=o92q2yihXhCMyQLI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16p9L7VNi8%2F%3Fmibextid%3DwwXIfr',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sivaraa_360_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/sivaraa360studio',
      label: 'LinkedIn'
    },
    {
      icon: MessageCircle,
      href: 'https://api.whatsapp.com/send/?phone=918888066946&text&type=phone_number&app_absent=0',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-[#f7fcfd]">

      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24">

        {/* Main Footer */}

        <div
          className="
            bg-white/80
            backdrop-blur-xl
            border
            border-cyan-100
            rounded-[40px]
            shadow-[0_25px_80px_rgba(6,182,212,0.08)]
            p-8
            md:p-12
          "
        >

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Company */}

            <div className="lg:col-span-4">

              <Link
                to="/"
                className="inline-block group"
              >

                <img
                  src="/logo.png"
                  alt="Sivaraa Infotech"
                  className="
                    h-16
                    w-auto
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-1
                  "
                />

              </Link>

              <p className="mt-6 text-slate-600 leading-relaxed">

                Delivering immersive virtual experiences,
                smart CRM solutions, drone technology,
                interactive mapping and next-generation
                digital transformation services.

              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-12
                      h-12
                      rounded-2xl
                      bg-white
                      border
                      border-cyan-100
                      flex
                      items-center
                      justify-center
                      text-slate-600
                      hover:bg-cyan-500
                      hover:text-white
                      hover:border-cyan-500
                      hover:-translate-y-1
                      shadow-sm
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}

              </div>

            </div>

            {/* Services */}

            <div className="lg:col-span-3">

              <h3 className="text-xl font-bold text-slate-900 mb-8">
                Our Solutions
              </h3>

              <div className="space-y-4">

                {services.map((service) => (

                  <Link
                    key={service.name}
                    to={service.path}
                    className="
                      flex
                      items-center
                      justify-between
                      text-slate-600
                      hover:text-cyan-600
                      group
                      transition-all
                    "
                  >

                    <span>{service.name}</span>

                    <ArrowUpRight
                      className="
                        w-4
                        h-4
                        opacity-0
                        group-hover:opacity-100
                        group-hover:translate-x-1
                        transition-all
                      "
                    />

                  </Link>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div className="lg:col-span-5">

              <h3 className="text-xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-4">

                {/* Phone */}

                <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-all">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">
                      <Phone className="w-5 h-5" />
                    </div>

                    <div>

                      <p className="text-sm text-slate-500 mb-1">
                        Call Us
                      </p>

                      <a
                        href="tel:+918421270360"
                        className="font-semibold text-slate-900 hover:text-cyan-600"
                      >
                        +91 8421270360
                      </a>

                    </div>

                  </div>

                </div>

                {/* Email */}

                <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-all">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>

                    <div>

                      <p className="text-sm text-slate-500 mb-1">
                        Email Address
                      </p>

                      <a
                        href="mailto:sivaraainfotech@gmail.com"
                        className="font-semibold text-slate-900 break-all hover:text-cyan-600"
                      >
                        sivaraainfotech@gmail.com
                      </a>

                    </div>

                  </div>

                </div>

                {/* Location */}

                <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-all">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">
                      <MapPin className="w-5 h-5" />
                    </div>

                    <div>

                      <p className="text-sm text-slate-500 mb-1">
                        Location
                      </p>

                      <p className="font-semibold text-slate-900">
                        Nashik, Maharashtra, India
                      </p>

                      <p className="text-sm text-slate-500 mt-1">
                        Mon - Sat | 9 AM - 6 PM
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="py-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-sm">
              © {currentYear} Sivaraa Infotech. All Rights Reserved.
            </p>

            <div className="flex gap-8">

              <Link
                to="/privacy-policy"
                className="text-slate-500 hover:text-cyan-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-500 hover:text-cyan-600 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;