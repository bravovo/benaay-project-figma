import { useMemo } from "react";

/**
 * Custom hook for filtering products based on categories and price range
 * @param {Array} products - Array of all products
 * @param {Object} selectedFilters - Object containing selected category filters and price range
 * @returns {Array} - Filtered products array
 */
export const useProductFilters = (products, selectedFilters) => {
    const filteredProducts = useMemo(() => {
        if (!products || products.length === 0) {
            return [];
        }

        return products.filter((product) => {
            // Calculate final price with discount
            const finalPrice = product.discount
                ? product.price * (1 - product.discount)
                : product.price;

            // Check price range
            const { min, max } = selectedFilters.priceRange;
            if (finalPrice < min || finalPrice > max) {
                return false;
            }

            // Check category filters (AND logic between categories)
            const categoryEntries = Object.entries(selectedFilters.categories);
            
            // If no category filters selected, show all products (that match price)
            const hasAnyCategoryFilters = categoryEntries.some(
                ([, items]) => items.length > 0
            );
            
            if (!hasAnyCategoryFilters) {
                return true;
            }

            // Product must match ALL categories that have selections
            for (const [categoryKey, selectedItems] of categoryEntries) {
                // Skip if no items selected in this category
                if (selectedItems.length === 0) {
                    continue;
                }

                // Get the product's value for this category
                const productCategoryValue = product[categoryKey];
                
                // Product must match at least one of the selected items in this category
                // (OR within category, AND between categories)
                const matchesCategory = selectedItems.includes(productCategoryValue);
                
                if (!matchesCategory) {
                    return false;
                }
            }

            return true;
        });
    }, [products, selectedFilters]);

    return filteredProducts;
};
