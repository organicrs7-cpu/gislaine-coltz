import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Instructor } from './components/Instructor';
import { Credentials } from './components/Credentials';
import { Modules } from './components/Modules';
import { BonusShowcase } from './components/BonusShowcase';
import { Pricing } from './components/Pricing';

import { ExtendedTestimonials } from './components/ExtendedTestimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PhotoMarquee } from './components/ui/photo-marquee';

function App() {
  return (
    <main className="w-full overflow-x-hidden text-gc-text antialiased">
      <Header />
      <Hero />
      <div id="about">
        <Features />
        <Instructor />
        <PhotoMarquee
          title="Imersão na Tailândia"
          description="Momentos de aprendizado e vivência da cultura e técnicas originais."
          photos={[
            "/images/thailand/01.jpg",
            "/images/thailand/02.jpg",
            "/images/thailand/03.jpg",
            "/images/thailand/04.jpg",
            "/images/thailand/05.jpg"
          ]}
        />
        <Credentials />
      </div>
      <div id="modules">
        <Modules />
      </div>

      <ExtendedTestimonials />
      <BonusShowcase />
      <Pricing />
      <div id="faq">
        <Faq />

      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;