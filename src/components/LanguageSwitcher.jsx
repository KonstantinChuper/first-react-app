import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { toggleLanguage, language } = useContext(LanguageContext);
  const buttonText = language === "ru" ? "English" : "Русский";
  return <button onClick={toggleLanguage}>{buttonText}</button>;
}
