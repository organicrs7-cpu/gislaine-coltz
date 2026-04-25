import React from 'react';
import { AlertCircle, TrendingDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: TrendingDown,
      title: "Cobra Pouco?",
      text: "Entrega tudo no atendimento... mas sente que está cobrando pouco e não vê o retorno financeiro?"
    },
    {
      icon: HelpCircle,
      title: "Dificuldade na Fidelização?",
      text: "Tem dificuldade pra fidelizar clientes ou se destacar como referência na sua região?"
    },
    {
      icon: AlertCircle,
      title: "Falta Diferencial?",
      text: "Sabe que poderia oferecer resultados melhores... mas sente que falta aquele 'algo a mais'?"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Identificação</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4">Tá se sentindo assim?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Você não está sozinha. A maioria das profissionais estagna por não ter um método validado.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group p-8 rounded-3xl bg-brand-surface border border-brand-soft/30 hover:shadow-xl hover:shadow-brand-soft/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-10 rounded-3xl bg-brand-primary text-white shadow-2xl shadow-brand-primary/30 max-w-4xl mx-auto relative overflow-hidden">
             {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary opacity-20 rounded-full blur-2xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">A virada de chave</h3>
              <p className="text-brand-soft text-lg font-light">
                O protocolo Detox com Manta Térmica não é só mais um procedimento. É a chave pra você se tornar referência em resultados e valor percebido.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};