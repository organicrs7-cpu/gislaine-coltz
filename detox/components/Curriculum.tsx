import React from 'react';
import { BookOpen, Droplets, Video, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Curriculum: React.FC = () => {
  const items = [
    {
      icon: Video,
      title: "Aulas Práticas Gravadas",
      desc: "Assista ao passo a passo completo da aplicação do protocolo em modelo real, com todos os detalhes filmados."
    },
    {
      icon: BookOpen,
      title: "E-book de Apoio",
      desc: "Receba um material completo em PDF com todo o embasamento teórico, lista de materiais e fornecedores."
    },
    {
      icon: Droplets,
      title: "Combinação de Ativos",
      desc: "Quais ativos usar e como combiná-los para gordura localizada, inchaço e retenção."
    },
    {
      icon: Zap,
      title: "Técnicas de Ativação",
      desc: "Manobras e aplicações que potencializam drasticamente a ação dos cosméticos."
    },
    {
      icon: Star,
      title: "Estratégia de Valor",
      desc: "Como transformar esse serviço em um diferencial que te valoriza de verdade."
    }
  ];

  return (
    <section className="py-24 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">O que você vai aprender</h2>
          <p className="text-gray-600 font-light">
            Com esse método, você vai oferecer algo que a maioria ainda faz errado ou nem sabe que existe — e sair na frente da concorrência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-soft/50 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-brand-soft rounded-xl flex items-center justify-center text-brand-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Bonus/Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-brand-secondary p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center text-white md:col-span-2 lg:col-span-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-primary opacity-20 transform rotate-45 scale-150"></div>
            <div className="relative z-10">
                <div className="mb-4 bg-white/20 inline-flex p-3 rounded-full">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Diferencial de Mercado</h3>
                <p className="text-brand-surface/90 text-sm">
                Aumente o valor percebido do seu atendimento instantaneamente.
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};