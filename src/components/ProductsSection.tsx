
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="mb-16">
        <h2 className="japanese-text text-xl mb-1">和宇–{t('products.title')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="image-grid-item">
          <img src="images/photo_2025-05-20_11-11-14.jpg" alt="Furniture detail" />
          <p className="text-xs uppercase tracking-widest mt-2">{t('products.texture')}</p>
          <p className="text-xs text-neutral-500">{t('products.textureDescription')}</p>
        </div>
        <div className="image-grid-item">
          <img src="public/images/photo_2025-05-20_11-11-35.jpg" alt="Furniture material" />
          <p className="text-xs uppercase tracking-widest mt-2">{t('products.materials')}</p>
          <p className="text-xs text-neutral-500">{t('products.materialsDescription')}</p>
        </div>
        <div className="image-grid-item">
          <img src="/placeholder.svg" alt="Furniture design" />
          <p className="text-xs uppercase tracking-widest mt-2">{t('products.design')}</p>
          <p className="text-xs text-neutral-500">{t('products.designDescription')}</p>
        </div>
      </div>
      
      <div className="aspect-[3/1] bg-neutral-200 overflow-hidden mb-16">
        <div className="w-full h-full flex items-end p-12">
          <h2 className="quote-text max-w-3xl">
            {t('products.quote')}
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="section-title mb-8">{t('products.furnitureTitle')}</h3>
          <p className="sub-heading">{t('products.minimalistConcepts')}</p>
          <p className="text-sm leading-relaxed mb-6">
            {t('products.furnitureDescription')}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] bg-neutral-200">
            <img src="/placeholder.svg" alt="Chair design" className="hero-image" />
          </div>
          <div className="aspect-[3/4] bg-neutral-200">
            <img src="images/photo_2025-05-20_11-15-28.jpg" alt="Furniture in space" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
