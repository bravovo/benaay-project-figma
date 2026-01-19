import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { Search as SearchIcon } from "lucide-react";

function Search({ isOpen, onClose }) {
    const searchRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <div className="search-container" ref={searchRef}>
                <div className="search-input-wrapper">
                    <SearchIcon size={20} color="#6B7280" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        aria-label="Search products"
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
