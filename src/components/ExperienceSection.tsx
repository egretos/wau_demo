
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24 py-20 bg-neutral-100">
      <div>
        <h3 className="section-title text-2xl md:text-3xl mb-6">{t('experience.past')}</h3>
        <div className="space-y-2">
          <p className="feature-item">{t('experience.pastItems.item1')}</p>
          <p className="feature-item">{t('experience.pastItems.item2')}</p>
          <p className="feature-item">{t('experience.pastItems.item3')}</p>
          <p className="feature-item">{t('experience.pastItems.item4')}</p>
          <p className="feature-item">{t('experience.pastItems.item5')}</p>
          <p className="feature-item">{t('experience.pastItems.item6')}</p>
        </div>
      </div>
      <div>
        <h3 className="section-title text-2xl md:text-3xl mb-6">{t('experience.present')}</h3>
        <div className="space-y-2">
          <p className="feature-item">{t('experience.presentItems.item1')}</p>
          <p className="feature-item">{t('experience.presentItems.item2')}</p>
          <p className="feature-item">{t('experience.presentItems.item3')}</p>
          <p className="feature-item">{t('experience.presentItems.item4')}</p>
          <p className="feature-item">{t('experience.presentItems.item5')}</p>
          <p className="feature-item">{t('experience.presentItems.item6')}</p>
          <p className="feature-item">{t('experience.presentItems.item7')}</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
