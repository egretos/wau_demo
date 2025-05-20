
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4">
      <button 
        className={`text-xs uppercase ${i18n.language === 'en' ? 'font-bold' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        {t('languageSwitcher.en')}
      </button>
      <button 
        className={`text-xs uppercase ${i18n.language === 'uk' ? 'font-bold' : ''}`}
        onClick={() => changeLanguage('uk')}
      >
        {t('languageSwitcher.uk')}
      </button>
      <button 
        className={`text-xs uppercase ${i18n.language === 'ja' ? 'font-bold' : ''}`}
        onClick={() => changeLanguage('ja')}
      >
        {t('languageSwitcher.ja')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
