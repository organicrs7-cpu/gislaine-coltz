import React from 'react';
import { useInView } from '../hooks/useInView';

export const About: React.FC = () => {
  const { ref: imgRef, isInView: imgVisible } = useInView({ rootMargin: '-100px' });
  const { ref: textRef, isInView: textVisible } = useInView({ rootMargin: '-100px' });
  const { ref: cardsRef, isInView: cardsVisible } = useInView();

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="about">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div
            ref={imgRef}
            className="lg:w-5/12"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-secondary rounded-3xl rotate-3 opacity-20 translate-y-4 translate-x-4"></div>
              <img
                src="/clinica/gislaine-67.webp"
                alt="Gislaine Coltz"
                loading="lazy"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4] border-4 border-brand-primary/30"
              />
            </div>
          </div>

          <div
            ref={textRef}
            className="lg:w-7/12"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            }}
          >
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs font-semibold">Sua Mentora</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">Gislaine Coltz</h2>
            <h3 className="text-xl text-brand-soft mb-8 font-light italic">Massoterapeuta Clínica e Mentora Internacional</h3>

            <div className="space-y-6 text-brand-surface/80 leading-relaxed text-base font-light">
              <p>
                Especialista em terapias manuais e descompressão neural de alta performance. Desenvolveu um método exclusivo para o tratamento de dores ciáticas e do quadril que combina anatomia aplicada, liberação miofascial precisa e o uso estratégico das Pedras Quentes.
              </p>
              <p>
                Gislaine fala com propriedade de quem entende a dor nos dois lados da maca: ela mesma convive com a <strong className="text-white">Síndrome do Piriforme</strong>. Essa vivência pessoal a levou a refinar manobras indolores e ergonômicas, criando um tratamento que resolve a dor do paciente sem sacrificar as mãos da terapeuta.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10" ref={cardsRef}>
                <div
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s',
                  }}
                >
                  <h4 className="font-bold text-lg mb-2 text-brand-soft">Experiência na Pele</h4>
                  <p className="text-xs font-light">Ela tem a Síndrome do Piriforme e criou o método para ser um alívio real e sem dor, testado na prática.</p>
                </div>
                <div
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s',
                  }}
                >
                  <h4 className="font-bold text-lg mb-2 text-brand-soft">Ergonomia e Proteção</h4>
                  <p className="text-xs font-light">Aprenda a aplicar pressões profundas usando peso corporal e pedras quentes, sem desgastar seus polegares.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
