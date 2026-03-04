import { useLanguage } from '../context/LanguageContext';
import { Sparkles, AlertCircle } from 'lucide-react';

interface SagaDawaSectionProps {
  onCtaClick: () => void;
}

export function SagaDawaSection({ onCtaClick }: SagaDawaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Sparkles className="text-amber-400" size={24} />
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
              {t.sagaDawa.badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-8">
            {t.sagaDawa.title}
          </h2>

          <p className="text-lg text-slate-300 text-center mb-12 leading-relaxed">
            {t.sagaDawa.description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {t.sagaDawa.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <p className="text-slate-200">• {feature}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-light text-white text-center mb-6">
            {t.sagaDawa.why}
          </h3>

          <div className="space-y-3 mb-8">
            {t.sagaDawa.whyPoints.map((point, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/30 rounded-lg border-l-4 border-amber-600"
              >
                <p className="text-slate-200">• {point}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-amber-100 text-center mb-12 font-light italic">
            {t.sagaDawa.conclusion}
          </p>

          <div className="bg-slate-800 border border-amber-900/30 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-medium text-amber-400 mb-2">
                  {t.sagaDawa.important}
                </h4>
                <p className="text-slate-300 mb-4">{t.sagaDawa.importantText}</p>
                <ul className="space-y-2">
                  {t.sagaDawa.importantPoints.map((point, index) => (
                    <li key={index} className="text-slate-200">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-amber-200 font-light italic mt-4">
              {t.sagaDawa.importantNote}
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
            >
              {t.sagaDawa.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
