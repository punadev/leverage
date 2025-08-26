import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="reconhecimento" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <img src="https://shareables-prod-static.clutch.co/badges/top_clutch.co_answering_services_company_supply_chain_logistics_and_transport_2025.svg" alt="Top Clutch.co Answering Services Company Supply Chain, Logistics, and Transport 2025"/>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            <div className="">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excelência Reconhecida no Mercado Internacional
              </h2>
              <p className='text-xl text-gray-600'>A Leverage foi distinguida com o selo Clutch, prova de que nossa dedicação e qualidade são reconhecidas internacionalmente por clientes e pelo mercado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;