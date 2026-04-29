import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const feedbacks = Array.from({ length: 9 }, (_, i) => `/relaxante/testimonials/feedback-${i + 1}.png`);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Depoimentos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4">O que nossas alunas dizem</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Resultados reais de profissionais que já aplicam o método.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-brand-soft transition-colors hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-brand-dark" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {feedbacks.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <img
                  src={src}
                  alt={`Depoimento ${idx + 1}`}
                  className="w-full rounded-3xl border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-brand-soft transition-colors hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-brand-dark" />
          </button>
        </div>
      </div>
    </section>
  );
};
