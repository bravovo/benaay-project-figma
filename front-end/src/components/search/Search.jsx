import { useEffect, useRef } from "react";
import "./Search.css";
import searchIcon from "../../assets/icons/search.svg";

function Search({ isOpen, onClose }) {
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <div className="search-container" ref={searchRef}>
                <div className="search-input-wrapper">
                    <img
                        src={searchIcon}
                        alt="Search"
                        className="search-input-icon"
                    />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
