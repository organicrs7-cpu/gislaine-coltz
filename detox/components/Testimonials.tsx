import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.current?.scrollBy({ left: direction * 312, behavior: reduced ? 'auto' : 'smooth' });
  };
  return (
    <section id="depoimentos" className="detox-testimonials">
      <div className="container mx-auto px-6">
        <div className="detox-section-heading">
          <span className="detox-eyebrow"><MessageCircle size={18} /> QUEM JÁ APRENDEU COM A GI</span>
          <h2>Histórias reais.<br /><em>Nas palavras das alunas.</em></h2>
          <p>Conheça os relatos de quem já estudou com a Gislaine no curso de drenagem. Estes depoimentos são sobre essa formação, e não sobre o Protocolo Detox.</p>
        </div>
        <div className="detox-carousel-controls">
          <span>Arraste para ver mais relatos</span>
          <div><button type="button" onClick={() => scroll(-1)} aria-label="Depoimentos anteriores" aria-controls="feedback-track"><ChevronLeft /></button><button type="button" onClick={() => scroll(1)} aria-label="Próximos depoimentos" aria-controls="feedback-track"><ChevronRight /></button></div>
        </div>
        <div id="feedback-track" ref={track} className="detox-feedback-track" tabIndex={0} role="region" aria-label="Prints dos depoimentos do curso de drenagem">
          {Array.from({ length: 9 }, (_, index) => (
            <a key={index} className="detox-feedback-card" href={`/detox/images/testimonials/feedback-${index + 1}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Abrir print do depoimento ${index + 1} em tamanho original`}>
              <img src={`/detox/images/testimonials/feedback-${index + 1}.png`} alt={`Print de depoimento ${index + 1}, reproduzido da página do curso de drenagem da Gislaine`} loading="lazy" />
              <span>Ver print completo <ArrowUpRight size={16} /></span>
            </a>
          ))}
        </div>
        <div className="detox-testimonials-cta"><a className="detox-primary" href="#pricing">Conhecer a oferta do Detox <ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
};
