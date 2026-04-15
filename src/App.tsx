import { useState } from "react";
import { FixedLanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SagaDawaSection } from "./components/SagaDawaSection";
import { WhatIsSection } from "./components/WhatIsSection";
import { ForWhomSection } from "./components/ForWhomSection";
import { KoraSection } from "./components/KoraSection";
import { SafetySection } from "./components/SafetySection";
import { StatusSection } from "./components/StatusSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { ApplicationForm } from "./components/ApplicationForm";
import { Footer } from "./components/Footer";
import { GallerySliderSection } from "./components/GallerySliderSection";
import { Language } from "./types/language";

interface AppProps {
  language: Language;
}

function App({ language }: AppProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FixedLanguageProvider initialLanguage={language}>
      <div className="min-h-screen bg-slate-900">
        <Header />

        <HeroSection onCtaClick={() => setIsFormOpen(true)} />

        <SagaDawaSection onCtaClick={() => setIsFormOpen(true)} />

        <WhatIsSection />

        <ForWhomSection onCtaClick={() => setIsFormOpen(true)} />

        <GallerySliderSection />

        <KoraSection />

        <SafetySection onCtaClick={() => setIsFormOpen(true)} />

        <StatusSection onCtaClick={() => setIsFormOpen(true)} />

        <FinalCtaSection onCtaClick={() => setIsFormOpen(true)} />

        <Footer />

        <ApplicationForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </div>
    </FixedLanguageProvider>
  );
}

export default App;
