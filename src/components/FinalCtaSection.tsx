import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1574625/pexels-photo-1574625.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
            {t.finalCta.title}
          </h2>

          <div className="bg-amber-900/20 border-2 border-amber-600/50 rounded-xl p-6 mb-8">
            <p className="text-xl md:text-2xl text-amber-200 font-medium">
              {t.finalCta.priceNote}
            </p>
          </div>

          <p className="text-lg text-slate-300 mb-6">{t.hero.cta}:</p>

          <div className="space-y-3 mb-12">
            {t.finalCta.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-lg text-slate-200"
              >
                <CheckCircle2 className="text-green-400 flex-shrink-0" size={24} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-xl text-amber-100 mb-10 italic font-light">
            {t.finalCta.conclusion}
          </p>

          <button
            onClick={onCtaClick}
            className="px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white text-xl font-medium rounded-lg transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
          >
            {t.finalCta.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
