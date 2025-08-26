import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Diretora Comercial",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "A CallCenter Pro transformou completamente nosso atendimento. Aumentamos nossa satisfação do cliente em 40% nos primeiros 3 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Equipe profissional, tecnologia avançada e resultados excepcionais. Não conseguimos imaginar nosso negócio sem eles.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente de Marketing",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "O atendimento 24/7 e os relatórios detalhados nos ajudaram a otimizar nossas campanhas e aumentar as conversões.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Conheça as experiências de quem já transformou seu negócio conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 relative">
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Junte-se a mais de 1000 empresas satisfeitas
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Descubra como podemos transformar seu atendimento ao cliente
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;