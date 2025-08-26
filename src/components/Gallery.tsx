import React, { useState } from 'react';
import { Phone, Users, Wrench, Calendar, Target, ShoppingCart, Search, Database, RotateCcw, CreditCard, Headphones, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <Phone className="h-8 w-8" />,
      titleKey: "service.info",
      descKey: "service.info.desc"
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8" />,
      titleKey: "service.customer",
      descKey: "service.customer.desc"
    },
    {
      id: 3,
      icon: <Wrench className="h-8 w-8" />,
      titleKey: "service.technical",
      descKey: "service.technical.desc"
    },
    {
      id: 4,
      icon: <Calendar className="h-8 w-8" />,
      titleKey: "service.booking",
      descKey: "service.booking.desc"
    },
    {
      id: 5,
      icon: <Target className="h-8 w-8" />,
      titleKey: "service.leads",
      descKey: "service.leads.desc"
    },
    {
      id: 6,
      icon: <ShoppingCart className="h-8 w-8" />,
      titleKey: "service.telesales",
      descKey: "service.telesales.desc"
    },
    {
      id: 7,
      icon: <Search className="h-8 w-8" />,
      titleKey: "service.research",
      descKey: "service.research.desc"
    },
    {
      id: 8,
      icon: <Database className="h-8 w-8" />,
      titleKey: "service.data",
      descKey: "service.data.desc"
    },
    {
      id: 9,
      icon: <RotateCcw className="h-8 w-8" />,
      titleKey: "service.retention",
      descKey: "service.retention.desc"
    },
    {
      id: 10,
      icon: <CreditCard className="h-8 w-8" />,
      titleKey: "service.billing",
      descKey: "service.billing.desc"
    },
    {
      id: 11,
      icon: <Headphones className="h-8 w-8" />,
      titleKey: "service.support",
      descKey: "service.support.desc"
    },
    {
      id: 12,
      icon: <UserCheck className="h-8 w-8" />,
      titleKey: "service.profiling",
      descKey: "service.profiling.desc"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-9999">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-8 text-center border hover:border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-500">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{t(service.titleKey)}</h3>
              </div>
              
              {/* Modal Hover */}
              {hoveredService === service.id && (
                <div className="absolute top-full left-0 right-0 mt-2 z-10 animate-in fade-in duration-200">
                  <div className="bg-white rounded-xl shadow-2xl border p-6 mx-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t(service.titleKey)}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">{t(service.descKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;