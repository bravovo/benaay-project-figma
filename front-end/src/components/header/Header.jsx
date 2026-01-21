import { useState, useRef, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/slices/userSlice";
import { openModal } from "../../state/slices/modalSlice";
import menu from "../../assets/icons/menu.svg";
import HeaderMenu from "../headerMenu/HeaderMenu";

function Header() {
    const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
    const searchButtonRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        if (headerMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [headerMenuOpen]);

    const onLoginClick = () => {
        dispatch(openModal({ type: "login" }));
    };

    const onlogoutClick = () => {
        dispatch(logout());
    };

    const toggleSearch = () => {
        setIsSearchOpen((prev) => !prev);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

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
                                ref={searchButtonRef}
                                className="search-icon"
                            />
                            <IconButton
                                icon={shoppingCart}
                                title="Shopping cart icon"
                                onClick={() => {}}
                                className="shopping-cart-icon"
                            />
                            <button
                                onClick={() => {
                                    setHeaderMenuOpen((prev) => !prev);
                                }}
                                className="header-menu-button"
                            >
                                {headerMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M15 5L5 15M5 5L15 15"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <img src={menu} alt="Header menu" />
                                )}
                            </button>
                            <div className="header-buttons-visible">
                                <LanguageSelect languages={languages} />
                                {user.isLoggedIn ? (
                                    <Button
                                        title="Log Out"
                                        onClick={onlogoutClick}
                                        styles={transparentBtn}
                                    />
                                ) : (
                                    <Button
                                        title="Log In"
                                        onClick={onLoginClick}
                                        styles={transparentBtn}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <Search
                isOpen={isSearchOpen}
                onClose={closeSearch}
                buttonRef={searchButtonRef}
            />
            {headerMenuOpen && <HeaderMenu />}
        </>
    );
}

export default Header;
