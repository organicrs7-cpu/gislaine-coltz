import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TabelaInfo } from './components/TabelaInfo';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  const handleScrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-brand-surface selection:bg-brand-soft selection:text-brand-dark">
      <main>
        <Hero />
        <Problem />
        <TabelaInfo />
        <WhoIsItFor />
        <Pricing />
        <Faq />
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-brand-soft md:hidden z-50">
        <button
          onClick={handleScrollToPricing}
          className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-full shadow-lg text-sm tracking-wide cursor-pointer"
        >
          QUERO A TABELA POR R$ 37
        </button>
      </div>
    </div>
  );
}

export default App;
