import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-surface selection:bg-brand-soft selection:text-brand-dark">
      <main>
        <Hero />
        <PainPoints />
        <About />
        <Curriculum />
        <Pricing />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA for better conversion */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-brand-soft md:hidden z-50">
        <button 
           onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
           className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-full shadow-lg"
        >
           Quero o Protocolo por R$ 67
        </button>
      </div>
    </div>
  );
}

export default App;