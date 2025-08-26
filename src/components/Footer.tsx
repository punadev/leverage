import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Smartphone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="contacto" className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/90">Condomínio Belas Business Park Edifício Kwanza, Piso 3 – Talatona | Luanda – Angola</p>
                </div>
            </div>
            <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <p className="text-white/90">recrutamento@leverage.co.ao</p>
              </div>
          </div>

          {/* Services */}
          <div>
            <img src="https://leverage.co.ao/wp-content/uploads/2022/09/cropped-favicon-270x270.png" alt="" className="animate-bounce" />
          </div>
          

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white/90">+244 923 190 833</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <p className="text-white/90">geral@leverage.co.ao</p>
              </div>
              <div className="flex space-x-4">
              <a href="#"><Facebook className="h-6 w-6 cursor-pointer hover:text-green-200 transition-colors" /></a>
              <a href="#"><Instagram className="h-6 w-6 cursor-pointer hover:text-green-200 transition-colors" /></a>
              <a href="https://www.linkedin.com/company/leveragecontactcenter/"><Linkedin className="h-6 w-6 cursor-pointer hover:text-green-200 transition-colors" /></a>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            
            <p className="text-white/90 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;