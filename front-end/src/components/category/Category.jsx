import "./Category.css";

import { ArrowUpRight } from "lucide-react";

function Category({ styles, number, title, description, link }) {
    return (
        <div className="category-container" style={styles.container}>
            <div className="number-title-container">
                <div className="category-number" style={styles.number}>
                    {number}
                </div>
                <h3 className="category-title">{title}</h3>
            </div>
            <div className="desc-button-container">
                <p className="category-description">{description}</p>
                <a href={link} style={styles.link} className="category-link">
                    Browse products
                    <ArrowUpRight
                        size={20}
                        alt="Arrow up right"
                        style={styles.link.arrow}
                    />
                </a>
            </div>
        </div>
    );
}

export default Category;
