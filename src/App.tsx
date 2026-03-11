import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SagaDawaSection } from "./components/SagaDawaSection";
import { WhatIsSection } from "./components/WhatIsSection";
import { ForWhomSection } from "./components/ForWhomSection";
import { KoraSection } from "./components/KoraSection";
import { ManasarovarSection } from "./components/ManasarovarSection";
import { SafetySection } from "./components/SafetySection";
import { StatusSection } from "./components/StatusSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { ApplicationForm } from "./components/ApplicationForm";
import { Footer } from "./components/Footer";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />

        <HeroSection onCtaClick={() => setIsFormOpen(true)} />

        <SagaDawaSection onCtaClick={() => setIsFormOpen(true)} />

        <WhatIsSection />

        <ForWhomSection onCtaClick={() => setIsFormOpen(true)} />

        <KoraSection />
        
        <SafetySection onCtaClick={() => setIsFormOpen(true)} />

        <ManasarovarSection />

        <StatusSection onCtaClick={() => setIsFormOpen(true)} />

        <FinalCtaSection onCtaClick={() => setIsFormOpen(true)} />

        <Footer />

        <ApplicationForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
