import { useLanguage } from '../context/LanguageContext';
import { Mountain } from 'lucide-react';

export function KoraSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-900/30 rounded-full border border-amber-600/30">
              <Mountain className="text-amber-400" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
            {t.kora.title}
          </h2>

          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            {t.kora.description}
          </p>

          <p className="text-lg text-amber-100 font-light italic leading-relaxed">
            {t.kora.details}
          </p>
        </div>
      </div>
    </section>
  );
}
