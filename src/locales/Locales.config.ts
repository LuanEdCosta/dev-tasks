import { use } from "i18next";
import { initReactI18next } from "react-i18next";

import * as PT_BR from "./PT_BR";

const i18next = use(initReactI18next).init({
  compatibilityJSON: "v3", // https://www.i18next.com/misc/migration-guide
  resources: { "pt-BR": PT_BR },
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  defaultNS: "Glossary",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
