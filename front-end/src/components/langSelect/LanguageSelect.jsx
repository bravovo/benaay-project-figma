import { useState } from "react";
import "./LanguageSelect.css";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../state/slices/langSlice";

function LanguageSelect({ languages, color = "white" }) {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.lang);
    const [isOpened, setIsOpened] = useState(false);

    const selectLang = (lang) => {
        dispatch(setLang(lang));
        setIsOpened(false);
    };

    return (
        <div className="lang-select-container">
            <button
                className="lang-select-button"
                style={{ color: color }}
                onClick={() => setIsOpened((prev) => !prev)}
            >
                <span className="selected-lang-title">{language.short}</span>
                <ChevronDown size={20} color={color} />
            </button>

            {isOpened && (
                <div className="opened-selection">
                    {languages &&
                        languages.map((lang, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => selectLang(lang)}
                                    style={{
                                        backgroundColor:
                                            lang.short === language.short
                                                ? "var(--color-border-lighter)"
                                                : "var(--color-bg-white)",
                                    }}
                                >
                                    {lang.name}
                                </button>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export default LanguageSelect;
