import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-light tracking-wider text-amber-100">
          KAILASH
        </div>

        <button
          onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700"
        >
          <Globe size={18} className="text-amber-200" />
          <span className="text-sm font-medium text-slate-200 uppercase">
            {language === 'uk' ? 'EN' : 'UK'}
          </span>
        </button>
      </div>
    </header>
  );
}
