import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../state/slices/modalSlice";
import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../registerForm/RegisterForm";

function AuthFormsLayout() {
    const modals = useSelector((state) => state.modals);
    const dispatch = useDispatch();

    const loginToRegister = () => {
        dispatch(openModal({ type: "register" }));
    };

    const registerToLogin = () => {
        dispatch(openModal({ type: "login" }));
    };
    return (
        <div>
            <LoginForm
                isOpened={modals.type === "login"}
                onClose={() => dispatch(closeModal())}
                onRegisterClick={loginToRegister}
            />
            <RegisterForm
                isOpened={modals.type === "register"}
                onClose={() => dispatch(closeModal())}
                onLoginClick={registerToLogin}
            />
        </div>
    );
}

export default AuthFormsLayout;
