import "./Filter.css";

import trash from "../../../assets/icons/catalog/trash-2.svg";
import closeIcon from "../../../assets/icons/x.svg";

function Filter({ deleteAll, selectedFilters, onRemoveFilter }) {
    // Get all selected category items
    const getSelectedFilterTags = () => {
        const tags = [];

        if (selectedFilters && selectedFilters.categories) {
            Object.entries(selectedFilters.categories).forEach(
                ([categoryKey, items]) => {
                    items.forEach((itemName) => {
                        tags.push({
                            categoryKey,
                            itemName,
                        });
                    });
                }
            );
        }

        return tags;
    };

    const filterTags = getSelectedFilterTags();

    return (
        <div className="cat-container filter-container">
            <div className="cat-text filter-text">
                <h2>Filter</h2>
                <button onClick={deleteAll} className="filter-delete-button">
                    Delete all <img src={trash} alt="Delete all" />
                </button>
            </div>
            <div className="filter-tags">
                {filterTags.map((tag) => (
                    <button
                        key={`${tag.categoryKey}-${tag.itemName}`}
                        className="filter-tag"
                        onClick={() =>
                            onRemoveFilter(tag.categoryKey, tag.itemName)
                        }
                    >
                        {tag.itemName}
                        <img src={closeIcon} alt="Remove filter" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;
