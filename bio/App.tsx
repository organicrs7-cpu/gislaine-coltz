import React from 'react';
import { MapPin, Phone, Instagram, Youtube, Mail, GraduationCap } from 'lucide-react';
import { VisualLinkCard } from './components/VisualLinkCard';
import { SimpleLinkButton } from './components/SimpleLinkButton';
import { BrandIcon } from './components/BrandIcon';

// Brand Colors from Manual
const COLORS = {
  primaryLight: '#eaddd5',
  primaryDark: '#9d6a6b',
  secondaryPeach: '#cea29b',
  secondaryLight: '#f6f5f2',
  accent: '#d8d4c9',
};

const App: React.FC = () => {

  const WHATSAPP_LINK = "https://wa.me/message/RTNL6F7Y3IASO1";

  const handleNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-[#cea29b] selection:text-[#f6f5f2] font-['Poppins'] bg-[#f6f5f2]">
      {/* Background - Animated Modern Tech Mesh */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#f6f5f2] overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#eaddd5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-[#cea29b] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-72 h-72 bg-[#9d6a6b] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

        {/* Tech Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(157,106,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(157,106,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-md mx-auto min-h-screen pb-20 bg-[#f6f5f2]/30 backdrop-blur-md shadow-2xl border-x border-[#ffffff]/50">

        {/* Header Section - Modern & Compact (Headshot Focus) */}
        <header className="relative overflow-hidden pb-4">
          {/* Hero Image Container - Increased Height to prevent head crop */}
          <div className="relative w-full h-[400px] overflow-hidden group">
            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f5f2] z-10"></div>

            {/* Main Hero Image */}
            <img
              src="/images/hero-new.png"
              alt="Gislaine Coltz"
              className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105"
              style={{
                objectPosition: 'center top',
                // Mascara ajustada para começar transparente apenas bem embaixo (85%)
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>

          {/* Title Section - Positioned below the face */}
          <div className="relative -mt-16 px-6 text-center z-20">
            <div className="inline-block relative">
              {/* Decorative Blur behind text */}
              <div className="absolute inset-0 bg-[#f6f5f2]/80 blur-xl -z-10 rounded-full"></div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9d6a6b] via-[#cea29b] to-[#9d6a6b] bg-[length:200%_auto] animate-gradient">
                  GISLAINE COLTZ
                </span>
              </h1>
            </div>

            <div className="flex items-center justify-center gap-3 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <span className="h-[1px] w-8 bg-[#cea29b]"></span>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#5a5a5a] font-medium">
                Estética de Alta Performance
              </p>
              <span className="h-[1px] w-8 bg-[#cea29b]"></span>
            </div>
          </div>
        </header>

        {/* Main Links Container */}
        <main className="px-5 space-y-6">

          {/* 1. Card Drenagem Online */}
          <VisualLinkCard
            type="course"
            title="Curso de Drenagem"
            subtitle="Método Exclusivo"
            buttonText="Saiba Mais"
            theme="peach"
            imageUrl="/images/card-drenagem-new.png"
            badgeText="CURSO ONLINE"
            extraContent={
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#9d6a6b] mb-1 bg-white/40 px-1.5 py-0.5 rounded w-fit">Use cupom: gi40 (40% OFF)</span>
              </div>
            }
            onClick={() => handleNavigation("https://gislaine-coltz.vercel.app/")}
          />

          {/* 2. Card: Detox na Manta Térmica */}
          <VisualLinkCard
            type="course"
            title="Detox na Manta"
            subtitle="Manta Térmica"
            buttonText="Garantir Vaga"
            theme="dark"
            imageUrl="/images/card-detox-new.jpg"
            badgeText="CURSO ONLINE"
            extraContent={
              <div className="flex flex-col">
                <span className="text-[10px] opacity-70 line-through text-[#f6f5f2]">De R$ 197</span>
                <span className="text-xs font-bold text-[#eaddd5]">Apenas R$ 67,00</span>
              </div>
            }
            onClick={() => handleNavigation("https://detox-pearl.vercel.app/")}
          />

          {/* 3. Card: Cursos Presenciais */}
          <VisualLinkCard
            type="course"
            title="Cursos Presenciais"
            subtitle="Formações"
            buttonText="Vagas Fechadas"
            theme="light"
            imageUrl="/images/card-cursos-new.png"
            badgeText="PRESENCIAL"
            onClick={() => handleNavigation(WHATSAPP_LINK)}
          />

          {/* 4. Card: Agendar Atendimento */}
          <VisualLinkCard
            type="booking"
            title="Agendar Sessão"
            subtitle="Atendimento Individual"
            buttonText="Chamar no WhatsApp"
            theme="peach"
            imageUrl="/images/card-agendar-new.png"
            onClick={() => handleNavigation(WHATSAPP_LINK)}
          />

          {/* Secondary Links Section */}
          <div className="pt-10 space-y-4">
            <div className="flex items-center gap-2 justify-center mb-6">
              <span className="h-px w-12 bg-[#cea29b]/30"></span>
              <h3 className="text-center text-[#9d6a6b] text-[10px] font-bold tracking-[0.3em] uppercase">
                Redes Sociais & Contato
              </h3>
              <span className="h-px w-12 bg-[#cea29b]/30"></span>
            </div>

            <SimpleLinkButton
              label="Instagram Profissional"
              icon={<Instagram size={20} />}
              brandColor={COLORS.secondaryPeach}
              onClick={() => handleNavigation('https://www.instagram.com/gislaine.coltz/')}
            />

            <SimpleLinkButton
              label="Canal no YouTube"
              icon={<Youtube size={20} />}
              brandColor={COLORS.primaryDark}
              onClick={() => handleNavigation('https://www.youtube.com/@gislainecoltz')}
            />
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-16 pt-10 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#eaddd5]/40 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center justify-center gap-4 text-sm text-[#9d6a6b] relative z-10">

            <a href="tel:+5551999596176" className="flex items-center gap-2 hover:text-[#cea29b] transition-colors bg-[#f6f5f2]/50 px-4 py-2 rounded-full shadow-sm">
              <Phone size={16} className="text-[#9d6a6b]" />
              <span className="font-medium">(51) 99959-6176</span>
            </a>

            <div className="flex items-start gap-2 max-w-[280px] text-center justify-center hover:text-[#cea29b] transition-colors cursor-pointer mt-2">
              <MapPin size={16} className="text-[#9d6a6b] mt-0.5 shrink-0" />
              <span>Rua Fialho de Vargas num 49 sala 403</span>
            </div>

            <div className="mt-8 opacity-30 hover:opacity-100 transition-opacity duration-500">
              <BrandIcon color={COLORS.primaryDark} className="w-16 h-16" />
            </div>

            <p className="text-[10px] text-[#9d6a6b] opacity-60 mt-4 tracking-widest uppercase">
              © 2024 Gislaine Coltz
            </p>

          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;