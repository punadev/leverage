import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-center items-center h-12 py-10 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'bg-green-600 backdrop-blur-md shadow-lg' : 'bg-green-900'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://leverage.co.ao/wp-content/uploads/2022/09/logo-5-1024x906.png" alt="Leverage" className="w-20" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 mx-8">
            <a href="#servicos" className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-green-500 text-white' : 'text-white hover:text-green-300'
            }`}>{t('nav.services')}</a>
            <a href="#blog" className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-green-500 text-white' : 'text-white hover:text-green-300'
            }`}>{t('nav.blog')}</a>
            <a href="#negociar" className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-green-500 text-white' : 'text-white hover:text-green-300'
            }`}>{t('nav.negotiate')}</a>
            <a href="#reconhecimento" className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-green-500 text-white' : 'text-white hover:text-green-300'
            }`}>{t('nav.recognition')}</a>
            <a href="#contacto" className={`font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-green-500 text-white' : 'text-white hover:text-green-300'
            }`}>{t('nav.contact')}</a>
          </nav>

          {/* Language Toggle & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-colors ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-green-500" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-green-500" onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-500" onClick={() => setIsMenuOpen(false)}>{t('nav.negotiate')}</a>
              <a href="#reconhecimento" className="block px-3 py-2 text-gray-700 hover:text-green-500" onClick={() => setIsMenuOpen(false)}>{t('nav.recognition')}</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-green-500" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;