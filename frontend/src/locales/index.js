import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import en from "./translations/en.json"
import tr from "./translations/tr.json"

export const i18nInstance = i18next.use(initReactI18next)

i18nInstance
.init({
  resources:{
    en:{
      translation:en
    },
    tr:{
      translation:tr
    }
  },
  fallbackLng: localStorage.getItem("lang") || navigator.language || "en", // bu sayede dili localstorage'dan aldık ve sayfa yenilenince gitmedi 
  // desteklenmeyen bir dilse seçilecek dil navigator.value ile o browser'ın dilini alabiliriz
  interpolation:{
    escapeValue:false
  }
})
