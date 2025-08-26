import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.services': 'Serviços',
    'nav.blog': 'Blog',
    'nav.negotiate': 'Negociar',
    'nav.recognition': 'Reconhecimento',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'A Voz que aproxima a sua marca dos seus clientes.',
    'hero.subtitle': 'Transformamos conversas em conexões reais, Falamos a linguagem do seu cliente.',

    // About
    'about.title': 'Sobre a Leverage',
    'about.description': 'Somos uma Empresa especialista em atendimento e experiência de cliente, consultoria e serviços digitais.',
    'about.purpose.title': 'O Nosso Propósito',
    'about.purpose.description': 'A Leverage é uma Empresa de Serviço a Cliente em Angola, com o propósito de elevar os negócios dos nossos Clientes. Focamo-nos na metodologia Agile, criando entregáveis com rapidez e precisão. Criamos soluções de colaboração avançada entre operações, desenvolvimento e especificações de Clientes. A liderança e foco nas vendas são ambos objectivos fundamentais para a Leverage, que aposta no desenvolvimento contínuo das suas pessoas: uma equipa forte, robusta e altamente motivada para entregar alavancagem para os nossos parceiros de negócio e para o mundo.',

    // Gallery/Services
    'gallery.title': 'Muito Além de um Serviço',
    'gallery.subtitle': 'Cada interação, uma experiência mais humana com a sua marca.',
    'service.info': 'Informações',
    'service.info.desc': 'Atendimento especializado para esclarecimento de dúvidas e fornecimento de informações precisas sobre produtos e serviços.',
    'service.customer': 'Atenção ao Cliente',
    'service.customer.desc': 'Atendimento personalizado focado na experiência do cliente e fortalecimento da imagem da sua marca.',
    'service.technical': 'Apoio Técnico',
    'service.technical.desc': 'Suporte técnico especializado para resolução de problemas e orientações sobre produtos e serviços.',
    'service.booking': 'Reservas/Agendamentos',
    'service.booking.desc': 'Gestão eficiente de reservas e agendamentos, otimizando a agenda dos seus clientes.',
    'service.leads': 'Captação de Leads',
    'service.leads.desc': 'Identificação e qualificação de potenciais clientes para impulsionar o crescimento do seu negócio.',
    'service.telesales': 'Televendas',
    'service.telesales.desc': 'Vendas por telefone com abordagem consultiva e foco na satisfação do cliente.',
    'service.research': 'Pesquisas Web',
    'service.research.desc': 'Colecta e análise de dados através de pesquisas online para insights estratégicos.',
    'service.data': 'Inserção de Dados',
    'service.data.desc': 'Processamento e organização de informações com precisão e confidencialidade.',
    'service.retention': 'Reativação/Retenção',
    'service.retention.desc': 'Estratégias personalizadas para reativar clientes inativos e aumentar a retenção.',
    'service.billing': 'Cobranças',
    'service.billing.desc': 'Gestão de cobranças com abordagem respeitosa e eficaz para recuperação de créditos.',
    'service.support': 'Linha de Apoio',
    'service.support.desc': 'Canal dedicado para suporte contínuo e resolução de questões dos consumidores.',
    'service.profiling': 'Caracterização de Clientes',
    'service.profiling.desc': 'Análise detalhada do perfil dos clientes para estratégias de marketing direcionadas.',

    // News
    'news.title': 'Conteúdos mais populares',
    'news.subtitle': 'Fica a par das últimas novidades',
    'news.readmore': 'Ler mais',
    'news.viewall': 'Ver Todas as Notícias',

    // Promotions
    'promotions.title': 'É hora de cuidarmos a voz da sua empresa',
    'promotions.subtitle': 'A Voz da Sua Marca. A Experiência do Seu Cliente.',
    'promotions.button': 'Marcar Consulta',
    'modal.title': 'Marcar Consulta',
    'form.name': 'Nome',
    'form.company': 'Nome da Empresa',
    'form.email': 'Email',
    'form.segment': 'Segmentação',
    'form.phone': 'Número de Telefone',
    'form.description': 'Breve Descrição',
    'form.placeholder': 'Faça um resume das suas necessidades...',
    'form.submit': 'Enviar Solicitação',
    'form.success.title': 'Mensagem Enviada com Sucesso!',
    'form.success.message': 'A nossa equipa comercial irá entrar em contacto brevemente.',

    // Footer
    'footer.contact': 'Contacto',
    'footer.copyright': 'Copyright 2025 - LEVERAGE CONTACT CENTER, LDA - All rights reserved'
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.negotiate': 'Negotiate',
    'nav.recognition': 'Recognition',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'The Voice that brings your brand closer to your customers.',
    'hero.subtitle': 'We transform conversations into real connections, We speak your customer\'s language.',

    // About
    'about.title': 'About Leverage',
    'about.description': 'We are a company specialized in customer service and experience, consulting and digital services.',
    'about.purpose.title': 'Our Purpose',
    'about.purpose.description': 'Leverage is a Customer Service Company in Angola, with the purpose of elevating our Clients\' businesses. We focus on Agile methodology, creating deliverables with speed and precision. We create advanced collaboration solutions between operations, development and Client specifications. Leadership and sales focus are both fundamental objectives for Leverage, which invests in the continuous development of its people: a strong, robust and highly motivated team to deliver leverage for our business partners and for the world.',

    // Gallery/Services
    'gallery.title': 'Much More Than a Service',
    'gallery.subtitle': 'Every interaction, a more human experience with your brand.',
    'service.info': 'Information',
    'service.info.desc': 'Specialized service for clarifying doubts and providing accurate information about products and services.',
    'service.customer': 'Customer Care',
    'service.customer.desc': 'Personalized service focused on customer experience and strengthening your brand image.',
    'service.technical': 'Technical Support',
    'service.technical.desc': 'Specialized technical support for problem solving and guidance on products and services.',
    'service.booking': 'Reservations/Appointments',
    'service.booking.desc': 'Efficient management of reservations and appointments, optimizing your customers\' schedule.',
    'service.leads': 'Lead Generation',
    'service.leads.desc': 'Identification and qualification of potential customers to boost your business growth.',
    'service.telesales': 'Telesales',
    'service.telesales.desc': 'Phone sales with consultative approach and focus on customer satisfaction.',
    'service.research': 'Web Research',
    'service.research.desc': 'Data collection and analysis through online surveys for strategic insights.',
    'service.data': 'Data Entry',
    'service.data.desc': 'Processing and organizing information with precision and confidentiality.',
    'service.retention': 'Reactivation/Retention',
    'service.retention.desc': 'Personalized strategies to reactivate inactive customers and increase retention.',
    'service.billing': 'Collections',
    'service.billing.desc': 'Collection management with respectful and effective approach for credit recovery.',
    'service.support': 'Support Line',
    'service.support.desc': 'Dedicated channel for continuous support and resolution of consumer issues.',
    'service.profiling': 'Customer Profiling',
    'service.profiling.desc': 'Detailed analysis of customer profiles for targeted marketing strategies.',

    // News
    'news.title': 'Most Popular Content',
    'news.subtitle': 'Stay up to date with the latest news',
    'news.readmore': 'Read more',
    'news.viewall': 'View All News',

    // Promotions
    'promotions.title': 'It\'s time to take care of your company\'s voice',
    'promotions.subtitle': 'Your Brand\'s Voice. Your Customer\'s Experience.',
    'promotions.button': 'Schedule Consultation',
    'modal.title': 'Schedule Consultation',
    'form.name': 'Name',
    'form.company': 'Company Name',
    'form.email': 'Email',
    'form.segment': 'Segmentation',
    'form.phone': 'Phone Number',
    'form.description': 'Brief Description',
    'form.placeholder': 'Summarize your needs...',
    'form.submit': 'Send Request',
    'form.success.title': 'Message Sent Successfully!',
    'form.success.message': 'Our sales team will contact you shortly.',

    // Footer
    'footer.contact': 'Contact',
    'footer.copyright': 'Copyright 2025 - LEVERAGE CONTACT CENTER, LDA - All rights reserved'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};