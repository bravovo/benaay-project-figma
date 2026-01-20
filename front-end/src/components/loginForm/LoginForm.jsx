import "./LoginForm.css";
import { useState } from "react";

import { coloredBtn } from "../../styles/styledObjects";
import ModalForm from "../modalForm/ModalForm";
import Button from "../button/Button";

import eye from "../../assets/icons/eye.svg";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function LoginForm({ isOpened, onClose, onRegisterClick }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { login } = useAuth();

    const submitLoginForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                login(response.data.user, response.data.accessToken);
                window.alert(`Welcome, ${response.data.user.fullName}!`);
                console.log(response.data);
                onClose();
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <ModalForm
            isOpen={isOpened}
            onSubmit={submitLoginForm}
            title={"Enter the office"}
            description={
                "Lorem ipsum dolor sit amet consectetur. Sit nisl vulputate euismod et id."
            }
            onClose={onClose}
            isClosable={true}
        >
            <div className="login-form-input">
                <input
                    type="text"
                    name="login"
                    placeholder="Login or e-mail"
                    className="login-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-input-container">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
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
                    type="submit"
                    className="log-in-form-button"
                    styles={{ ...coloredBtn, width: 364 }}
                    title={"Sign in"}
                />
                <button
                    type="button"
                    className="register-link-button"
                    onClick={onRegisterClick}
                >
                    Don't have an account yet?
                    <span className="register-span"> Register</span>
                </button>
            </div>
        </ModalForm>
    );
}

export default LoginForm;
