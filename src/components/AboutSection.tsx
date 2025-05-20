
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-20">
      <div className="aspect-square bg-neutral-100">
        <img src="/placeholder.svg" alt="Design inspiration" className="hero-image" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="section-title mb-6">{t('about.title')}</h2>
        <p className="text-sm leading-relaxed mb-8">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
