import "./Search.css";

import search from "../../../assets/icons/catalog/search.svg";

function Search() {
    return (
        <div className="cat-search-container">
            <input
                type="text"
                className="cat-search-input"
                placeholder="Search..."
            />
            <button className="search-button">
                <img src={search} alt="" />
            </button>
        </div>
    );
}

export default Search;
