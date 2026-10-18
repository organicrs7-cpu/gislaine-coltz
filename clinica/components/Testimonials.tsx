import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const prints = Array.from({ length: 9 }, (_, i) => `/clinica/depoimentos/print-${i + 1}.webp`);

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useInView();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs font-semibold">Depoimentos reais</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4">
            O que dizem as <span className="italic text-brand-primary">alunas da Gi</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-sm">
            Mensagens recebidas no WhatsApp de profissionais que já estudaram com a Gislaine.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto" ref={sectionRef}>
          <button
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-brand-soft hover:text-brand-dark transition-colors duration-300 hidden lg:block border border-brand-soft/50"
          >
            <ChevronLeft className="w-5 h-5 text-brand-primary" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {prints.map((src, idx) => (
              <div
                key={src}
                className="shrink-0 w-[240px] md:w-[270px] snap-center rounded-3xl overflow-hidden border border-brand-soft/60 shadow-md bg-brand-surface"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'scale(1)' : 'scale(0.95)',
                  transition: `opacity 0.5s ease ${idx * 0.05}s, transform 0.5s ease ${idx * 0.05}s`,
                }}
              >
                <img
                  src={src}
                  alt={`Depoimento de aluna ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-brand-soft hover:text-brand-dark transition-colors duration-300 hidden lg:block border border-brand-soft/50"
          >
            <ChevronRight className="w-5 h-5 text-brand-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
