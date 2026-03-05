import { useLanguage } from "../context/LanguageContext";
import "../styles/WhatIsSection.css";

export function WhatIsSection() {
  const { t } = useLanguage();

  return (
    <section className="whatis">
      <div
        className="whatis-bg"
        style={{
          backgroundImage:
            "url(/dolma.webp)",
        }}
      ></div>

      <div className="whatis-container">
        <div className="whatis-inner">
          <h2 className="whatis-title">{t.whatIs.title}</h2>

          <p className="whatis-subtitle">{t.whatIs.subtitle}</p>

          <p className="whatis-description">{t.whatIs.description}</p>

          <div className="whatis-points">
            {t.whatIs.points.map((point, index) => (
              <div key={index} className="whatis-card">
                <p className="whatis-card-text">• {point}</p>
              </div>
            ))}
          </div>

          <p className="whatis-conclusion">{t.whatIs.conclusion}</p>
        </div>
      </div>
    </section>
  );
}
