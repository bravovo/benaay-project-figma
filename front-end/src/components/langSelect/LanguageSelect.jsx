import { useState } from "react";
import "./LanguageSelect.css";
import { ChevronDown } from "lucide-react";

function LanguageSelect() {
    // const [isOpened, setIsOpened] = useState(false);
    const [selectedLanguage, _setSelectedLanguage] = useState("Eng");

    // const select

    return (
        <div className="lang-select-container">
            <button className="lang-select-button">
                <span className="selected-lang-title">{selectedLanguage}</span>
                <ChevronDown size={20} color="white" />
            </button>
        </div>
    );
}

export default LanguageSelect;
