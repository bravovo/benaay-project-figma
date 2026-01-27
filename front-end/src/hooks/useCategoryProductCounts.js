import { useMemo } from "react";

/**
 * Custom hook for calculating product counts per category item
 * @param {Array} products - Array of all products
 * @param {Array} categories - Array of category definitions
 * @returns {Object} - Object mapping category items to product counts
 */
export const useCategoryProductCounts = (products, categories) => {
    const categoryCounts = useMemo(() => {
        if (!products || products.length === 0 || !categories) {
            return {};
        }

        const counts = {};

        // Initialize counts for all categories and items
        categories.forEach((category, categoryIndex) => {
            if (category.type === "checkbox" && category.items) {
                const categoryKey = `category${categoryIndex + 1}`;
                
                category.items.forEach((item) => {
                    const key = `${categoryKey}-${item.name}`;
                    counts[key] = 0;
                });
            }
        });

        // Count products for each category item
        products.forEach((product) => {
            // Check each category field (category1 to category6)
            for (let i = 1; i <= 6; i++) {
                const categoryKey = `category${i}`;
                const productCategoryValue = product[categoryKey];

                if (productCategoryValue) {
                    const key = `${categoryKey}-${productCategoryValue}`;
                    if (counts[key] !== undefined) {
                        counts[key]++;
                    }
                }
            }
        });

        return counts;
    }, [products, categories]);

    return categoryCounts;
};
