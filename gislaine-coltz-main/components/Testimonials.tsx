import React from 'react';
import { TestimonialsColumn } from './ui/testimonials-columns';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const firstColumn = TESTIMONIALS.slice(0, 1);
const secondColumn = TESTIMONIALS.slice(1, 2);
const thirdColumn = TESTIMONIALS.slice(2, 3);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-gc-gold/30 bg-gc-gold/10 py-1 px-4 rounded-lg">
              <span className="text-gc-dark font-medium text-sm">Depoimentos</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gc-text text-center">
            Histórias de quem já transformou a carreira
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            Veja o que nossas alunas têm a dizer sobre o curso.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="w-full md:w-1/3" />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block w-full md:w-1/3" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block w-full md:w-1/3" duration={17} />
        </div>
      </div>
    </section>
  );
};