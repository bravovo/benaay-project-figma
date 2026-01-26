import "./Product.css";

import heart from "../../../assets/icons/catalog/heart.svg";
import shopBag from "../../../assets/icons/catalog/Shop-bag.svg";

function Product({ product }) {
    const renderPrice = () => {
        if (product.discount) {
            return (
                <p className="product-price">
                    {product.price - product.price * product.discount} ${" "}
                    <span
                        style={{
                            color: "#4B5563",
                            textDecoration: "line-through",
                        }}
                    >
                        {product.price} $
                    </span>
                </p>
            );
        } else {
            return <p className="product-price">{product.price} $</p>;
        }
    };

    const imgUrl = new URL(
        `../../../assets/images/${product.img}`,
        import.meta.url
    ).href;
    return (
        <div className="product-container">
            <div
                className="product-img"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                }}
            >
                {product.discount && (
                    <span className="discount">-{product.discount * 100}%</span>
                )}
                <button className="like-product">
                    <img src={heart} alt="Like product" />
                </button>
            </div>

            <div className="product-info">
                <div>
                    <p className="product-name">{product.name}</p>
                    {renderPrice()}
                </div>
                <button className="add-to-cart-button">
                    <img src={shopBag} alt="Add to cart" />
                </button>
            </div>
        </div>
    );
}

export default Product;
