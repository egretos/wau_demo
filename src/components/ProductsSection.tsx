
import React from 'react';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="mb-16">
        <h2 className="japanese-text text-xl mb-1">和宇–WAU FOOD</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="image-grid-item">
          <img src="/placeholder.svg" alt="Furniture detail" />
          <p className="text-xs uppercase tracking-widest mt-2">TEXTURE</p>
          <p className="text-xs text-neutral-500">Weight, tactile qualities, and texture</p>
        </div>
        <div className="image-grid-item">
          <img src="/placeholder.svg" alt="Furniture material" />
          <p className="text-xs uppercase tracking-widest mt-2">MATERIALS USED</p>
          <p className="text-xs text-neutral-500">Wood, leather, cotton, and steel</p>
        </div>
        <div className="image-grid-item">
          <img src="/placeholder.svg" alt="Furniture design" />
          <p className="text-xs uppercase tracking-widest mt-2">DESIGN</p>
          <p className="text-xs text-neutral-500">Design for minimalist aesthetics</p>
        </div>
      </div>
      
      <div className="aspect-[3/1] bg-neutral-200 overflow-hidden mb-16">
        <div className="w-full h-full flex items-end p-12">
          <h2 className="quote-text max-w-3xl">
            INTERIOR DESIGN IS AS MUCH ABOUT WHAT YOU DON'T PUT INSIDE A SPACE AS WHAT YOU PUT IN.
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="section-title mb-8">FURNITURE DESIGN</h3>
          <p className="sub-heading">Minimalist Concepts</p>
          <p className="text-sm leading-relaxed mb-6">
            Working with furniture focused on clean lines and contextual design. Exploration of negative space, form, and function. Using natural wood, steel, and textiles to craft pieces that stand the test of time and evoke tranquility in spaces.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] bg-neutral-200">
            <img src="/placeholder.svg" alt="Chair design" className="hero-image" />
          </div>
          <div className="aspect-[3/4] bg-neutral-200">
            <img src="/placeholder.svg" alt="Furniture in space" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
