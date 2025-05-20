
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-20">
      <div className="aspect-square bg-neutral-100">
        <img src="/placeholder.svg" alt="Design inspiration" className="hero-image" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="section-title mb-6">LOREM IPSUM DOLOR</h2>
        <p className="text-sm leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          cras vel lorem ultricies amet tempor, venenatis nec 
          fermentum lobortis. Lorem dolor tempor ultrices vestibulum 
          enim et blandit, pretium orci, ligula. Fusce suscipit 
          scelerisque tortor sit amet lacinia. Nam vitae euismod at 
          dictum in. Nulla vitae iaculis at purus mattis 
          elementum. Aliquam congue dapibus vitae ut.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
