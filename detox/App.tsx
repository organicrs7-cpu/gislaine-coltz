import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { EarningsCalculator } from './components/EarningsCalculator';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-surface selection:bg-brand-soft selection:text-brand-dark">
      <header className="detox-offer-bar">
        <a href="https://pay.cakto.com.br/35sa2qv" target="_blank" rel="noopener noreferrer">
          <span className="detox-offer-tag">Novidade</span>
          <strong>Detox em 4x sem juros no Pix.</strong>{' '}
          <span className="detox-offer-detail">Pague a entrada e libere todo o conteúdo.</span>
        </a>
      </header>
      <main>
        <Hero />
        <EarningsCalculator />
        <PainPoints />
        <About />
        <Curriculum />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
