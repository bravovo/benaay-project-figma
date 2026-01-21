import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { Search as SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function Search({ isOpen, onClose, buttonRef }) {
    const { t } = useTranslation();
    const searchRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose, buttonRef]);

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <div className="search-container" ref={searchRef}>
                <div className="search-input-wrapper">
                    <SearchIcon size={20} color="var(--footer-add-color)" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={t("search.placeholder")}
                        aria-label={t("search.ariaLabel")}
                        role="searchbox"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}

Search.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Search;
