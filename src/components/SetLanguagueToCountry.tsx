import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function SetLanguagueToCountry() {
  const { setLanguage, language } = useLanguage();

  const getCurrentCountry = async () => {
    const geo = await fetch("http://ip-api.com/json/");
    const data = await geo.json();

    if (data.country == "Ukraine") {
      setLanguage("uk");
    } else {
      setLanguage("ru");
    }

    console.log(language);
  };

  useEffect(() => {
    getCurrentCountry();
  }, []);

  return <></>;
}
