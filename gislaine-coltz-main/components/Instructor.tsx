import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../constants';
import { Instagram, Star } from 'lucide-react';

export const Instructor: React.FC = () => {
  const textureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textureRef.current) {
        // Move the background slightly slower than scroll to create depth
        const yPos = window.scrollY * 0.05;
        textureRef.current.style.backgroundPositionY = `${yPos}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gc-dark relative text-white overflow-hidden">
      {/* Texture Overlay */}
      <div
        ref={textureRef}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 bg-gc-gold transform rotate-6 rounded-3xl opacity-20"></div>
              <img
                src={IMAGES.bio}
                alt="Gislaine Coltz"
                className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-gc-gold/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gc-dark p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gc-gold text-gc-gold" />)}
                </div>
                <p className="font-bold text-lg">Referência Nacional</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div>
              <h2 className="text-gc-gold font-bold tracking-widest uppercase mb-2 text-center lg:text-left">Sua Mentora</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">Gislaine Coltz</h3>
              <div className="w-20 h-1 bg-white rounded-full mb-8 mx-auto lg:mx-0"></div>
            </div>

            <p className="text-gray-100 text-lg leading-relaxed opacity-90 text-center lg:text-left">
              Sou Gislaine Coltz, terapeuta integrativa e professora. Minha jornada me levou até a Tailândia, onde vivi uma imersão profunda nas técnicas orientais de bem-estar. Essa experiência transformou minha forma de trabalhar e deu origem ao método Tok Thai, uma fusão entre técnica, sensibilidade e consciência.
            </p>

            <p className="text-gray-100 text-lg leading-relaxed opacity-90 text-center lg:text-left">
              Hoje ensino profissionais a atuarem com propósito, segurança e acolhimento. Acredito no poder do toque para curar, conectar e abrir caminhos e é isso que compartilho em cada curso que desenvolvo.
            </p>

            <div className="pt-6">
              <a href="https://www.instagram.com/gislaine.coltz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white border-b border-gc-gold pb-1 hover:text-gc-gold transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@gislaine.coltz</span>
              </a>
            </div>
          </div>

        </div>
      </div>



    </section >
  );
};