import React, { useState } from 'react';
import { Gift, Star, X, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Promotions = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    segmentacao: '',
    telefone: '',
    descricao: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSuccess(false);
      setFormData({ nome: '', empresa: '', email: '', segmentacao: '', telefone: '', descricao: '' });
    }, 3000);
  };
  return (
    <section id="negociar" className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('promotions.title')}
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              {t('promotions.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                {t('promotions.button')}
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://img.freepik.com/free-photo/smiling-customer-service-agent_23-2151933125.jpg?t=st=1755972153~exp=1755975753~hmac=750d9d37a7a9ebd28006d4fa17ab43598c6f3b7aa95270b4191a27e88ee0eaa5&w=1480" 
                alt="Família feliz com promoção" 
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 -translate-x-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 translate-x-24"></div>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!isSuccess ? (
              <>
                <div className="flex justify-between items-center p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-900">{t('modal.title')}</h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.name')}</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.company')}</label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.email')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.segment')}</label>
                    <select
                      required
                      value={formData.segmentacao}
                      onChange={(e) => setFormData({...formData, segmentacao: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="saude">Saúde</option>
                      <option value="educacao">Educação</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.phone')}</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.description')}</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.descricao}
                      onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder={t('form.placeholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    {t('form.submit')}
                  </button>
                </form>
              </>
            ) : (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('form.success.title')}</h3>
                <p className="text-gray-600">{t('form.success.message')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Promotions;