import { useState, useRef } from "react";
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

function Header() {
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
                            />
                            <IconButton
                                icon={shoppingCart}
                                title="Shopping cart icon"
                                onClick={() => {}}
                            />
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
                </Container>
            </header>
            <Search
                isOpen={isSearchOpen}
                onClose={closeSearch}
                buttonRef={searchButtonRef}
            />
        </>
    );
}

export default Header;
