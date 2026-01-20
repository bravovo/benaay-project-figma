import "./RegisterForm.css";
import { useState } from "react";

import eye from "../../assets/icons/eye.svg";
import { coloredBtn } from "../../styles/styledObjects";
import Button from "../button/Button";
import ModalForm from "../modalForm/ModalForm";

function RegisterForm({ onSubmit, isOpened, onClose, onLoginClick }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ fullName, email, password });
    };

    return (
        <ModalForm
            isOpen={isOpened}
            onSubmit={submit}
            title={"Registration"}
            description={
                "Lorem ipsum dolor sit amet consectetur. Sit nisl vulputate euismod et id."
            }
            onClose={onClose}
            isClosable={true}
        >
            <div className="register-form-input">
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="register-input"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="register-input"
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
            </div>
            <div className="register-form-controls">
                <Button
                    type="submit"
                    className="register-in-form-button"
                    styles={{ ...coloredBtn, width: 364 }}
                    title={"Sign up"}
                />
                <button
                    className="login-link-button"
                    onClick={onLoginClick}
                    type="button"
                >
                    Already registered?
                    <span className="login-span"> Login</span>
                </button>
            </div>
        </ModalForm>
    );
}

export default RegisterForm;
