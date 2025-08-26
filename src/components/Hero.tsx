import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
{/* "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"*/}
const Hero = () => {
  const { t } = useLanguage();
  return (
    
    <section className="relative h-screen overflow-hidden">
      <img 
        src="levarage.jpg" 
        alt="Dia da Família" 
        className="w-full h-full md:h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center">
        <div className="text-white ml-16 grid grid-cols-1 max-w-md">
          <h1 className="text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl">{t('hero.subtitle')}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;