import { useLanguage } from '../context/LanguageContext';

export function WhatIsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8">
            {t.whatIs.title}
          </h2>

          <p className="text-2xl md:text-3xl text-amber-100 mb-8 font-light leading-relaxed">
            {t.whatIs.subtitle}
          </p>

          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            {t.whatIs.description}
          </p>

          <div className="space-y-4 mb-12">
            {t.whatIs.points.map((point, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 transform hover:scale-102 transition-transform"
              >
                <p className="text-lg text-white">• {point}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl text-amber-200 font-light">
            {t.whatIs.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
