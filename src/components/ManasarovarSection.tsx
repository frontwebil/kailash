import { useLanguage } from '../context/LanguageContext';
import { Droplet } from 'lucide-react';

export function ManasarovarSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-900/30 rounded-full border border-blue-600/30">
              <Droplet className="text-blue-400" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
            {t.manasarovar.title}
          </h2>

          <p className="text-xl text-slate-200 leading-relaxed">
            {t.manasarovar.description}
          </p>
        </div>
      </div>
    </section>
  );
}
