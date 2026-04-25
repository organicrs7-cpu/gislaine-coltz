import React from 'react';
import { PlayCircle, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center pt-20 lg:pt-0">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gc-light via-white to-gc-primary/20 z-0"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gc-gold/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gc-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gc-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: 'linear-gradient(#233e2f 1px, transparent 1px), linear-gradient(90deg, #233e2f 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-1/4 w-3 h-3 bg-gc-gold rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-gc-primary rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-gc-gold/50 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 lg:px-32 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8 pb-12 lg:pb-0">

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-gc-dark/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gc-dark/10">
              <span className="w-2 h-2 rounded-full bg-gc-dark animate-pulse"></span>
              <span className="text-gc-dark font-medium text-sm tracking-wide uppercase">Vagas Abertas</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gc-gold/50 px-4 py-2 rounded-full shadow-lg shadow-gc-gold/10">
              <Globe className="w-4 h-4 text-gc-gold" />
              <span className="text-gc-text font-bold text-xs uppercase tracking-wider">Certificação Internacional</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gc-text leading-tight text-center lg:text-left">
            Domine a Arte da <span className="text-gc-dark relative">
              Drenagem Linfática
              <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-gc-gold animate-pulse" />
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg text-center lg:text-left">
            Aprenda o método exclusivo com certificação internacional que vai transformar sua carreira e fidelizar seus clientes logo na primeira sessão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button onClick={() => window.open('https://pay.cakto.com.br/3f9wss5', '_blank')}>
              Quero Garantir Minha Vaga
            </Button>
            <button onClick={scrollToModules} className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-300 text-gray-600 font-medium bg-white/50 backdrop-blur-sm hover:bg-white hover:text-gc-dark hover:border-gc-dark transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95">
              <PlayCircle className="w-5 h-5" />
              Ver o Método
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-gc-gold" />
              <span>Certificação Internacional Inclusa</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-gc-gold" />
              <span>Acesso vitalício ao conteúdo gravado</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[350px] lg:max-w-[500px]">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gc-gold/40 via-gc-primary/30 to-gc-secondary/40 rounded-[30px] lg:rounded-[50px] blur-2xl transform scale-95 -z-10"></div>

            {/* Decorative Border */}
            <div className="absolute top-6 lg:top-10 right-6 lg:right-10 w-full h-full border-2 border-gc-gold/60 rounded-[30px] lg:rounded-[50px] -z-10 translate-x-2 lg:translate-x-4 translate-y-2 lg:translate-y-4"></div>

            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gc-primary to-gc-dark rounded-[30px] lg:rounded-[50px] -z-10"></div>

            <img
              src={IMAGES.hero}
              alt="Gislaine Coltz"
              className="w-full h-auto object-contain rounded-[30px] lg:rounded-[50px] shadow-2xl z-20"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-8 lg:-left-12 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl z-30 flex items-center gap-3 lg:gap-4 w-[90%] max-w-[250px] border border-white/50">
              <div className="bg-gradient-to-br from-gc-gold/30 to-gc-gold/10 p-2 lg:p-3 rounded-full">
                <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-gc-dark" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider">Resultado</p>
                <p className="font-bold text-sm lg:text-base text-gc-text">Certificação Reconhecida</p>
              </div>
            </div>

            {/* Additional Floating Element */}
            <div className="absolute -top-4 -right-4 lg:top-8 lg:-right-8 bg-gc-gold/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-30 animate-bounce" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};