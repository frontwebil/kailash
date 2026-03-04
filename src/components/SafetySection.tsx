import { useLanguage } from '../context/LanguageContext';
import { Shield, Check } from 'lucide-react';

interface SafetySectionProps {
  onCtaClick: () => void;
}

export function SafetySection({ onCtaClick }: SafetySectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-900/30 rounded-full border border-green-600/30">
              <Shield className="text-green-400" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-6">
            {t.safety.title}
          </h2>

          <p className="text-xl text-slate-300 text-center mb-12">
            {t.safety.description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {t.safety.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-200">{feature}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-300 text-center mb-8 leading-relaxed">
            {t.safety.note}
          </p>

          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
            >
              {t.safety.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
