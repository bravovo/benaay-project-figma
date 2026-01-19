import { useState, useCallback } from "react";
import "./Header.css";

import { transparentBtn } from "../../styles/styledObjects";
import { Container } from "../layout";
import IconButton from "../iconButton/IconButton";
import Button from "../button/Button";
import LanguageSelect from "../langSelect/LanguageSelect";
import Search from "../search/Search";

import hammer from "../../assets/icons/hammer.svg";
import search from "../../assets/icons/search.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import { languages } from "../../assets/constants";

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeSearch = useCallback(() => {
        setIsSearchOpen(false);
    }, []);

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header-container">
                        <a
                            href="#"
                            style={{ textDecoration: "none" }}
                            className="icon-container"
                        >
                            <img
                                src={hammer}
                                alt="Hammer Icon"
                                className="header-icon"
                            />
                            Bennay
                        </a>
                        <div className="header-links">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                            <a href="#">Link 5</a>
                        </div>
                        <div className="header-buttons">
                            <IconButton
                                icon={search}
                                title="Search Icon"
                                onClick={toggleSearch}
                            />
                            <IconButton
                                icon={shoppingCart}
                                title="Shopping cart icon"
                                onClick={() => {}}
                            />
                            <LanguageSelect languages={languages} />
                            <Button
                                title="Log In"
                                onClick={() => {}}
                                styles={transparentBtn}
                            />
                        </div>
                    </div>
                </Container>
            </header>
            <Search isOpen={isSearchOpen} onClose={closeSearch} />
        </>
    );
}

export default Header;
