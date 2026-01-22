import { useState, useRef } from "react";
import "./Header.css";

import { transparentBtn } from "../../../../styles/styledObjects";
import { Container } from "../../../../components/layout";
import IconButton from "../../../../components/iconButton/IconButton";
import Button from "../../../../components/button/Button";
import LanguageSelect from "../langSelect/LanguageSelect";
import Search from "../search/Search";

import hammer from "../../../../assets/icons/hammer.svg";
import search from "../../assets/search.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import { languages } from "../../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../state/slices/userSlice";
import { openModal } from "../../../../state/slices/modalSlice";
import menu from "../../assets/menu.svg";
import HeaderMenu from "../headerMenu/HeaderMenu";
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
    const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
    const searchButtonRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                            {t("appTitle")}
                        </a>
                        <div className="header-links">
                            <a href="#">{t("home.header.link1")}</a>
                            <a href="#">{t("home.header.link2")}</a>
                            <a href="#">{t("home.header.link3")}</a>
                            <a href="#">{t("home.header.link4")}</a>
                            <a href="#">{t("home.header.link5")}</a>
                        </div>
                        <div className="header-buttons">
                            <IconButton
                                icon={search}
                                title={t("home.header.searchIconTitle")}
                                onClick={toggleSearch}
                                ref={searchButtonRef}
                                className="search-icon"
                            />
                            <IconButton
                                icon={shoppingCart}
                                title={t("home.header.cartIconTitle")}
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
                                        title={t("home.header.logoutButton")}
                                        onClick={onlogoutClick}
                                        styles={transparentBtn}
                                    />
                                ) : (
                                    <Button
                                        title={t("home.header.loginButton")}
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
