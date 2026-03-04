import { useLanguage } from '../context/LanguageContext';
import { Heart, RefreshCw, Compass, TrendingUp } from 'lucide-react';

interface ForWhomSectionProps {
  onCtaClick: () => void;
}

export function ForWhomSection({ onCtaClick }: ForWhomSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-16">
          {t.forWhom.title}
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/30 rounded-lg">
                <Heart className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                {t.forWhom.spiritual.title}
              </h3>
            </div>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              {t.forWhom.spiritual.description}
            </p>
            <p className="text-lg text-amber-200 font-light italic">
              {t.forWhom.spiritual.conclusion}
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/30 rounded-lg">
                <RefreshCw className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                {t.forWhom.crisis.title}
              </h3>
            </div>
            <p className="text-lg text-slate-300 mb-4">{t.forWhom.crisis.intro}</p>
            <ul className="space-y-2 mb-6">
              {t.forWhom.crisis.points.map((point, index) => (
                <li key={index} className="text-slate-200 ml-4">
                  • {point}
                </li>
              ))}
            </ul>
            <p className="text-lg text-amber-200 font-light italic">
              {t.forWhom.crisis.conclusion}
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/30 rounded-lg">
                <Compass className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                {t.forWhom.premium.title}
              </h3>
            </div>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              {t.forWhom.premium.description}
            </p>
            <p className="text-lg text-amber-200 font-light italic">
              {t.forWhom.premium.conclusion}
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-900/30 rounded-lg">
                <TrendingUp className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                {t.forWhom.entrepreneurs.title}
              </h3>
            </div>
            <p className="text-lg text-slate-300 mb-4">{t.forWhom.entrepreneurs.intro}</p>
            <ul className="space-y-2 mb-6">
              {t.forWhom.entrepreneurs.points.map((point, index) => (
                <li key={index} className="text-slate-200 ml-4">
                  • {point}
                </li>
              ))}
            </ul>
            <p className="text-lg text-amber-200 font-light italic">
              {t.forWhom.entrepreneurs.conclusion}
            </p>
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
