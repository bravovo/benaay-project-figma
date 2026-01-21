import "./HeaderMenu.css";
import LanguageSelect from "../langSelect/LanguageSelect";
import { languages } from "../../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../state/slices/modalSlice";
import { logout } from "../../state/slices/userSlice";
import { transparentBtn } from "../../styles/styledObjects";
import Button from "../button/Button";

function HeaderMenu() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onLoginClick = () => {
        dispatch(openModal({ type: "login" }));
    };

    const onlogoutClick = () => {
        dispatch(logout());
    };

    return (
        <div className="header-menu-container">
            <div className="menu-head">
                <h1>Menu</h1>
                <LanguageSelect languages={languages} color="#206BB6" />
            </div>
            <div className="menu-links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
                <a href="#">Link 5</a>
            </div>
            <div className="menu-button">
                {user.isLoggedIn ? (
                    <Button
                        title="Log Out"
                        onClick={onlogoutClick}
                        styles={{
                            ...transparentBtn,
                            borderColor: "#206BB6",
                            color: "#206BB6",
                        }}
                    />
                ) : (
                    <Button
                        title="Log In"
                        onClick={onLoginClick}
                        styles={{
                            ...transparentBtn,
                            borderColor: "#206BB6",
                            color: "#206BB6",
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default HeaderMenu;
