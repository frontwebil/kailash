import { Mountain } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-amber-100">
            <Mountain size={32} />
            <span className="text-2xl font-light tracking-wider">KAILASH</span>
          </div>

          <p className="text-slate-400 text-center max-w-md">
            Sacred journey to Mount Kailash - where life transforms
          </p>

          <div className="h-px w-32 bg-slate-700"></div>

          <p className="text-slate-500 text-sm">
            {currentYear} Kailash Expedition
          </p>
        </div>
      </div>
    </footer>
  );
}
