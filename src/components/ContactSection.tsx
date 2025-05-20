
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <h2 className="section-title mb-12">GET IN TOUCH</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="contact-item">
            <MapPin size={18} />
            <p>12 AVENUE ST, CITY STATE, COUNTRY 12345</p>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <p>HELLO@WAUJAPAN.COM</p>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <p>+123 456 7890</p>
          </div>
        </div>
        
        <div>
          <p className="text-right">LET'S WORK TOGETHER</p>
        </div>
      </div>
      
      <div className="border-t border-neutral-300 mt-12 pt-12">
        <div className="flex justify-between items-center">
          <p className="text-xs text-neutral-500">© 2025 WAU DESIGNS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">Instagram</a>
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">Facebook</a>
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
