import { useState } from "react";
import "./LanguageSelect.css";
import { ChevronDown } from "lucide-react";

function LanguageSelect({ languages }) {
    const [isOpened, setIsOpened] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        languages[0].short
    );

    const selectLang = (lang) => {
        setSelectedLanguage(lang);
        setIsOpened(false);
    };

    return (
        <div className="lang-select-container">
            <button
                className="lang-select-button"
                onClick={() => setIsOpened((prev) => !prev)}
            >
                <span className="selected-lang-title">{selectedLanguage}</span>
                <ChevronDown size={20} color="white" />
            </button>

            {isOpened && (
                <div className="opened-selection">
                    {languages &&
                        languages.map((lang, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => selectLang(lang.short)}
                                    style={{
                                        backgroundColor:
                                            lang.short === selectedLanguage
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
