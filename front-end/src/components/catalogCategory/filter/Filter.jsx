import "./Filter.css";

import trash from "../../../assets/icons/catalog/trash-2.svg";

function Filter({ deleteAll }) {
    return (
        <div className="cat-container filter-container">
            <div className="cat-text filter-text">
                <h2>Filter</h2>
                <button onClick={deleteAll} className="filter-delete-button">
                    Delete all <img src={trash} alt="Delete all" />
                </button>
            </div>
            <div></div>
        </div>
    );
}

export default Filter;
