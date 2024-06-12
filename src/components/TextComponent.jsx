import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const texts = {
  en: "Page language is English!",
  ru: "Язык страницы русский!",
};

export default function TextComponent() {
  const { language } = useContext(LanguageContext);

  return <p>{texts[language]}</p>;
}
