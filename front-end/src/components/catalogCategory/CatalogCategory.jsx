import "./CatalogCategory.css";
import { useState } from "react";
import Search from "./search/Search";
import CheckBox from "./checkbox/CheckBox";
import CatalogButton from "./catalogButton/CatalogButton";

function CatalogCategory({ title, items, type }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const renderContent = () => {
        if (type === "checkbox") {
            return (
                <div className="cat-content">
                    {items.map((item, index) => (
                        <CheckBox key={index} item={item} />
                    ))}
                </div>
            );
        } else if (type === "price") {
            return (
                <div className="cat-content">
                    <h1>Hellow world</h1>
                </div>
            );
        }
    };

    return (
        <div className="cat-container">
            <CatalogButton
                isOpen={isOpen}
                onClick={handleToggle}
                title={title}
            />
            {isOpen && type === "checkbox" && (
                <div style={{ paddingRight: "24px" }}>
                    <Search />
                </div>
            )}
            {isOpen && renderContent()}
        </div>
    );
}

export default CatalogCategory;
