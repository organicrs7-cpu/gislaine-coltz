import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Curriculum } from './components/Curriculum';
import { ForWho } from './components/ForWho';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Obrigado } from './components/Obrigado';

function App() {
  const isObrigado = window.location.pathname.includes('obrigado') || 
                     window.location.search.includes('obrigado') || 
                     window.location.hash.includes('obrigado');

  if (isObrigado) {
    return <Obrigado />;
  }

  return (
    <div className="min-h-screen font-sans bg-brand-surface selection:bg-brand-soft selection:text-brand-dark">
      <main>
        <Hero />
        <PainPoints />
        <Curriculum />
        <ForWho />
        <About />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-brand-soft md:hidden z-50">
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-full shadow-lg text-sm tracking-wide"
        >
          Garantir Minha Vaga
        </button>
      </div>
    </div>
  );
}

export default App;
