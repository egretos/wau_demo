
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-wider mb-6">
            {t('hero.subtitle')}
          </p>
          <div className="space-y-2 mt-auto">
            <p className="text-lg font-light">{t('hero.tagline1')}</p>
            <p className="text-lg font-light">{t('hero.tagline2')}</p>
            <p className="text-lg font-light">{t('hero.tagline3')}</p>
          </div>
        </div>
        
        {/* Right side - Two images */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-300 h-full">
            <AspectRatio ratio={3/4} className="h-full">
              <img 
                src="images/DSC_6891-1.jpg" 
                alt={t('hero.image1Alt')} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="bg-neutral-200 h-full">
            <AspectRatio ratio={3/4} className="h-full">
              <img 
                src="images/DSC_6973-1.jpg" 
                alt={t('hero.image2Alt')} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;