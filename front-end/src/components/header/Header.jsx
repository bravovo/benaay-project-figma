import { useState, useCallback, useRef } from "react";
import "./Header.css";

import { coloredBtn, transparentBtn } from "../../styles/styledObjects";
import { Container } from "../layout";
import IconButton from "../iconButton/IconButton";
import Button from "../button/Button";
import LanguageSelect from "../langSelect/LanguageSelect";
import Search from "../search/Search";

import hammer from "../../assets/icons/hammer.svg";
import search from "../../assets/icons/search.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import { languages } from "../../assets/constants";
import ModalForm from "../modalForm/ModalForm";

import eye from "../../assets/icons/eye.svg";

import axios from "axios";

function Header() {
    const [isLoginFormOpened, setIsLoginFormOpened] = useState(false);
    const [loginData, setLoginData] = useState({ login: "", password: "" });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const searchButtonRef = useRef(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toggleSearch = useCallback(() => {
        setIsSearchOpen((prev) => !prev);
    }, []);

    const closeSearch = useCallback(() => {
        setIsSearchOpen(false);
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/login`,
                {
                    email: loginData.login,
                    password: loginData.password,
                }
            );

            if (response.data.success) {
                console.log(response.data);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
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
                            <Button
                                title="Log In"
                                onClick={() => {
                                    setIsLoginFormOpened(true);
                                }}
                                styles={transparentBtn}
                            />
                        </div>
                    </div>
                </Container>
            </header>
            <Search
                isOpen={isSearchOpen}
                onClose={closeSearch}
                buttonRef={searchButtonRef}
            />
            <ModalForm
                isOpen={isLoginFormOpened}
                onSubmit={submitForm}
                title={"Enter the office"}
                description={
                    "Lorem ipsum dolor sit amet consectetur. Sit nisl vulputate euismod et id."
                }
                onClose={() => setIsLoginFormOpened(false)}
                isClosable={true}
            >
                <div className="login-form-input">
                    <input
                        type="text"
                        name="login"
                        placeholder="Login or e-mail"
                        className="login-input"
                        onChange={handleInputChange}
                    />
                    <div className="password-input-container">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="password"
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setIsPasswordVisible((prev) => !prev)
                            }
                            aria-label={
                                isPasswordVisible
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            <img src={eye} alt="See password" />
                        </button>
                    </div>
                    <a href="#" className="forgot-pass-link">
                        Forgot your password?
                    </a>
                </div>
                <div className="login-form-controls">
                    <Button
                        className="log-in-form-button"
                        styles={{ ...coloredBtn, width: 364 }}
                        title={"Sign in"}
                        onClick={() => {}}
                    />
                    <a href="#" className="register-link">
                        Don't have an account yet?
                        <span className="register-span"> Register</span>
                    </a>
                </div>
            </ModalForm>
        </>
    );
}

export default Header;
