import { useLanguage } from "../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";
import "../styles/FinalCtaSection.css";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="finalcta">
      <div
        className="finalcta-bg"
        style={{
          backgroundImage: "url(/kora.jpg)",
          backgroundPosition: "сenter",
        }}
      >
        <div className="finalcta-overlay"></div>
      </div>

      <div className="finalcta-container">
        <div className="finalcta-inner">
          <h2 className="finalcta-title">{t.finalCta.title}</h2>

          <div className="finalcta-price-box">
            <p className="finalcta-price-note">
              {t.finalCta.priceNote}{" "}
              <span className="line-through font-normal">3500€</span>
            </p>
          </div>

          <p className="finalcta-intro">{t.finalCta.ctaInfo}:</p>

          <div className="finalcta-benefits">
            {t.finalCta.benefits.map((benefit, index) => (
              <div key={index} className="finalcta-benefit">
                <CheckCircle2 className="finalcta-check" size={24} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <p className="finalcta-conclusion">{t.finalCta.conclusion}</p>

          <button onClick={onCtaClick} className="finalcta-button">
            {t.finalCta.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
