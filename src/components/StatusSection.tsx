import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';

interface StatusSectionProps {
  onCtaClick: () => void;
}

export function StatusSection({ onCtaClick }: StatusSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-900/30 rounded-full border border-amber-600/30">
              <Award className="text-amber-400" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-12">
            {t.status.title}
          </h2>

          <div className="space-y-4 mb-8">
            {t.status.points.map((point, index) => (
              <div
                key={index}
                className="p-5 bg-slate-800/50 rounded-lg border-l-4 border-amber-600 text-center"
              >
                <p className="text-xl text-slate-200">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-light text-amber-400 mb-4">
              {t.status.price}
            </p>
            <p className="text-lg text-slate-300 italic">
              {t.status.conclusion}
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
            >
              {t.status.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
