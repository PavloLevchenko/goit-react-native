import * as Localization from 'expo-localization';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./translations/en";
import { ua } from "./translations/ua";
import { ru } from "./translations/ru";

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: "en",
  lng: Localization.locale,
  resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
