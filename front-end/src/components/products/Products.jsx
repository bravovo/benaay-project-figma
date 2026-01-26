import "./Products.css";

import Product from "./product/Product";

function Products({ products }) {
    return (
        <div className="products-container">
            <div className="products-text-container">
                <h2>1500 products available</h2>
                <div className="products-sorting">
                    <p>Sorting:</p>
                    <button>From more expensive</button>
                    <button>From cheaper</button>
                </div>
            </div>
            <div className="products-cards">
                {products &&
                    products.map((product, index) => {
                        return <Product key={index} product={product} />;
                    })}
            </div>
        </div>
    );
}

export default Products;
