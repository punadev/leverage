import React from 'react';
import { Phone, MessageSquare, BarChart3, Headphones, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Atendimento Ativo",
      description: "Campanhas de vendas, pesquisas de satisfação e relacionamento proativo com clientes.",
      features: ["Vendas por telefone", "Pesquisas de mercado", "Follow-up de clientes"]
    },
    {
      icon: Headphones,
      title: "Atendimento Receptivo",
      description: "SAC, suporte técnico e atendimento ao cliente com qualidade excepcional.",
      features: ["SAC 24/7", "Suporte técnico", "Central de relacionamento"]
    },
    {
      icon: MessageSquare,
      title: "Atendimento Digital",
      description: "Chat online, WhatsApp Business e redes sociais integrados em uma plataforma.",
      features: ["Chat ao vivo", "WhatsApp Business", "Redes sociais"]
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      description: "Dashboards em tempo real com métricas de performance e análises detalhadas.",
      features: ["Relatórios em tempo real", "Métricas de performance", "Análises preditivas"]
    },
    {
      icon: Clock,
      title: "Plantão 24/7",
      description: "Atendimento ininterrupto todos os dias da semana com equipes especializadas.",
      features: ["Disponibilidade total", "Equipes noturnas", "Feriados e finais de semana"]
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Proteção de dados, conformidade LGPD e certificações de segurança.",
      features: ["Conformidade LGPD", "Certificações ISO", "Segurança de dados"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Muito Além de um Serviço
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de call center adaptadas às necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 group hover:border-blue-200">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;