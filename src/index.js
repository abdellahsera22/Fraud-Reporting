import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

import translationEN from "./translations.json"; // English translations
import translationAM from "./Forms/amharic.json"; // Amharic translations

i18n.init({
  lng: "en", // Set the default language
  fallbackLng: "en", // Set the fallback language
  resources: {
    en: {
      translation: translationEN,
    },
    am: {
      translation: translationAM,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
