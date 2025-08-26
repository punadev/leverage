import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Gallery />
        <News />
        <Promotions />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;