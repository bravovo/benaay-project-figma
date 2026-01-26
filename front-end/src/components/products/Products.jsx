import "./Products.css";

import Product from "./Product/Product";
import { useMemo, useState } from "react";

function Products({ products }) {
    const [sortType, setSortType] = useState("expensive");

    const sorted = useMemo(() => {
        let sortedProducts = [...products];
        if (sortType === "expensive") {
            return sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortType === "cheaper") {
            return sortedProducts.sort((a, b) => a.price - b.price);
        }
    }, [products, sortType]);

    return (
        <div className="products-container">
            <div className="products-text-container">
                <h2>{sorted.length} products available</h2>
                <div className="products-sorting">
                    <p>Sorting:</p>
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
