import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { LinkCardProps } from '../types';

export const VisualLinkCard: React.FC<LinkCardProps> = ({
  title,
  subtitle,
  buttonText,
  imageUrl,
  theme,
  onClick,
  type,
  badgeText,
  extraContent
}) => {
  // Theme configuration based on the brand manual colors
  // Strictly using: #eaddd5, #9d6a6b, #cea29b, #f6f5f2, #d8d4c9
  const themeStyles = {
    light: {
      bg: 'bg-[#f6f5f2]',
      textPrimary: 'text-[#9d6a6b]',
      textSecondary: 'text-[#cea29b]',
      buttonBg: 'bg-[#cea29b]',
      buttonText: 'text-[#f6f5f2]',
      badgeBg: 'bg-[#d8d4c9]',
      badgeText: 'text-[#f6f5f2]'
    },
    peach: {
      bg: 'bg-gradient-to-r from-[#eaddd5] to-[#cea29b]',
      textPrimary: 'text-[#9d6a6b]',
      textSecondary: 'text-[#f6f5f2]',
      buttonBg: 'bg-[#9d6a6b]',
      buttonText: 'text-[#f6f5f2]',
      badgeBg: 'bg-[#9d6a6b]',
      badgeText: 'text-[#f6f5f2]'
    },
    dark: {
      bg: 'bg-[#9d6a6b]', // Brand "Dark" color (Deep Mauve)
      textPrimary: 'text-[#f6f5f2]',
      textSecondary: 'text-[#eaddd5]',
      buttonBg: 'bg-[#eaddd5]',
      buttonText: 'text-[#9d6a6b]',
      badgeBg: 'bg-[#cea29b]',
      badgeText: 'text-[#f6f5f2]'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#9d6a6b]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform cursor-pointer group h-44 sm:h-52 border border-white/20 ring-1 ring-white/10 ${currentTheme.bg}`}
    >
      <div className="flex h-full items-stretch">
        {/* Left Content */}
        <div className="flex-1 p-5 flex flex-col justify-center z-10 relative">
          {type === 'course' && badgeText && (
            <div className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest mb-2 w-fit px-2 py-0.5 rounded ${currentTheme.badgeBg} ${currentTheme.badgeText}`}>
              <PlayCircle size={10} />
              {badgeText}
            </div>
          )}

          {subtitle && (
            <h3 className={`text-sm sm:text-base font-light mb-0 leading-tight ${currentTheme.textSecondary}`}>
              {subtitle}
            </h3>
          )}

          <h2 className={`text-base sm:text-2xl font-bold leading-none mb-1 ${currentTheme.textPrimary}`}>
            {title}
          </h2>

          {extraContent && (
            <div className="mb-2">
              {extraContent}
            </div>
          )}

          <button className={`mt-auto w-fit px-3 py-1.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 whitespace-nowrap ${currentTheme.buttonBg} ${currentTheme.buttonText}`}>
            {buttonText}
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Right Image Container - Simulating the cutout look */}
        <div className="w-2/5 sm:w-1/2 relative h-full">
          {/* Decorative Circle Background behind image */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-full blur-2xl opacity-60 ${theme === 'dark' ? 'bg-[#cea29b]' : 'bg-[#eaddd5]'}`} />

          <img
            src={imageUrl || "https://picsum.photos/300/300"}
            alt={title}
            className="absolute bottom-0 right-0 w-full h-full object-cover object-top mask-image-linear"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};