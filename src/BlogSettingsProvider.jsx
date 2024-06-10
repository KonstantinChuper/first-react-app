// 2. Создать компонент BlogSettingsProvider, который будет использовать
// useState для работы с текущей темой (размер шрифта и line height)
// и возвращать <BlogSettingsContext.Provider> с остальными компонентами
import React, { useState } from 'react';
import BlogSettingsContext from "./BlogSettingsContext";
import SettingsPanel from './SettingsPanel';

export default function BlogSettingsProvider() {
    const [font, setFont] = useState('16px');
    const [lineHeight, setLineHeight] = useState('1');
  return (
  <BlogSettingsContext.Provider value={{ font, setFont, lineHeight, setLineHeight}}>
    < SettingsPanel />
  </BlogSettingsContext.Provider>
  );
}
