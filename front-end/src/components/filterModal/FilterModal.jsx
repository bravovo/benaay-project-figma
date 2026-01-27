import "./FilterModal.css";
import { useState, useEffect } from "react";
import CatalogCategory from "../catalogCategory/CatalogCategory";
import closeIcon from "../../assets/icons/x.svg";
import trash from "../../assets/icons/catalog/trash-2.svg";
import { useCategoryProductCounts } from "../../hooks/useCategoryProductCounts";

function FilterModal({
    onClose,
    categories,
    products,
    selectedFilters,
    onApplyFilters,
    priceRangeValues,
}) {
    // Local state for temporary filter changes (not applied until "Apply Filters" is clicked)
    const [tempSelectedFilters, setTempSelectedFilters] = useState({
        categories: { ...selectedFilters.categories },
        priceRange: { ...selectedFilters.priceRange },
    });

    const [tempPriceRangeValues, setTempPriceRangeValues] = useState([...priceRangeValues]);

    // Calculate product counts for each category item
    const categoryCounts = useCategoryProductCounts(products, categories);

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.classList.add("modal-open");
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    // Handle overlay click to close modal
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("filter-modal-overlay")) {
            onClose();
        }
    };

    // Handler for checkbox changes in modal
    const handleCheckboxChange = (categoryIndex, itemName, isChecked) => {
        const categoryKey = `category${categoryIndex}`;

        setTempSelectedFilters((prev) => {
            const updatedCategories = { ...prev.categories };

            if (isChecked) {
                updatedCategories[categoryKey] = [
                    ...updatedCategories[categoryKey],
                    itemName,
                ];
            } else {
                updatedCategories[categoryKey] = updatedCategories[
                    categoryKey
                ].filter((item) => item !== itemName);
            }

            return {
                ...prev,
                categories: updatedCategories,
            };
        });
    };

    // Handler for price range changes in modal
    const handlePriceRangeChange = (values) => {
        setTempPriceRangeValues(values);
        setTempSelectedFilters((prev) => ({
            ...prev,
            priceRange: { min: values[0], max: values[1] },
        }));
    };

    // Handler for removing a single filter tag
    const handleRemoveFilter = (categoryKey, itemName) => {
        setTempSelectedFilters((prev) => {
            const updatedCategories = { ...prev.categories };
            updatedCategories[categoryKey] = updatedCategories[
                categoryKey
            ].filter((item) => item !== itemName);

            return {
                ...prev,
                categories: updatedCategories,
            };
        });
    };

    // Handler for deleting all filters
    const handleDeleteAllFilters = () => {
        const resetCategories = {
            category1: [],
            category2: [],
            category3: [],
            category4: [],
            category5: [],
            category6: [],
        };

        setTempSelectedFilters({
            categories: resetCategories,
            priceRange: { min: priceRangeValues[0], max: priceRangeValues[1] },
        });
        setTempPriceRangeValues([...priceRangeValues]);
    };

    // Apply filters and close modal
    const handleApplyFilters = () => {
        onApplyFilters(tempSelectedFilters, tempPriceRangeValues);
        onClose();
    };

    // Get all selected category items for display as tags
    const getSelectedFilterTags = () => {
        const tags = [];

        if (tempSelectedFilters && tempSelectedFilters.categories) {
            Object.entries(tempSelectedFilters.categories).forEach(
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

    // Map category index from categories array to categoryKey
    const getCategoryIndexFromTitle = (title) => {
        const match = title.match(/Category (\d+)/);
        return match ? parseInt(match[1]) : null;
    };

    // Add product counts to category items
    const getCategoriesWithCounts = () => {
        return categories.map((category, categoryIndex) => {
            if (category.type === "checkbox" && category.items) {
                const categoryKey = `category${categoryIndex + 1}`;
                const itemsWithCounts = category.items.map((item) => ({
                    ...item,
                    count: categoryCounts[`${categoryKey}-${item.name}`] || 0,
                }));

                return {
                    ...category,
                    items: itemsWithCounts,
                };
            }
            return category;
        });
    };

    const categoriesWithCounts = getCategoriesWithCounts();

    return (
        <div className="filter-modal-overlay" onClick={handleOverlayClick}>
            <div className="filter-modal-content">
                <div className="filter-modal-header">
                    <h2>Filters</h2>
                    <button
                        className="filter-modal-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <img src={closeIcon} alt="Close" />
                    </button>
                </div>

                <div className="filter-modal-body">
                    {/* Active filter tags */}
                    {filterTags.length > 0 && (
                        <div className="filter-modal-tags-section">
                            <div className="filter-modal-tags-header">
                                <button
                                    onClick={handleDeleteAllFilters}
                                    className="filter-delete-button"
                                >
                                    Delete all <img src={trash} alt="Delete all" />
                                </button>
                            </div>
                            <div className="filter-tags">
                                {filterTags.map((tag) => (
                                    <button
                                        key={`${tag.categoryKey}-${tag.itemName}`}
                                        className="filter-tag"
                                        onClick={() =>
                                            handleRemoveFilter(
                                                tag.categoryKey,
                                                tag.itemName
                                            )
                                        }
                                    >
                                        {tag.itemName}
                                        <img src={closeIcon} alt="Remove filter" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Category sections */}
                    <div className="filter-modal-categories">
                        {categoriesWithCounts.map((cat, i) => {
                            const categoryIndex = getCategoryIndexFromTitle(
                                cat.title
                            );
                            const categoryKey = categoryIndex
                                ? `category${categoryIndex}`
                                : null;

                            return (
                                <CatalogCategory
                                    key={i + 1}
                                    title={cat.title}
                                    items={cat.items ? cat.items : []}
                                    type={cat.type}
                                    selectedItems={
                                        categoryKey
                                            ? tempSelectedFilters.categories[
                                                  categoryKey
                                              ]
                                            : []
                                    }
                                    onCheckboxChange={(itemName, isChecked) =>
                                        handleCheckboxChange(
                                            categoryIndex,
                                            itemName,
                                            isChecked
                                        )
                                    }
                                    rangeValues={tempPriceRangeValues}
                                    onRangeChange={handlePriceRangeChange}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="filter-modal-footer">
                    <button
                        className="filter-modal-delete-all"
                        onClick={handleDeleteAllFilters}
                    >
                        Delete all
                    </button>
                    <button
                        className="filter-modal-apply"
                        onClick={handleApplyFilters}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;
