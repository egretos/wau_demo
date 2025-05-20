
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24 bg-neutral-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            <span className="japanese-text">和宇</span> – WAU DESIGNS
          </p>
        </div>
        <div className="flex space-x-8">
          <a href="#about" className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors">About</a>
          <a href="#experience" className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors">Experience</a>
          <a href="#products" className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors">Products</a>
          <a href="#contact" className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
