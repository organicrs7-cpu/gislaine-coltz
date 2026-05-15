import React from 'react';
import { motion } from 'framer-motion';

const PHOTOS = [
  '/relaxante/thailand/01.jpg',
  '/relaxante/thailand/02.jpg',
  '/relaxante/thailand/03.jpg',
  '/relaxante/thailand/04.jpg',
  '/relaxante/thailand/05.jpg',
];

export const ThailandMarquee: React.FC = () => {
  const track = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];

  return (
    <section className="py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Formação Internacional</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-soft mt-3 mb-4">
            Imersão na Tailândia
          </h2>
          <p className="text-brand-soft/60 text-lg font-light max-w-xl mx-auto">
            Onde as técnicas originais do Thai Spa foram vivenciadas de dentro para fora — antes de virar método.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden [--gap:1rem] group">
        <div
          className="flex shrink-0 group-hover:[animation-play-state:paused]"
          style={{
            gap: '1rem',
            animation: 'marquee 32s linear infinite',
          }}
        >
          {track.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-secondary/20 shadow-xl"
            >
              <img
                src={src}
                alt={`Imersão Tailândia ${(i % 5) + 1}`}
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent" />
      </div>
    </section>
  );
};
