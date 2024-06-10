import BlogSettingsProvider from "./BlogSettingsProvider";
import "./styles.css";

export default function App() {
  // 5. Добавить всё сюда, провайдер, внутри SettingsPanel and Article
  return (
    <div className="App">
      <BlogSettingsProvider />
    </div>
  );
}
