
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

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
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#F3F4F6] text-foreground border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">Sivaraa Infotech</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              A next-generation immersive PropTech company redefining how properties are showcased, managed, and sold through cutting-edge digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-lg text-primary mb-6">Immersive Solutions</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-lg text-primary mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-gray-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Call for consultation</p>
                  <a href="tel:+918421270360" className="text-foreground hover:text-primary transition-colors font-semibold">
                    +91 8421270360
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-gray-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Email us</p>
                  <a href="mailto:sivaraainfotech@gmail.com" className="text-foreground hover:text-primary transition-colors font-semibold break-all">
                    sivaraainfotech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-gray-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Location & Hours</p>
                  <p className="text-foreground font-semibold">India</p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {currentYear} Sivaraa Infotech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
