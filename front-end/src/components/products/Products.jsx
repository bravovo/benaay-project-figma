import "./Products.css";

import Product from "./product/Product";
import { useMemo, useState } from "react";

import filter from "../../assets/icons/catalog/filter.svg";

function Products({ products, onOpenFilterModal }) {
    const [sortType, setSortType] = useState("expensive");

    const sorted = useMemo(() => {
        let sortedProducts = [...products];
        if (sortType === "expensive") {
            return sortedProducts.sort((a, b) => {
                let priceA = a.discount
                    ? a.price - a.price * a.discount
                    : a.price;
                let priceB = b.discount
                    ? b.price - b.price * b.discount
                    : b.price;
                return priceB - priceA;
            });
        } else if (sortType === "cheaper") {
            return sortedProducts.sort((a, b) => {
                let priceA = a.discount
                    ? a.price - a.price * a.discount
                    : a.price;
                let priceB = b.discount
                    ? b.price - b.price * b.discount
                    : b.price;
                return priceA - priceB;
            });
        }
    }, [products, sortType]);

    return (
        <div className="products-container">
            <div className="products-text-container">
                <h2>{sorted.length} products available</h2>
                <div className="products-sorting">
                    <p>Sorting:</p>
                    <div className="sort-buttons">
                        <button
                            onClick={() => setSortType("expensive")}
                            className={`sorting-button ${
                                sortType === "expensive"
                                    ? "active-sorting-button"
                                    : null
                            }`}
                        >
                            From more expensive
                        </button>
                        <button
                            onClick={() => setSortType("cheaper")}
                            className={`sorting-button ${
                                sortType === "expensive"
                                    ? null
                                    : "active-sorting-button"
                            }`}
                        >
                            From cheaper
                        </button>
                    </div>
                    <button className="filter-adapt-button" onClick={onOpenFilterModal}>
                        <img src={filter} alt="Filter products" />
                    </button>
                </div>
            </div>
            <div className="products-cards">
                {sorted &&
                    sorted.map((product, index) => {
                        return <Product key={index} product={product} />;
                    })}
            </div>
        </div>
    );
}

export default Products;
