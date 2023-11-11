import { useEffect, useState } from "react";
import Translation from "./Data.json";

function TranslationEngToTamil() {
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "amharic") {
      setContent(Translation.amharic);
    }
  });

  return (
    <div>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option>english</option>
        <option>amharic</option>
        <option>hindi</option>
      </select>

      <h2>{content.yourname}</h2>
    </div>
  );
}
export default TranslationEngToTamil;
