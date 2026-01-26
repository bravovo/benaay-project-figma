import "./Products.css";

import Product from "./Product/Product";

const product = {
    name: "Product Name Name Name Name",
    img: "c220dc213f36f39ad21c46ce0b958cc0c5202237.jpg",
    price: 140,
    discount: 0.2,
};

function Products() {
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
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </div>
    );
}

export default Products;
