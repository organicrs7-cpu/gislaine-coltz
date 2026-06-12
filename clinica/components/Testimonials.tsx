import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Renata Mendes",
    role: "Massoterapeuta Clínica",
    avatar: "RM",
    rating: 5,
    text: "Atendi um paciente que mal conseguia pisar no chão de tanta dor ciática. Apliquei os testes de diferenciação, identifiquei a Síndrome do Piriforme e usei o calor das Pedras Quentes para descompressão superficial. Ele saiu da maca sem dor e me indicou para mais 3 pessoas! O curso se pagou em 2 dias."
  },
  {
    name: "Dra. Ana Carla Souza",
    role: "Fisioterapeuta",
    avatar: "AS",
    rating: 5,
    text: "Eu sofria muito com dor nas minhas articulações de tanto fazer pressão profunda nos glúteos de pacientes travados. O protocolo da Gislaine me salvou. A liberação com o antebraço e a técnica das pedras quentes facilitaram tudo. Hoje eu trato a dor ciática sem me cansar física e ergonomicamente."
  },
  {
    name: "Mariana Lima",
    role: "Terapeuta Integrativa",
    avatar: "ML",
    rating: 5,
    text: "A didática da Gislaine é espetacular. Ela explica anatomia palpatória e posicionamento de perna com muita simplicidade. Minha segurança para diagnosticar aumentou 100%. Meus clientes notaram a diferença e agora me procuram especificamente para dores no quadril e pernas."
  },
  {
    name: "Beatriz Oliveira",
    role: "Massoterapeuta e Esteticista",
    avatar: "BO",
    rating: 5,
    text: "O diferencial das pedras quentes na clínica é fantástico. O paciente relaxa tanto com o calor que eu consigo fazer a liberação miofascial profunda do piriforme de forma indolor. O nível 4 de dor na escala realmente funciona e deixa o paciente muito confortável."
  },
  {
    name: "Gustavo Rocha",
    role: "Quiropraxista e Massoterapeuta",
    avatar: "GR",
    rating: 5,
    text: "Excelente curso! A aula de ajustes manuais do quadril e liberação de iliopsoas fechou o protocolo com chave de ouro. Não é apenas tratar o ponto da dor, é devolver a mobilidade do quadril. Meus resultados clínicos deram um salto gigantesco."
  }
];

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

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs font-semibold">Resultados</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3 mb-4">
            Depoimentos de quem já <span className="italic text-brand-primary">transformou</span> seus atendimentos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-sm">
            Profissionais de todo o Brasil que aplicam o método de massoterapia clínica e colhem resultados reais desde a primeira sessão.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Botões de navegação */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-brand-soft hover:text-brand-dark transition-colors duration-300 hidden lg:block border border-brand-soft/50"
          >
            <ChevronLeft className="w-5 h-5 text-brand-primary" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="shrink-0 w-[300px] md:w-[360px] snap-center bg-brand-surface rounded-3xl p-8 border border-brand-soft/40 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-8 text-brand-soft/40">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-brand-soft/60 pt-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shadow-inner shrink-0">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white shadow-xl rounded-full p-4 hover:bg-brand-soft hover:text-brand-dark transition-colors duration-300 hidden lg:block border border-brand-soft/50"
          >
            <ChevronRight className="w-5 h-5 text-brand-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
