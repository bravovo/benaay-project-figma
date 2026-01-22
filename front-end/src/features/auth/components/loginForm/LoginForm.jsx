import "./LoginForm.css";
import { useState } from "react";

import { coloredBtn } from "../../../../styles/styledObjects";
import ModalForm from "../../../../components/modalForm/ModalForm";
import Button from "../../../../components/button/Button";

import eye from "../../../../assets/icons/eye.svg";
import { useDispatch } from "react-redux";
import { login } from "../../../../state/slices/userSlice";
import { useTranslation } from "react-i18next";

function LoginForm({ isOpened, onClose, onRegisterClick }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const submitLoginForm = async (e) => {
        e.preventDefault();
        try {
            dispatch(login({ email, password }));

            onClose();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <ModalForm
            isOpen={isOpened}
            onSubmit={submitLoginForm}
            title={t("loginForm.title")}
            description={t("loginForm.description")}
            onClose={onClose}
            isClosable={true}
        >
            <div className="login-form-input">
                <input
                    type="text"
                    name="login"
                    placeholder={t("loginForm.loginPlaceholder")}
                    className="login-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-input-container">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder={t("loginForm.passwordPlaceholder")}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        aria-label={
                            isPasswordVisible
                                ? t("loginForm.hidePasswordLabel")
                                : t("loginForm.showPasswordLabel")
                        }
                    >
                        <img src={eye} alt={t("loginForm.seePasswordAlt")} />
                    </button>
                </div>
                <a href="#" className="forgot-pass-link">
                    {t("loginForm.forgotPassword")}
                </a>
            </div>
            <div className="login-form-controls">
                <Button
                    type="submit"
                    className="log-in-form-button"
                    styles={{ ...coloredBtn, width: "100%" }}
                    title={t("loginForm.signInButton")}
                />
                <button
                    type="button"
                    className="register-link-button"
                    onClick={onRegisterClick}
                >
                    {t("loginForm.noAccountText")}
                    <span className="register-span">
                        {" "}
                        {t("loginForm.registerLink")}
                    </span>
                </button>
            </div>
        </ModalForm>
    );
}

export default LoginForm;
