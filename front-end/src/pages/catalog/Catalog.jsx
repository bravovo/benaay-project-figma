import "./Catalog.css";
import { Header } from "../../features/header";
import { Footer } from "../../features/footer";
import CatalogCategory from "../../components/catalogCategory/CatalogCategory";
import { Container } from "../../components/layout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { setRoute } from "../../state/slices/routeSlice";
import Products from "../../components/products/Products";
import { AuthFormsLayout } from "../../features/auth/index";
import { useState, useEffect } from "react";
import Filter from "../../components/catalogCategory/filter/Filter";
import { useProductFilters } from "../../hooks/useProductFilters";
import { useCategoryProductCounts } from "../../hooks/useCategoryProductCounts";
import FilterModal from "../../components/filterModal/FilterModal";

import {
    categories,
    products,
    RANGE_MIN,
    RANGE_MAX,
} from "../../data/constants";

function Catalog() {
    const dispatch = useDispatch();

    // Initialize state for selected filters
    const [selectedFilters, setSelectedFilters] = useState({
        categories: {
            category1: [],
            category2: [],
            category3: [],
            category4: [],
            category5: [],
            category6: [],
        },
        priceRange: { min: RANGE_MIN, max: RANGE_MAX },
    });

    const [priceRangeValues, setPriceRangeValues] = useState([
        RANGE_MIN,
        RANGE_MAX,
    ]);

    // State for filter modal visibility
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    useEffect(() => {
        dispatch(
            setRoute({
                currentRoute: "/catalog",
                routes: { title: "Catalogue", path: "/catalog" },
            })
        );
    }, [dispatch]);

    // Use the custom hook to get filtered products
    const filteredProducts = useProductFilters(products, selectedFilters);

    // Calculate product counts for each category item
    const categoryCounts = useCategoryProductCounts(products, categories);

    // Handler for checkbox changes
    const handleCheckboxChange = (categoryIndex, itemName, isChecked) => {
        const categoryKey = `category${categoryIndex}`;

        setSelectedFilters((prev) => {
            const updatedCategories = { ...prev.categories };

            if (isChecked) {
                // Add item to selected filters
                updatedCategories[categoryKey] = [
                    ...updatedCategories[categoryKey],
                    itemName,
                ];
            } else {
                // Remove item from selected filters
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

    // Handler for price range changes
    const handlePriceRangeChange = (values) => {
        setPriceRangeValues(values);
        setSelectedFilters((prev) => ({
            ...prev,
            priceRange: { min: values[0], max: values[1] },
        }));
    };

    // Handler for removing a single filter tag
    const handleRemoveFilter = (categoryKey, itemName) => {
        setSelectedFilters((prev) => {
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
        setSelectedFilters({
            categories: {
                category1: [],
                category2: [],
                category3: [],
                category4: [],
                category5: [],
                category6: [],
            },
            priceRange: { min: RANGE_MIN, max: RANGE_MAX },
        });
        setPriceRangeValues([RANGE_MIN, RANGE_MAX]);
    };

    // Map category index from categories array to categoryKey
    const getCategoryIndexFromTitle = (title) => {
        const match = title.match(/Category (\d+)/);
        return match ? parseInt(match[1]) : null;
    };

    // Handler for opening filter modal
    const handleOpenFilterModal = () => {
        setIsFilterModalOpen(true);
    };

    // Handler for closing filter modal
    const handleCloseFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    // Handler for applying filters from modal
    const handleApplyFilters = (newFilters, newPriceRangeValues) => {
        setSelectedFilters(newFilters);
        setPriceRangeValues(newPriceRangeValues);
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
        <>
            <AuthFormsLayout />
            <Header />
            <main className="main catalog-container">
                <Container>
                    <Breadcrumbs />
                </Container>
                <Container>
                    <div className="catalog-layout">
                        <aside className="cats-aside">
                            <Filter
                                deleteAll={handleDeleteAllFilters}
                                selectedFilters={selectedFilters}
                                onRemoveFilter={handleRemoveFilter}
                            />
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
                                                ? selectedFilters.categories[
                                                      categoryKey
                                                  ]
                                                : []
                                        }
                                        onCheckboxChange={(
                                            itemName,
                                            isChecked
                                        ) =>
                                            handleCheckboxChange(
                                                categoryIndex,
                                                itemName,
                                                isChecked
                                            )
                                        }
                                        rangeValues={priceRangeValues}
                                        onRangeChange={handlePriceRangeChange}
                                    />
                                );
                            })}
                        </aside>
                        <section className="catalog-products">
                            <Products
                                products={filteredProducts}
                                onOpenFilterModal={handleOpenFilterModal}
                            />
                        </section>
                    </div>
                </Container>
            </main>
            <Footer />
            {isFilterModalOpen && (
                <FilterModal
                    onClose={handleCloseFilterModal}
                    categories={categories}
                    products={products}
                    selectedFilters={selectedFilters}
                    onApplyFilters={handleApplyFilters}
                    priceRangeValues={priceRangeValues}
                />
            )}
        </>
    );
}

export default Catalog;
