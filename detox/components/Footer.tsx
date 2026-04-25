import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-soft py-12 border-t border-brand-primary/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Gislaine Coltz</h3>
        <p className="opacity-60 text-sm mb-8 max-w-md mx-auto">
          Transformando vidas e carreiras através da estética de alta performance.
        </p>
        <div className="text-xs opacity-40">
          &copy; {new Date().getFullYear()} Gislaine Coltz. Todos os direitos reservados.
        </div>
      </motion.div>
    </footer>
  );
};