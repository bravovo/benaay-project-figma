import "./CatalogButton.css";
import chevronDown from "../../../assets/icons/catalog/chevron-down.svg";

function CatalogButton({ title, isOpen, onClick }) {
    return (
        <button onClick={onClick} className="cat-button">
            <div className="cat-text">
                <h2>{title}</h2>
                <img
                    src={chevronDown}
                    alt=""
                    className={isOpen ? "chevron-img-open" : "chevron-img"}
                />
            </div>
        </button>
    );
}

export default CatalogButton;
