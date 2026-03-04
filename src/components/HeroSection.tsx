import { useLanguage } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight max-w-5xl mx-auto">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 mb-3 font-light">
          {t.hero.subtitle}
        </p>

        <p className="text-lg md:text-xl text-slate-300 mb-8 font-light">
          {t.hero.location}
        </p>

        <div className="flex flex-col gap-2 mb-8">
          <p className="text-lg text-slate-400">{t.hero.notTour}</p>
          <p className="text-xl md:text-2xl text-white font-light">
            {t.hero.event}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-amber-200 bg-slate-800/50 px-6 py-3 rounded-lg border border-amber-900/30">
            <Calendar size={20} />
            <span className="text-lg">{t.hero.date1}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-200 bg-slate-800/50 px-6 py-3 rounded-lg border border-amber-900/30">
            <Calendar size={20} />
            <span className="text-lg">{t.hero.date2}</span>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
        >
          {t.hero.cta}
        </button>
      </div>
{/* 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-200/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber-200/50 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
}
