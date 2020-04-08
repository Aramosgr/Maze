import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/es/translation.json";
import translationEsp from "./locales/es/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    //debug: (process.env.NODE_ENV || 'development') === 'development',
    debug: false,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translations: translationEng
      },
      es: {
        translations: translationEsp
      }
    },
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;
