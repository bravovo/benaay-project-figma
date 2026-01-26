import "./CatalogCategory.css";
import { useState } from "react";
import Search from "./search/Search";
import CheckBox from "./checkbox/CheckBox";
import CatalogButton from "./catalogButton/CatalogButton";
import { Range } from "react-range";

import { RANGE_MAX, RANGE_MIN } from "../../data/constants";

function CatalogCategory({ title, items, type, selectedItems, onCheckboxChange, rangeValues, onRangeChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState(items);

    const handleToggle = () => {
        setFilteredItems(items);
        setIsOpen((prev) => !prev);
    };

    const searchItems = (searchTerm) => {
        const foundItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(foundItems);

        return foundItems;
    };

    const getFormattedValue = (value) => {
        if (value < RANGE_MIN) return RANGE_MIN;
        if (value > RANGE_MAX) return RANGE_MAX;
        return value;
    };

    const renderContent = () => {
        if (type === "checkbox") {
            return (
                <div className="cat-content">
                    {filteredItems.map((item, index) => (
                        <CheckBox 
                            key={index} 
                            item={item}
                            checked={selectedItems?.includes(item.name)}
                            onChange={onCheckboxChange}
                        />
                    ))}
                </div>
            );
        } else if (type === "price") {
            return (
                <div className="cat-content cat-price-content">
                    <div className="from-to">
                        <span>
                            from{" "}
                            <input
                                type="number"
                                value={rangeValues[0]}
                                min={RANGE_MIN}
                                max={RANGE_MAX}
                                onChange={(e) => {
                                    const value = getFormattedValue(
                                        Number(e.target.value)
                                    );
                                    onRangeChange([value, rangeValues[1]]);
                                }}
                            />
                        </span>
                        <span className="from-to-right">
                            to{" "}
                            <input
                                type="number"
                                value={rangeValues[1]}
                                min={RANGE_MIN}
                                max={RANGE_MAX}
                                onChange={(e) => {
                                    const value = getFormattedValue(
                                        Number(e.target.value)
                                    );
                                    onRangeChange([rangeValues[0], value]);
                                }}
                            />
                        </span>
                    </div>
                    <div className="range">
                        <Range
                            label="Select your value"
                            step={0.1}
                            min={RANGE_MIN}
                            max={RANGE_MAX}
                            values={rangeValues}
                            onChange={(values) => onRangeChange(values)}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: "1px",
                                        width: "215px",
                                        background: `linear-gradient(
                                to right,
                                #e5e7eb 0%,
                                #e5e7eb ${(rangeValues[0] / RANGE_MAX) * 100}%,
                                #206BB6 ${(rangeValues[0] / RANGE_MAX) * 100}%,
                                #206BB6 ${(rangeValues[1] / RANGE_MAX) * 100}%,
                                #e5e7eb ${(rangeValues[1] / RANGE_MAX) * 100}%,
                                #e5e7eb 100%
                                )`,
                                        borderRadius: "999px",
                                    }}
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    key={props.key}
                                    style={{
                                        ...props.style,
                                        height: "12px",
                                        width: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: "#206BB6",
                                    }}
                                />
                            )}
                        />
                    </div>
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
                    <Search onSearch={searchItems} />
                </div>
            )}
            {isOpen && renderContent()}
        </div>
    );
}

export default CatalogCategory;
