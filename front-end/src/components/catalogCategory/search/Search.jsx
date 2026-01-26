import "./Search.css";

import search from "../../../assets/icons/catalog/search.svg";
import { useState } from "react";

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="cat-search-container">
            <input
                type="text"
                className="cat-search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="search-button"
                onClick={() => onSearch(searchTerm)}
            >
                <img src={search} alt="" />
            </button>
        </div>
    );
}

export default Search;
