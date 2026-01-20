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

    return (
        <>
            <Header onLoginOpen={() => setIsLoginFormOpened(true)} />
            <LoginForm
                isOpened={isLoginFormOpened}
                onClose={() => setIsLoginFormOpened(false)}
                onRegisterClick={loginToRegister}
            />
            <RegisterForm
                isOpened={isRegisterFormOpened}
                onClose={() => setIsRegisterFormOpened(false)}
                onLoginClick={registerToLogin}
            />
        </>
    );
}

export default HeaderWrapper;
