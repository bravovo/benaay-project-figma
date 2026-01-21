import { useEffect } from "react";
import { useSelector } from "react-redux";
import i18n from "../../utils/i18n/index.js";

function LanguageProvider({ children }) {
    const lang = useSelector((state) => state.lang.i18n);

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    return children;
}

export default LanguageProvider;
