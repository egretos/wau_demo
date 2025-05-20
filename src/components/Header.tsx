
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl tracking-widest">
            <span className="japanese-text mr-1">和宇 –</span> 
            <span className="uppercase font-normal">WAU FOOD & ART FUSION</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-10">
          <a href="#about" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">About</a>
          <a href="#experience" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">Experience</a>
          <a href="#products" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">Products</a>
          <a href="#contact" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
