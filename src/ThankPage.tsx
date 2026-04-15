import { Send } from "lucide-react";
import { Language } from "./types/language";

interface ThankPageProps {
  language: Language;
}

export function ThankPage({ language }: ThankPageProps) {
  const message =
    language === "uk"
      ? "Дякуємо! Ми зв'яжемося з вами протягом 24 годин"
      : "Спасибо! Мы свяжемся с вами в течение 24 часов";
  const homeLabel = language === "uk" ? "На головну" : "На главную";
  const homePath = language === "uk" ? "/uk" : "/ru";

  return (
    <div className="flex items-center justify-center h-[100vh] px-4">
      <div className="pt-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#e4d7b6] bg-[#f3ead7]">
          <Send className="text-[#b8964f]" size={32} />
        </div>
        <p className="text-lg text-[#5b4518]">{message}</p>
        <a
          href={homePath}
          className="block w-full mt-5 rounded-lg bg-[#c6a75e] px-6 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-[#b8964f] disabled:cursor-not-allowed disabled:bg-[#cbb98e] disabled:hover:scale-100 shadow-[0_12px_24px_rgba(184,150,79,0.22)]"
        >
          {homeLabel}
        </a>
      </div>
    </div>
  );
}
