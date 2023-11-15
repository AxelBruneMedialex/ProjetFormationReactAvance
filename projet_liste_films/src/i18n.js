import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                "search": "Search",
                "connect": 'Sign in',
                'logout': "Log out"
            }
        },
        fr: {
            translation: {
                "search": "Rechercher",
                "connect": "Se connecter",
                'logout': "Se déconnecter"
            }
        }
    }
});

export default i18n;