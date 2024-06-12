import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import TextComponent from "./TextComponent";
import "./styles.css";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
}
