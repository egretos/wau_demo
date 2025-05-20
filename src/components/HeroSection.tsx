
import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 lg:px-24 py-12">
      <div className="aspect-[4/3] bg-neutral-200">
        <img src="/placeholder.svg" alt="Minimalist chair design" className="hero-image" />
      </div>
      <div className="aspect-[4/3] bg-neutral-200 mt-0 md:mt-12">
        <img src="/placeholder.svg" alt="Minimalist chair closeup" className="hero-image" />
      </div>
      <div className="md:col-span-2 mt-4 md:mt-8">
        <div className="max-w-md">
          <p className="sub-heading">{t('hero.title')}</p>
          <p className="text-sm leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
