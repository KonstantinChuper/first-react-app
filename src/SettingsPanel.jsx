// 3. Компонент с 2 списками (select). Один для выбора размера шрифта, один для line-height
import React from "react";
import { useBlogSettingsContext } from "./BlogSettingsContext";
import Article from "./Article";

export default function SettingsPanel() {

  const context = useBlogSettingsContext();
  console.log(context);

  function handleFontChange(e) {
    context.setFont(e.target.value);
  }

  function handleLineHeightChange(e) {
    context.setLineHeight(e.target.value);
  }

  return (
    <div>
      <h4>Choose your parameters</h4>
      <label htmlFor="font">
        Select font{" "}
        <select name="font" id="font" onChange={handleFontChange}>
          <option value={"16px"}>16px</option>
          <option value={"18px"}>18px</option>
          <option value={"20px"}>20px</option>
        </select>
      </label>
      <label htmlFor="lineHeight">
        Select line-height{" "}
        <select name="lineHeight" id="lineHeight" onChange={handleLineHeightChange}>
          <option value={'1'}>1</option>
          <option value={'1.5'}>1.5</option>
          <option value={'2'}>2</option>
        </select>
      </label>
      <Article />
    </div>
  );
}
