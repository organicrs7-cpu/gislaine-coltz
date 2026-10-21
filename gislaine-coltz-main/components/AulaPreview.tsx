import React, { useState } from 'react';
import { Play, PlayCircle } from 'lucide-react';
import { Button } from './Button';

const CHECKOUT_URL = 'https://pay.cakto.com.br/vc4xgmu_678676';

// O vídeo só é baixado quando a pessoa clica no play; até lá só a capa carrega
export const AulaPreview: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="trecho-aula" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 bg-gc-primary/60 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gc-dark">
            <PlayCircle className="w-4 h-4" /> Trecho real do curso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gc-text leading-tight mt-5">
            Assista a Gi <span className="text-gc-dark">aplicando o método</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Um pedaço da aula, em tempo real, para você ver como é o passo a passo.
          </p>
        </div>

        <div className="max-w-[380px] mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gc-primary bg-black aspect-[9/16]">
            {playing ? (
              <video
                className="w-full h-full object-cover"
                src="/video/aula-drenagem.mp4"
                poster="/video/aula-capa.jpg"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Assistir trecho da aula"
              >
                <img
                  src="/video/aula-capa.jpg"
                  alt="Gislaine Coltz aplicando drenagem linfática"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-9 h-9 md:w-10 md:h-10 text-gc-dark fill-gc-dark ml-1" />
                  </span>
                </span>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-semibold whitespace-nowrap">
                  Toque para assistir · 1 min
                </span>
              </button>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Button onClick={() => window.open(CHECKOUT_URL, '_blank')}>
              Quero o método completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
