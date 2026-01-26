import "./Breadcrumbs.css";

import chevronRight from "../../assets/icons/catalog/chevron-right.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Breadcrumbs() {
    const { routes } = useSelector((state) => state.route);

    return (
        <nav className="breadcrumbs-container">
            {routes.map((item, index) => {
                const isLast = index === routes.length - 1;

                return (
                    <Link
                        to={item.path}
                        key={`${item.title}-${index}`}
                        className="breadcrumb"
                    >
                        <span
                            className={`breadcrumb-item ${
                                isLast ? "breadcrumb-last" : ""
                            }`}
                        >
                            {item.title}
                        </span>

                        {!isLast && (
                            <img
                                src={chevronRight}
                                alt=""
                                className="breadcrumb-separator-img"
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;
