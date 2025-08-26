import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const { t } = useLanguage();
  const news = [
    {
      id: 1,
      title: "A Leverage marcou, mais uma vez, presença na 22.ª edição da Conferência",
      subtitle: "Que teve lugar ontem, dia 3 de Junho",
      date: "03 Jul 2025",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQF_oOX-fE63zw/feedshare-shrink_1280/B4DZc7wEVkGkAs-/0/1749054148786?e=1758758400&v=beta&t=zyPmtPGre3mo7vJkLzyZci51rprDrtopmQN1HagLZb8",
      category: "Evento"
    },
    {
      id: 2,
      title: "A Leverage celebra 7 anos de excelência",
      subtitle: "Assinalámos com orgulho o nosso 7º aniversário.",
      date: "12 Jun 2025",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHXc9dYQ8HkJg/feedshare-shrink_800/B4DZbEYg2AHEAk-/0/1747051482999?e=1758758400&v=beta&t=Y_-aceVJT6gFOAPmiZaRrtCi2fP3E-DUW7CVg-h8xLM",
      category: "Entretenimento"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.subtitle}</p>
                
                <div className="flex items-center text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                  <span>{t('news.readmore')}</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            {t('news.viewall')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;