import React from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1,000+",
      label: "Clientes Atendidos",
      description: "Empresas de todos os portes confiam em nossos serviços"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilidade",
      description: "Atendimento ininterrupto todos os dias do ano"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Satisfação",
      description: "Índice de satisfação dos nossos clientes"
    },
    {
      icon: Award,
      number: "10+",
      label: "Anos de Experiência",
      description: "Década de expertise em call center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Resultados que Impressionam
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Números que comprovam nossa excelência e dedicação em entregar resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
                <p className="text-blue-200 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para fazer parte dessas estatísticas?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Transforme seu atendimento ao cliente e junte-se às empresas que já alcançaram resultados extraordinários conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Demonstração
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;