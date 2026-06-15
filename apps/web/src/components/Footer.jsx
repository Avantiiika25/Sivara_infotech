import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

// Asset Import for local background image
import footerBg from "../assets/images/footer-bg.jpg";
import logo from "../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "360° Virtual Tours",
    "Drone Aerial Shoots",
    "Plot Management CRM",
    "Digital Layouts",
    "Event Coverage",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/16p9L7VNi8/?mibextid=wwXIfr" },
    { icon: MessageCircle, href: "https://wa.me/918888066946" },
    { icon: Linkedin, href: "https://linkedin.com/company/sivaraa360studio" },
    { icon: Instagram, href: "https://www.instagram.com/sivaraa_360_studio" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-slate-900 pt-24 md:pt-28">
      
      {/* CSS Keyframe Architecture Injection */}
      <style>
        {`
          @keyframes ambient-pan {
            0% { transform: scale(1) rotate(0deg) translate(0, 0); }
            50% { transform: scale(1.05) rotate(0.25deg) translate(-0.5%, -0.5%); }
            100% { transform: scale(1) rotate(0deg) translate(0, 0); }
          }
          @keyframes slide-right {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }
          .animate-bg-ambient {
            animation: ambient-pan 24s ease-in-out infinite;
          }
          .animate-arrow-nudge:hover .arrow-icon {
            animation: slide-right 1s ease-in-out infinite;
          }
        `}
      </style>

      {/* Living Animated Background Canvas - Elevated Z-Index and Clear Visibility */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none">
        <div
          className="w-full h-full opacity-100 bg-cover bg-center transform scale-105 animate-bg-ambient"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        {/* Soft dark atmospheric overlay to ensure readability of text elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/30" />
      </div>

      <div className="w-full relative z-20 flex flex-col items-center">
        
        {/* Overlapping Primary Hero Card - Set to Custom Small-Scale Width Profile */}
        <div className="w-full max-w-3xl mx-auto px-4 md:px-6 relative z-30 -mb-12">
          <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl shadow-blue-950/50 transition-transform duration-500 hover:scale-[1.01] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h3 className="text-base md:text-lg font-bold tracking-tight">
                Subscribe to our virtual design workspace
              </h3>
              <p className="text-blue-100/90 text-[11px] leading-relaxed max-w-md">
                Get direct optimization analytics on premium corporate plots, 360 frameworks, and customized architectural layout vectors.
              </p>
            </div>
            <a
              href="https://wa.me/918888066946"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-arrow-nudge whitespace-nowrap bg-white text-blue-700 hover:bg-slate-50 font-semibold text-xs py-2.5 px-5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              Initiate Consultation
              <ArrowRight className="arrow-icon w-3.5 h-3.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Structural White Content Deck Container - Set to Full Wide Aspect Profile */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          <div className="bg-white/90 backdrop-blur-md rounded-t-[2rem] pt-20 pb-8 px-6 md:px-12 border-x border-t border-slate-200/40 shadow-[0_-20px_40px_rgba(0,0,0,0.06)]">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-8 border-b border-slate-100">
              
              {/* Column 1: Identity & Social Links */}
              <div className="md:col-span-5 space-y-4">
                <img 
                  src={logo} 
                  alt="Sivaraa Corporate Master Logo" 
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                />
                <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
                  Transforming spatial limits into responsive, edge-rendered immersive systems. We build top-tier digital frameworks tailored around physical property profiles.
                </p>
                {/* Horizontal Minimalist Icon Row */}
                <div className="flex gap-4 pt-1">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <social.icon className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: Matrix Links */}
              <div className="md:col-span-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                  Services Matrix
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {services.map((service) => (
                    <li key={service} className="group flex">
                      <span className="cursor-pointer transition-colors duration-200 group-hover:text-blue-600 relative py-0.5">
                        {service}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Channels */}
              <div className="md:col-span-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                  Contact Us
                </h4>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5 group">
                    <Phone className="text-blue-500 w-3.5 h-3.5 shrink-0" />
                    <a href="tel:+91918421270360" className="hover:text-blue-600 transition-colors">
                      +91 918421270360
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <Mail className="text-blue-500 w-3.5 h-3.5 shrink-0" />
                    <a href="mailto:sivaraainfotech@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                      sivaraainfotech@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <MapPin className="text-blue-500 w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-500">
                      6106 Roognta Shopping Hub, Nashik, MH, IN
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Clean Segmented Legal Base */}
            <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-500 font-medium tracking-wide">
              <p className="text-center sm:text-left">
                © {currentYear} SIVARAA INFOTECH. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="hover:text-blue-600 cursor-pointer transition-colors"></span>
                <span></span>
                <p>
                  Design by{" "}
                  <span className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">
                    Prime Digital Media
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;