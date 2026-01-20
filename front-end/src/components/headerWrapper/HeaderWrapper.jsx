import axios from "axios";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../registerForm/RegisterForm";

function HeaderWrapper() {
    const [isLoginFormOpened, setIsLoginFormOpened] = useState(false);
    const [isRegisterFormOpened, setIsRegisterFormOpened] = useState(false);

    useEffect(() => {
        if (isLoginFormOpened || isRegisterFormOpened) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isLoginFormOpened, isRegisterFormOpened]);

    const loginToRegister = () => {
        setIsLoginFormOpened(false);
        setIsRegisterFormOpened(true);
    };

    const registerToLogin = () => {
        setIsRegisterFormOpened(false);
        setIsLoginFormOpened(true);
    };

    const submitLoginForm = async ({ email, password }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/login`,
                {
                    email,
                    password,
                }
            );

            if (response.data.success) {
                console.log(response.data);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const submitRegisterForm = async ({ fullName, email, password }) => {
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

            registerToLogin();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <>
            <Header onLoginOpen={() => setIsLoginFormOpened(true)} />
            <LoginForm
                onSubmit={submitLoginForm}
                isOpened={isLoginFormOpened}
                onClose={() => setIsLoginFormOpened(false)}
                onRegisterClick={loginToRegister}
            />
            <RegisterForm
                onSubmit={submitRegisterForm}
                isOpened={isRegisterFormOpened}
                onClose={() => setIsRegisterFormOpened(false)}
                onLoginClick={registerToLogin}
            />
        </>
    );
}

export default HeaderWrapper;
