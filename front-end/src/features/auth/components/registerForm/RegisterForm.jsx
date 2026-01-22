import "./RegisterForm.css";
import { useState } from "react";

import eye from "../../../../assets/icons/eye.svg";
import { coloredBtn } from "../../../../styles/styledObjects";
import Button from "../../../../components/button/Button";
import ModalForm from "../../../../components/modalForm/ModalForm";
import axios from "axios";
import { useTranslation } from "react-i18next";

function RegisterForm({ isOpened, onClose, onLoginClick }) {
    const { t } = useTranslation();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const submitRegisterForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/register`,
                {
                    fullName,
                    email,
                    password,
                }
            );

            if (response.data.success) {
                console.log(response.data);
            }

            onLoginClick();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <ModalForm
            isOpen={isOpened}
            onSubmit={submitRegisterForm}
            title={t("registerForm.title")}
            description={t("registerForm.description")}
            onClose={onClose}
            isClosable={true}
        >
            <div className="register-form-input">
                <input
                    type="text"
                    name="fullname"
                    placeholder={t("registerForm.fullNamePlaceholder")}
                    className="register-input"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder={t("registerForm.emailPlaceholder")}
                    className="register-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-input-container">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder={t("registerForm.passwordPlaceholder")}
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        aria-label={
                            isPasswordVisible
                                ? t("registerForm.hidePasswordLabel")
                                : t("registerForm.showPasswordLabel")
                        }
                    >
                        <img src={eye} alt={t("registerForm.seePasswordAlt")} />
                    </button>
                </div>
            </div>
            <div className="register-form-controls">
                <Button
                    type="submit"
                    className="register-in-form-button"
                    styles={{ ...coloredBtn, width: "100%" }}
                    title={t("registerForm.signUpButton")}
                />
                <button
                    className="login-link-button"
                    onClick={onLoginClick}
                    type="button"
                >
                    {t("registerForm.alreadyRegisteredText")}
                    <span className="login-span">
                        {" "}
                        {t("registerForm.loginLink")}
                    </span>
                </button>
            </div>
        </ModalForm>
    );
}

export default RegisterForm;
