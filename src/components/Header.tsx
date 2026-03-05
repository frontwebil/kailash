import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import "../styles/Header.css";

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">KAILASH</div>

        <button
          onClick={() => setLanguage(language === "uk" ? "ru" : "uk")}
          className="lang-button"
        >
          <Globe size={18} className="globe-icon" />
          <span className="lang-text">{language === "uk" ? "RU" : "UA"}</span>
        </button>
      </div>
    </header>
  );
}
