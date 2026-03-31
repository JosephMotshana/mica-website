import React from 'react';
import { Link } from 'react-router-dom';
// Removed Linkedin and Facebook icons to eliminate plugin/import errors
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-[#1F3B54] text-white pt-16 mt-auto">
      <div className="footer-container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        
        {/* Branding & Mission */}
        <div className="footer-brand">
          <h2 className="footer-logo text-2xl font-bold mb-4">
            Mica General <span className="text-blue-400">Auto Repairs</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Professional automotive diagnostics and mechanical repairs. 
            Providing reliable service to the Booysens community with integrity and expertise.
          </p>
          {/* Social media section removed as requested */}
        </div>

        {/* Quick Navigation */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-6 border-b border-blue-500/30 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="footer-links space-y-4 text-gray-400">
            <li><Link to="/" onClick={scrollToTop} className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop} className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-6 border-b border-blue-500/30 pb-2 inline-block">
            Get in Touch
          </h3>
          <ul className="footer-contact space-y-5">
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-400 flex-shrink-0" />
              <a href="mailto:info@micageneralauto.co.za" className="text-gray-300 hover:text-white transition-colors">
                info@micageneralauto.co.za
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">
                16 Ophir Road, Ophirton<br />
                Booysens, Johannesburg, 2091
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom border-t border-slate-800 py-8 bg-[#1a3248]">
        <div className="footer-bottom-content max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {currentYear} Mica General Auto Repairs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
             <span className="text-gray-600 text-xs uppercase tracking-widest">Powered by</span>
             <a href="https://actsquadrant.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm font-semibold hover:underline">
               Acts Quadrant
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;