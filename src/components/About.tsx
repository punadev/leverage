import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Nossa Missão",
      description: "Conectar marcas e clientes através de conversas autênticas e personalizadas."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Nossa Visão",
      description: "Ser a ponte de comunicação mais confiável entre empresas e seus clientes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excelência",
      description: "Comprometidos com a qualidade e resultados excepcionais em cada interação."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para otimizar cada conversa e resultado."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title').split(' ')[0]} <span className="text-green-600">{t('about.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
               {t('about.description')}
            </p>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid">
            <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.purpose.title').split(' ').slice(0, -1).join(' ')} <span className="text-green-600">{t('about.purpose.title').split(' ').slice(-1)}</span>
            </h2>
            <p className="text- text-gray-600 mb-8 text-justify">
               {t('about.purpose.description')}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;